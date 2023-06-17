import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
// import { axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom";


function DeleteConfirmation() {
    const [show, setShow] = useState(false);
    const currentUser = useCurrentUser();
    // const history = useHistory();
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"  //modal will not close when clicking outside it
          keyboard={false}
        >
        <Modal.Header closeButton>
          <Modal.Title>Hey {currentUser?.username}</Modal.Title>
        </Modal.Header>
          <Modal.Body>
          Are you sure you want to delete it?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleDelete}>Delete</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default DeleteConfirmation;


// import React from 'react'
// import { Modal, Button } from "react-bootstrap";

// const DeleteConfirmation = ({ showModal, hideModal, handleDelete, message }) => {
//     return (
//         <Modal show={showModal} onHide={hideModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Delete Confirmation</Modal.Title>
//         </Modal.Header>
//         <Modal.Body><div className="alert alert-danger">{message}</div></Modal.Body>
//         <Modal.Footer>
//           <Button variant="default" onClick={hideModal}>
//             Cancel
//           </Button>
//           <Button variant="danger" onClick={handleDelete}>
//             Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     )
// }

// export default DeleteConfirmation;
