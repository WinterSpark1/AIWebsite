import { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);

    const addMessage = (newMessage) => {
        if (newMessage.trim() !== "") {
            setMessages([...messages, newMessage]);
        }
    };

    return (
        <div className="Chatbot">
            <ChatBody messages={messages} />
            <UserInput addMessage={addMessage} />
        </div>
    );
};

const ChatBody = ({ messages }) => {
    return (
        <div className="chatBody">
            <div className="titleBar"><h2>Winter's AI Chat</h2></div>
            <div className="responseBox">
                {messages.map((msg, index) => (
                    <Message key={index} message={msg} />
                ))}
            </div>
        </div>
    );
};

const UserInput = ({ addMessage }) => {
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        addMessage(input);
        setInput(""); // Clear input field after submission
    };

    return (
        <div className="userInput">
            <input
                placeholder="Enter Your Prompt"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
            <div className="submitButton" onClick={handleSubmit}>
                <h2>Enter</h2>
            </div>
        </div>
    );
};

const Message = ({ message }) => {
    return (
        <div className="Message">
            <p>{message}</p>
        </div>
    );
};

export default Chatbot;
