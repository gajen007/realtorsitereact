import { useParams } from "react-router-dom";

function InquiryProperty() {  
const {mlsNumber}= useParams();
    return(

        <div className="container mt-5">
            <form>
                <div></div>
                <div className="row">
                    <div className="col-md-11">
                        <input className="form-control"></input>
                    </div> 
                    <div className="col-md-1">
                        <button className="btn btn-primary form-control">
                            Send
                        </button>
                    </div>

                </div>
            </form>

            {/* hi{mlsNumber} */}
        </div>

    )
  }
export default InquiryProperty;