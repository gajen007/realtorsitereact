import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Signup() {

  const navigate = useNavigate();
  
  useEffect(() => {
    if(localStorage.getItem("realtorSuit")!==null){
      navigate("/home");
    }
  }, []);

  const [password, setPassword] = useState("");
  const [cnpassword, setCnPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  const signupFunction = (e) => {
    e.preventDefault();
    var toServer = new FormData();
    toServer.append("firstName", fname);
    toServer.append("lastName", lname);
    toServer.append("userType", "client");
    toServer.append("userName", email);
    toServer.append("passWord", password);
    toServer.append("mobileNumber", phone);

    fetch("http://localhost:8000/api/signup", {
      method: "POST",
      body: toServer,
      mode: "cors",
      cache: "no-cache",
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          alert("Backend Error..!");
          console.log(response.text());
        }
      })
      .then((data) => {
        alert(data.message);
        if(data.message=="Sign-up Succeeded..!"){
          navigate("/login");
        }
      })
      .catch((e) => {
        console.log(e);
        alert("CORS Error");
      });
  };
  return (
    <div className="d-flex justify-content-center mt-5 mb-3">
      <form id="signup" onSubmit={signupFunction}>
        <div className="card border-dark ">
          <div className="card-header form-control-lg">
            <strong>
              <center>SignUp</center>
            </strong>
          </div>
          <div className="card-body">
            <input
              type="text"
              className="form-control-lg form-control rounded-3"
              required
              placeholder="First Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            &nbsp;
            <input
              type="text"
              className="form-control-lg form-control rounded-3"
              required
              placeholder="Late Name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            &nbsp;
            <input
              type="email"
              className="form-control-lg form-control rounded-3"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />&nbsp;
            <input
              type="number"
              className="form-control-lg form-control rounded-3"
              required
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            &nbsp;
            <input
              type="password"
              className="form-control-lg form-control rounded-3"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            &nbsp;
            <input
              type="password"
              className={
                ((password === cnpassword) && (password != ""))
                  ? "form-control-lg form-control rounded-3 border border-success"
                  : "form-control-lg form-control rounded-3 border border-danger"
              }
              required
              placeholder="Confirm Password"
              id="spcpassword"
              value={cnpassword}
              onChange={(e) => setCnPassword(e.target.value)}
            />
            {
              ((password === cnpassword) && (password != ""))
                ? ""
                : <div align="right" className="text-danger">*Password mismatch</div>
            }
            &nbsp;
            <div className="row">
              <div className="col-6">
                <button
                  disabled={(password === cnpassword) ? false : true}
                  type="submit"
                  className="btn btn-outline-success btn-lg form-control"
                >
                  SignUp
                </button>
              </div>
              <div className="col-6">
                <button
                  type="reset"
                  className="btn btn-outline-danger btn-lg form-control"
                >
                  Clear
                </button>
              </div>
            </div>
            &nbsp;
            <div className="row ">
              <div className="col-12">
                <Link to="/login">
                  <button
                    type="reset"
                    className="btn btn-outline-primary btn-lg form-control"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Signup;
