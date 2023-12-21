import { Link } from "react-router-dom";
import img from "../assets/Authentication/1.png"

const Register = () => {
    return (
        <div>
      <div
        style={{ background: `url(${img})`, backgroundSize: "cover" }}
        className="hero min-h-screen"
      >
        <div className="hero-content flex-col">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-25">
            <form className="card-body">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-300">Register!</h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-slate-100">Full Name</span>
                </label>
                <input
                  type="email"
                  placeholder="full name"
                  className="input bg-slate-200 input-bordered"
                  required
                />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
              <h1 className="text-slate-300">
                Already have account? <Link to="/login">Login</Link>
              </h1>
              
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;