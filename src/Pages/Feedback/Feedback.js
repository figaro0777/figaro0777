import React, { useState } from 'react';
import FeedbackMessage from '../../components/FeedbackMessage/FeedbackMessage';

import "./Feedback.css"
const url = 'http://localhost:3001/feedbacks';


const Feedback = () => {
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [messages, setMessage] = useState([]);
    
    const textChange =  React.useCallback((e) => {
      setText(e.target.value);
    }, []);
    
    const nameChange =  React.useCallback((e) => {
      setName(e.target.value);
    }, []);
    
    const getMessage = React.useCallback(() => (
      fetch (url)
        .then ((res) => res.json())
        .then((res) => {
          setMessage([...res]);
        })
    ));
    
    React.useEffect(() => {
      getMessage();
    }, [])
    
    const postMessage = React.useCallback(() => {
        setText('');
        setName('');
      fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ title: text, author:name })
      }).then(() => {
        getMessage();
      });
    }, [text, name])
  
    const deleteMessage = React.useCallback((id) => () => {
      fetch(`${url}/${id}`, {
        method: "DELETE",
      }).then(() => {
        getMessage();
      });
    }, [])

    return (
        <div className="Feedback">
            <h6>Type your text in form and press submit</h6>
            <input
              placeholder="Enter your name"
              className="FeedbackAuthor"
              onChange={nameChange}
              value={name}
            />
            <textarea
              cols="50"
              rows="3"
              placeholder="Type your message"
              className="FeedbackText"
              onChange={textChange}
              value={text}
            />
            <button
                className="FeedbackButton"
                onClick={postMessage}
            >
              PostMessage
            </button>
            <div className="FeedbackMessages" id={"M01"}>
              {messages.map((message) => (
                <FeedbackMessage
                  key={message?.id}
                  onDelete={deleteMessage(message?.id)}
                  message={message}
                />
              ))}
            </div>
        </div>
        );
};

export default Feedback;