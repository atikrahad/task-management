import { Link, useNavigate } from "react-router-dom";
import img from "../assets/Authentication/1.png"
import useAuth from "../Hooks/useAuth";
import axiospublic from "../Api/axiospublic";

const Register = () => {

    const {signUp} = useAuth()
    const navigate = useNavigate()

    const handleCreateAccount = e =>{
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      const name = form.name.value;
      form.reset()

      const userinfo = {email, password, name}

      signUp(email, password)
      .then(user => {
        console.log(user);
        axiospublic.post("/user", userinfo)
        .then(res => {
          console.log(res.data);
            navigate("/dashboard")
        })
      })
      .then(error => {
        console.log(error);
      })
    }

    return (
        <div>
      <div
        style={{ background: `url(${img})`, backgroundSize: "cover" }}
        className="hero min-h-screen"
      >
        <div className="hero-content flex-col">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-25">
            <form onSubmit={handleCreateAccount} className="card-body">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-300">Register!</h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-slate-100">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="full name"
                  className="input bg-slate-200 input-bordered"
                  required
                  name="name"
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
                  name="email"
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
                  name="password"
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