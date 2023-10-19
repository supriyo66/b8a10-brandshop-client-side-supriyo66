import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

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
    <div className=" container mx-auto my-10 w-1/2 bg-base-200">
      <div className="flex items-center justify-center ">
        <div className=" flex-shrink-0 w-full  shadow-2xl bg-base-100">
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
               
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center text-xl font-medium p-5">Already have an account? <Link to='/login' className="text-blue-700">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
