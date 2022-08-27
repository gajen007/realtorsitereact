import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import NavBar from "./NavBar";
function InquiryProperty() {
    const { mlsNumber } = useParams();
    return (
        <>
            <NavBar></NavBar>
            <div className="container mt-5">
                <form>
                    <div style={{ "height": "70vh" }} className="border border-dark rounded">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="received">
                                    <div className="alert alert-danger" style={{"width":"50vw"}}>Hello</div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div id="sent">
                                    <div className="alert alert-success" style={{"width":"50vw"}} align="right">Hello</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-10">
                            <input className="form-control" placeholder="Message"></input>
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-outline-primary form-control ">
                                <FontAwesomeIcon icon={faPaperPlane} /> &nbsp;
                                Send
                            </button>
                        </div>
                    </div>
                </form>

                {/* hi{mlsNumber} */}
            </div>
        </>
    )
}
export default InquiryProperty;