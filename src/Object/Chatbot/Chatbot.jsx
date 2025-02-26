import "./Chatbot.css"

const Chatbot = () => {
    return (
        <div className="Chatbot">

            <div className="aiBody">
                <div className="titleBar"><h2>Winter's AI Chat</h2></div>

                <div className="responseBox">

                </div>
            </div>

            <div className="userInput">
                <input placeholder="Enter Your Prompt"></input>
                <div className="submitButton"><h2>Enter</h2></div>
            </div>

        </div>
    )
}

export default Chatbot;