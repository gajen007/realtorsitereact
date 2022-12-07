function ChatGrid(props) { //props is an object as a parameter
    var chatHistory = document.getElementById("messageBody");
    chatHistory.scrollTop = chatHistory.scrollHeight;
    return (
        <div>
            {(props.senderID != "1") ?
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <div>
                            <div className="alert alert-info">{props.chatMessage}<br/>
                            <sub><i>{new Date(props.sentTime).toLocaleString()}</i></sub>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <div className="alert alert-warning">{props.chatMessage}<br/>
                            <sub><i>{new Date(props.sentTime).toLocaleString()}</i></sub>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            }

        </div >
    );
}
export default ChatGrid; //necessary to be implemented
