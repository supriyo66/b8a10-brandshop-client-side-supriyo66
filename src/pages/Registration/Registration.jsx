import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Registration = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await createUser(email, password);
      console.log(result.user);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex items-center justify-center min-h-screen">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
