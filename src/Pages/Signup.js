import { useState } from "react";
import { Link } from "react-router-dom";
function Signup() {
  const [password,setPassword]=useState("");
  const [cnpassword,setCnPassword]=useState("");
  return (
    <div className="d-flex justify-content-center mt-5">
      <form id="signup">
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
              id="spfname"
            />
            &nbsp;
            <input
              type="text"
              className="form-control-lg form-control rounded-3"
              required
              placeholder="Late Name"
              id="splname"
            />
            &nbsp;
            <input
              type="email"
              className="form-control-lg form-control rounded-3"
              required
              placeholder="Email"
              id="spemail"
            />
            &nbsp;
            <input
              type="password"
              className="form-control-lg form-control rounded-3"
              required
              placeholder="Password"
              id="sppassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            &nbsp;
            <input
              type="password"
              className={
                ((password===cnpassword) && (password!=""))
                ?"form-control-lg form-control rounded-3 border border-success"
                :"form-control-lg form-control rounded-3 border border-danger"
              }
              required
              placeholder="Confirm Password"
              id="spcpassword"
              value={cnpassword}
              onChange={(e) => setCnPassword(e.target.value)}
            />
            {
              ((password===cnpassword) && (password!=""))
              ?""
              :<div align="right" className="text-danger">*Password mismatch</div>
            }
            &nbsp;
            <div className="row">
              <div className="col-12">
                <div className="form-control form-control-lg">
                  <input
                    type="checkbox"
                    id="spagree"
                    className="form-check-input"
                    required
                  />

                  &nbsp; I agree Terms and Conditions
                </div>
                &nbsp;<hr></hr>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <button
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
