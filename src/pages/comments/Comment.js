import React, { useState } from "react";
import { Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { DropdownMenu } from "../../components/DropdownMenu";
import CommentEditForm from "./CommentEditForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import DeleteModal from "../../components/DeleteModal";

/**
 * Renders a selected Comment object from the API
 * Credit (variable, functions) - Moments walkthrough
 */
const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_on,
    content,
    id,
    post,
    setPost,
    setComments,
    comment_likes_id,
    comment_likes_count,
  } = props;

  const [showDeleteModal, setShowDeleteModal] = useState(false);

    /**
   * For user authentication
   * To restrict owner of the post not to like their own post
   * */

  const currentUser = useCurrentUser();
//   const history = useHistory();
  const isOwner = currentUser?.username === owner;
  const [showEditForm, setShowEditForm] = useState(false);

  /**
   * Handles deleting comment based on its id
   * Reduces the total number of comments by 1
   * Credit - Moments walkthrough, CI course material
   */
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {}
        setShowDeleteModal(false);
    };
    const handleCancel=()=>{
        setShowDeleteModal(false);
    }
    const handleDeleteClick=() =>{
        setShowDeleteModal(true);
    }

  /**
   * To like a comment by the user
   * Sends a request to the API
   * Increases likes number by 1
   */
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/comment_likes/", { comment: id });
      console.log("data",data);
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                comment_likes_count: comment.comment_likes_count + 1,
                comment_likes_id: data.id,
              }
            : comment;

        }),
         }));
         console.log("Comments likes count", comment_likes_count);
    } catch (err) {
      console.log(err);
    }
  };
  /**
   * To unlike a comment by the user who liked it
   * Sends a request to the API
   * Decreases likes number by 1
   */
  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/comment_likes/${comment_likes_id}`);
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                comment_likes_count: comment.comment_likes_count - 1,
                comment_likes_id: null,
              }
            : comment;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <hr />
      <Media>
        <Link
          to={`/profiles/${profile_id}`}
          aria-label="Click here to go to profile page"
        >
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_on}</span>
          <div className=" text-right">
            {isOwner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't like your own comments!</Tooltip>}
              >
                <i className="far fa-heart" />
              </OverlayTrigger>
            ) : comment_likes_id ? (
              <span onClick={handleUnlike}>
                <i className={`fas fa-heart ${styles.Heart}`}></i>
              </span>
            ) : currentUser ? (
              <span onClick={handleLike}>
                <i className={`far fa-heart ${styles.HeartOutline}`} />
              </span>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to like comments!</Tooltip>}
              >
                <i className="far fa-heart" />
              </OverlayTrigger>
            )}
            {comment_likes_count}
          </div>
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              post={post}
              profileImage={profile_image}
              updated_on={updated_on}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
        </Media.Body>
        {/* Display the dropdown menu for owner of the comment
                                    to either edit or delete it */}
        {isOwner && !showEditForm && (
          <DropdownMenu
                // handleEdit={handleEdit}
                handleDeleteClick={handleDeleteClick}
            handleEdit={() => setShowEditForm(true)}
            // handleDelete={handleDelete}
          />
        
        )}
        {showDeleteModal && (
                    <DeleteModal onDelete={handleDelete} onCancel={handleCancel} />
                  )}
      </Media>
    </>
  );
};

export default Comment;
