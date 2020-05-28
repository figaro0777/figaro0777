import React from 'react';
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import "./Modal.css"


function Modal02 (np) {
    const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);
    return (
        <div>
            <button className="ModalButton" onClick={open}>LogIn</button>
            <DialogOverlay
                style={{ background: "hsla(0, 100%, 100%, 0.9)", zIndex:11 }}
                isOpen={showDialog}
                onDismiss={close}
            >
                <DialogContent className="ModalBody"
                    style={{ boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)" }}
                >
                    {<div><input className="ModalInput" placeholder={"email"} /></div>}
                    {<div><input className="ModalInput" placeholder={"password"} /></div>}
                    <button className="ModalInputButton" onClick={close}>LogIn</button>
                    <button className="ModalInputButton" onClick={close}>Close</button>
                </DialogContent>
            </DialogOverlay>
        </div>
    );
}
export default Modal02;