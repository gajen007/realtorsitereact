import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import NavBar from "./NavBar";
import ChatGrid from "../Components/ChatGrid";
function InquiryProperty() {
    const { mlsNumber } = useParams();
    const [typedText, placeChat] = useState("");
    //const [loggedInUserName,setUserName] = useState("");
    const [chats,fillChats] = useState([]);

    useEffect(() => {
        //let realtorSuit=JSON.parse(localStorage.getItem("realtoSuit"));
        //setUserName(realtorSuit['userName']);

        fetch("http://localhost:8000/api/inquiryChat?mlsNumber="+mlsNumber+"&clientUserName=gajen007@gmail.com",{
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache'
        })
          .then(res => { return res.json(); })
          .then(data => {
            fillChats(data);
          }).catch(err => console.error(err));
      }, []);

    const feedChat=(e)=>{
        e.preventDefault();
        var toServer=new FormData();
        toServer.append('mlsNumber',mlsNumber);
        toServer.append('chatMessage',typedText);
        //toServer.append('loggedInUserName',loggedInUserName);
        if (typedText!==null&&typedText!=="") {
            fetch("http://localhost:8000/api/feedInquiryChatByClient",{
                method:'POST',
                body: toServer,
                mode: 'cors',
                cache: 'no-cache'}).then(response => {
                    if (response.status === 200) {
                        return response.json();            
                    }
                    else {
                        alert('Backend Error..!');
                        console.log(response.text());
                    }
                })
                .then(data => {
                    //How to empty a "state value" after render
                    if (!data.result) {
                        alert(data.message);    
                    }
                })
                .catch((e) => {
                    console.log(e);
                    alert("Reloading");
                });            
        }
        else{
            alert("Type something...");
        }
    };
    return (
        <>
        <NavBar></NavBar>
        <div className="container mt-5">
        <div className="row">
        <div className="col-lg-12">
        <div style={{ "height": "70vh" }} className="border border-dark rounded">
        {
                chats.map((item) => {
                  return (
                    <ChatGrid
                      key={item.id}
                      chatMessage={item.chatMessage}
                      sentTime={item.sentTime}
                    />
                  );
                })
              }
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-lg-12">
        <form onSubmit={feedChat}>
        <div className="row mt-2">
        <div className="col-md-10">
        <input className="form-control" onChange={(e) => placeChat(e.target.value)} placeholder="Message"></input>
        </div>
        <div className="col-md-2">
        <button type="submit" className="btn btn-outline-primary form-control ">
        <FontAwesomeIcon icon={faPaperPlane} /> &nbsp;
        Send
        </button>
        </div>
        </div>
        </form>
        </div>
        </div>
        </div>
        </>
        )
    }
    export default InquiryProperty;

    // //API response
    // //[
    //     {
    //     "id":1,
    //     "mlsNumber":"W5715268",
    //     "senderID":2,
    //     "receiverID":1,
    //     "chatMessage":"Hi, How old this Property is?",
    //     "created_at":"2022-08-27T14:04:13.000000Z",
    //     "updated_at":"2022-08-27T14:04:13.000000Z"
    //     },
    //     {"id":2,
    //     "mlsNumber":"W5715268",
    //     "senderID":1,
    //     "receiverID":2,
    //     "chatMessage":"10 years. Wanna buy this property..?",
    //     "created_at":"2022-08-27T14:05:55.000000Z",
    //     "updated_at":"2022-08-27T14:05:55.000000Z"
    //     }
    // ]
