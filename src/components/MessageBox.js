import React, { useState , useRef, useEffect } from "react";
import Modal from 'react-modal';
import './MessageBox.css';

const MessageBox = (props) => {
    return (
    <React.Fragment  className="MessageBox">
    <Modal isOpen={props.isOpen}>
        {props.msg}
        <br></br>
        <button onClick={()=> {props.closeHandler(false)}}>{props.btnMsg}</button>
    </Modal>
    </React.Fragment>
    );
}
export default MessageBox;
