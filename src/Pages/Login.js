import { useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginFunction = (e) => {
    e.preventDefault();
    var toServer = new FormData();
    toServer.append("userName", email);
    toServer.append("passWord", password);
    fetch("http://localhost/sms/login/temp", {
      method: "POST",
      body: toServer,
      mode: "cors",
      cache: "no-cache",
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          alert("Backend Error..!");
          console.log(response.text());
        }
      })
      .then((data) => {
        alert(data.message);
      })
      .catch(() => {
        console.log("Network connection error");
        alert("Reloading");
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

export default HomePage;
