function ChatGrid(props) { //props is an object as a parameter
    return (
        <div className="card border-dark">
	        <div className="card-body">{props.chatMessage}</div>
	        <div className="card-footer">{props.sentTime}</div>
        </div>
    );
}
export default ChatGrid; //necessary to be implemented
