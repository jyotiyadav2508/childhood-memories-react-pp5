import React from 'react';
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { DropdownMenu } from "../../components/DropdownMenu";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";


/**
 * Renders a selected Comment object from the API
 * Credit (variable, functions) - Moments walkthrough
 */
const Comment = (props) => {
    const{ profile_id, profile_image, owner, updated_on,
        content, id, setPost, setComments } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;


     /** 
   * Handles deleting comment based on its id
   * Reduces the total number of comments by 1
   * Credit - Moments walkthrough, CI course material
    */
   const handleDelete = async() => {
    try{
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

    }catch(err){}
   };

  return (
    <div>
        <hr />
        <Media>
            <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} />
            </Link>
            <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_on}</span>
          <p>{content}</p>
        </Media.Body>
        {is_owner && (
          <DropdownMenu handleEdit={() => {}} handleDelete={handleDelete} />
        )}
        </Media>
    </div>
  );
};

export default Comment