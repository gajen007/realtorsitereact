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
                    <div></div>
                    <div className="row">
                        <div className="col-md-10">
                            <input className="form-control" placeholder="Message"></input>
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-outline-primary form-control">
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