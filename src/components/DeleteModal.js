import React, {useState} from 'react';
import { Modal, Button } from "react-bootstrap";

const DeleteModal=({onDelete, onCancel}) => {
    const [showModal, setShowModal] = useState(false);
  
    const handleClose = () => setShowModal(false);
    // const handleShow = () => setShowModal(true);
  
    return (
      <>  
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Hey there</Modal.Title>
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