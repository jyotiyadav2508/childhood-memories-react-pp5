import React, { useState } from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { DropdownMenu } from "../../components/DropdownMenu";
import DeleteModal from "../../components/DeleteModal";

/**
 * Renders a selected Post object from the API
 * Credit (variable, functions) - Moments walkthrough
 */
const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comment_count,
    likes_count,
    post_likes_id,
    title,
    content,
    image,
    updated_on,
    postPage,
    setPosts,
  } = props;
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  /**
   * For user authentication
   * To restrict owner of the post not to like their own post
   * */
  const [currentUser] = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();
//   const [showAlert, setShowAlert] = useState(false);

  /*
  Handles editing of the post
*/
  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };
  /**
   * Handles deleting of the post
   * Shows Alert message when the post is deleted
   * Redirects the user to the main page in over a second
   */
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      setTimeout(function () {
        history.goBack();
      }, 1000);
    } catch (err) {
      // console.log(err);
    }
    setShowDeleteModal(false);
  };
  const handleCancel=()=>{
    setShowDeleteModal(false);
  }
  const handleDeleteClick=() =>{
    setShowDeleteModal(true);
  }

  /**
   * To like a post by the user
   * Sends a request to the API
   * Increases likes number by 1
   */
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/post_likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, post_likes_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  /**
   * To unlike a post by the user who liked it
   * Sends a request to the API
   * Decreases likes number by 1
   */
  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/post_likes/${post_likes_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, post_likes_id: null }
            : post;
        }),
      }));
    } catch (err) {
    //   console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_on}</span>
            {is_owner && postPage && (
              <DropdownMenu
                handleEdit={handleEdit}
                handleDeleteClick={handleDeleteClick}
              />
            )}
            {showDeleteModal && (
                    <DeleteModal onDelete={handleDelete} onCancel={handleCancel} />
                  )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : post_likes_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comment_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
