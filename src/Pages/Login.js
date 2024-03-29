
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { login } from '../Features/checkSession'
function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem("realtorSuit")!==null){
      navigate("/home");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const dispatchLoggedInStatus = useDispatch();

  const loginFunction = (e) => {
    e.preventDefault();
    var toServer = new FormData();
    toServer.append("userName", email);
    toServer.append("passWord", password);
    toServer.append("userType", userType);

    fetch("https://realtorsuit.artsuit.ca/public/api/login", {
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
        if (data.result) {
          //redux approach
          dispatchLoggedInStatus(login())
          //localStorage Approach
          //var realtorSuit = { "userName": email, "userType": userType };
          //localStorage.setItem("realtorSuit", JSON.stringify(realtorSuit));
          //window.location.href="/home"
          navigate("/home");
        }
      })
      .catch((e) => {
        console.log(e);
        alert("CORS Error");
      });
  };

  return (
    <div className="container mt-5">
      <div className=" d-flex justify-content-center mt-5">
        <form id="login" onSubmit={loginFunction}>
          <div className="card border-dark ">
            <div className="card-header form-control-lg">
              <strong>
                <center>Login</center>
              </strong>
            </div>
            <div className="card-body">
              <input
                type="email"
                className="form-control-lg form-control rounded-3"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <select onChange={(e) => setUserType(e.target.value)} className="form-control">
                <option value="">User Type</option>
                <option value="realtor">Realtor</option>
                <option value="client">Client</option>
              </select>
              &nbsp;
              <hr></hr>
              <div className="row">
                <div className="col-6">
                  <button
                    type="submit"
                    className="btn btn-outline-success btn-lg form-control"
                  >
                    Login
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
                  <Link to="/signup">
                    <button
                      type="reset"
                      className="btn btn-outline-primary btn-lg form-control"
                    >
                      Signup
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
