import React, { useState } from 'react';

import "./Feedback.css"
const url = 'http://localhost:3001/feedbacks';

const Feedback = (props) => {
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const textChange =  e => {setText({text: e.target.value})};
    const nameChange =  e => {setName({name: e.target.value})};
    const myFetch = () => (fetch (url)
        .then ((res) => res.json())
        .then((res) => {
            console.log(res)
        }))
    const getMessage = () => {
        myFetch()
    };
    const postMessage = () => {
        fetch(url, {method: "POST", headers: {"Content-Type": "application/json"},
            body: JSON.stringify({text, name})
        });
        // setTitle({title:null})
    }
    console.log(text);
    console.log(name);
    return (
        <div className="Feedback">
            <h6>Type your text in form and press submit</h6>
            <input placeholder="Enter your name" className="ModalAuthor" onChange={nameChange} value={toString().name}/>
            <textarea cols="50" rows="3" placeholder="Type your message" className="ModalText"  onChange={textChange} value={toString().text}/>
            <button onClick={getMessage}>GetMessage</button>
            <button onClick={postMessage}>PostMessage</button>
            <div className="FeedbackMessage" id={"M01"}>{}</div>
        </div>
        );
};

export default Feedback;