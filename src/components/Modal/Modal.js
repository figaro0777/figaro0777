import React from 'react';
import "./Modal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Modal01() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button className="ModalButton" onClick={handleShow} >
                LogIn
            </button>

            <Modal show={show} onHide={handleClose} size="sm" scrollable={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Authorization</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {<div><input className="ModalInput" placeholder={"email"} /></div>}
                    {<div><input className="ModalInput" placeholder={"password"} /></div>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


export default Modal01;