import { Link } from "react-router-dom";
import img from "../assets/Authentication/1.png";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div>
      <div
        style={{ background: `url(${img})`, backgroundSize: "cover" }}
        className="hero min-h-screen"
      >
        <div className="hero-content flex-col">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-25">
            <form className="card-body">
              <h1 className="text-5xl font-bold text-slate-300">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-slate-100">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input bg-slate-200 input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-slate-100">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input bg-slate-200 input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <h1 className="text-slate-300">
                New user? <Link>Register</Link>
              </h1>
              <div className="text-center">
                <button className="btn w-full flex" onClick={()=>alert()}> Login with google<span><FcGoogle className="text-3xl"></FcGoogle></span></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
