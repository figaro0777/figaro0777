import React from "react";

const FeedbackMessage = ({ message, onDelete }) => (
    <div>
        <div>{message.author}</div>
        <div>{message.title}</div>
        <button className="FeedbackButton" onClick={onDelete}>delete message</button>
        <hr/>
    </div>
);

export default FeedbackMessage;
