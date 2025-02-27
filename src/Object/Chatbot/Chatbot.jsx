import "./Chatbot.css"

const Chatbot = () => {
    return (
        <div className="Chatbot">

            <div className="chatBody">
                <div className="titleBar"><h2>Winter's AI Chat</h2></div>

                <div className="responseBox">
                    <Message message="Hi, can you do x y and z" />
                    <Message />
                    <Message />
                </div>
            </div>

            <div className="userInput">
                <input placeholder="Enter Your Prompt"></input>
                <div className="submitButton"><h2>Enter</h2></div>
            </div>

        </div>
    )
}

const Message = ({message}) => {

    return (
        <div className="Message">
            <p>{message}</p>
        </div>
    )
}

export default Chatbot;