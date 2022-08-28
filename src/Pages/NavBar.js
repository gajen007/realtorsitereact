import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faRightFromBracket, faComments, faHome } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    const navigate = useNavigate();
    const logoutFunction = () => {
        localStorage.clear();
        navigate("/login");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link to="/home"><div className="navbar-brand text-white btn border border-dark"><FontAwesomeIcon icon={faHome} /></div></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/userEnquiries">
                                <div className="ml-auto btn btn-outline-info border-dark"><FontAwesomeIcon icon={faComments} /></div>
                            </Link>


                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <div className="ml-auto btn btn-outline-danger border-dark"><FontAwesomeIcon icon={faHeart} /></div>
                        <button onClick={logoutFunction} className="ml-auto btn btn-outline-warning border-dark"><FontAwesomeIcon icon={faRightFromBracket} /></button>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default NavBar;