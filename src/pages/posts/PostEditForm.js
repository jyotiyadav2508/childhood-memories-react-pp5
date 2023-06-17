// Codes credit: CI's Moments walkthrough project

import React, { useEffect, useRef, useState } from "react";

import { Container, Form, Button, Alert, Image } from "react-bootstrap";

import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

/**
 * Form to edit posts
 */
function PostEditForm() {
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
  const { id } = useParams(); // to get the parameter out of the URL

  /**
   * Using the post id parameter, it handles API request and gets data of post
   * Prevents editing other users' posts
   * If other than user tries to edit they get redirected to main page
   */
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/${id}/`);
        const { title, content, category, image, is_owner } = data;

        is_owner
          ? setPostData({ title, content, category, image })
          : history.push("/");
      } catch (err) {
        console.log(err);
        if (err.response?.status !== 401) {
            setErrors(err.response?.data);
        }
      }
    };

    handleMount();
  }, [history, id]);

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
  /*
   * Handles Edit post form submission
   * axios request is put instaed of post
   * Redirects the user to the post page
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);

    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      await axiosReq.put(`/posts/${id}/`, formData);
      history.push(`/posts/${id}`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Container>
      <h3 className={`${styles.Title} mt-3`}>
        Hi {currentUser?.username}, go ahead and edit your post here!
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
          <i class="fa-solid fa-square-plus"></i>Update Post
        </Button>
      </Form>
      <br />
    </Container>
  );
}

export default PostEditForm;
