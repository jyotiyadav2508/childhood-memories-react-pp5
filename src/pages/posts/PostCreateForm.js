// Codes credit: CI's Moments walkthrough project

import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Upload from "../../assets/upload.png";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useRedirect } from "../../hooks/useRedirect";

/**
 * Form to create posts
 */
function PostCreateForm() {
  useRedirect("loggedOut");

  const [errors, setErrors] = useState({});
  const currentUser = useCurrentUser();

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
  });
  const { title, content, image, category } = postData;
  const imageInput = useRef(null);
  const history = useHistory();

  /**
   * Populate the postData strings
   */

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };
  /**
   * Create a local link to the file passed into it
   * Change uploaded image and remove uploaded image by revoke
   */
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };
  /**
   * submits data to childhood-memories-drf-api
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Container>
      <h3 className={`${styles.Title} mt-3`}>
        Welcome {currentUser?.username} , Let's share some childhood memory with
        us!
      </h3>

      <Form onSubmit={handleSubmit} className={`${styles.Container} mb-3`}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a title"
            name="title"
            aria-label="title"
            value={title}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.title?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group>
          <Form.Label>Which category defines it the best?</Form.Label>
          <Form.Control
            as="select"
            name="category"
            aria-label="category"
            value={category}
            onChange={handleChange}
          >
            <option value="Select a category">Select a category</option>
            <option value="Books">Books</option>
            <option value="Sport">Sport</option>
            <option value="Person">Person</option>
            <option value="Place">Place</option>
            <option value="School">School</option>
            <option value="Event">Event</option>
            <option value="Media">Media</option>
            <option value="Art">Art</option>
            <option value="Others">Others</option>
          </Form.Control>
        </Form.Group>
        {errors.category?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Decribe your memory</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="content"
            aria-label="content"
            placeholder="Describe in a few words..."
            value={content}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.content?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group className="text-center">
          {image ? (
            <>
              <figure>
                <Image className={appStyles.Image} src={image} rounded />
              </figure>
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>
            </>
          ) : (
            <Form.Label
              className="d-flex justify-content-center"
              htmlFor="image-upload"
            >
              <Asset
                className={styles.Asset}
                src={Upload}
                message="Click here to upload an image"
              />
            </Form.Label>
          )}
          <Form.File
            id="image-upload"
            accept="image/*"
            onChange={handleChangeImage}
            ref={imageInput}
          />
        </Form.Group>
        {errors.image?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Button
          className={`${btnStyles.Button} ${btnStyles.Bright} mr-4`}
          onClick={() => history.goBack()}
          aria-label="Click here to go back to previous page"
          type="submit"
        >
          <i className="fa-solid fa-arrow-left"></i> Go back
        </Button>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Bright}`}
          type="submit"
        >
          <i className="fa-solid fa-square-plus"></i>Submit Post
        </Button>
      </Form>
      <br />
    </Container>
  );
}

export default PostCreateForm;
