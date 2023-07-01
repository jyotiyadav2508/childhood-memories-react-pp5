import React from 'react';
// import { Modal, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const DeleteModal=({onDelete, onCancel}) => {
    const currentUser = useCurrentUser();
    return (
      <>  
        <Modal show={true} onHide={onCancel}>
          <Modal.Header closeButton>
            <Modal.Title>Hey {currentUser?.username}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete it?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onCancel}>
              Cancel
            </Button>
            <Button variant="primary" onClick={onDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default DeleteModal;