function ChatGrid(props) { //props is an object as a parameter
    var chatHistory = document.getElementById("messageBody");
    chatHistory.scrollTop = chatHistory.scrollHeight;
    return (
        <div>
            {(props.senderID !== 1) ?
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <div>
                            <div className="alert alert-info">{props.chatMessage}</div>
                            {/* <label>{props.sentTime}</label> */}
                        </div>
                    </div>
                </div>
                :
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <div className="alert alert-warning">{props.chatMessage}</div>
                            {/* <label>{props.sentTime}</label> */}
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            }

        </div >
    );
}
export default ChatGrid; //necessary to be implemented
