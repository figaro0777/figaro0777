import React from "react";

const FeedbackMessage = ({ message, onDelete }) => (
    <div className="FeedbackMessage">
        <div>{message.author}</div>
        <div>{message.title}</div>
        <button className="FeedbackButton" onClick={onDelete}>delete message</button>

    </div>
);

export default FeedbackMessage;
