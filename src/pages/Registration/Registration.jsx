import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const [registerError, setRegisterError] = useState();
  const [success, setSuccess] = useState();
  const { createUser } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    setRegisterError('');
    setSuccess('');

    if (password.length < 6) {
      setRegisterError('Password must be 6 characters');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError('Password should have at least one uppercase character');
      return;
    } else if (!/\d/.test(password)) {
      setRegisterError('Password should include at least one number');
      return;
    }

    try {
      const result = await createUser(email, password);
      console.log(result.user);
      setSuccess('Registration successful!');
      toast.success('Registration successful!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    } catch (error) {
      console.error("Registration failed:", error);
      setRegisterError('Registration failed. Please try again.');
    }
  };

  return (
    <div className=" container mx-auto my-10 w-1/2 bg-base-200">
      <ToastContainer />
      <div className="flex items-center justify-center">
        <div className=" flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            {registerError && (
              <div className="alert alert-error">{registerError}</div>
            )}
            {success && (
              <div className="alert alert-success">{success}</div>
            )}
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
              <label className="label"></label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center text-xl font-medium p-5">
            Already have an account? <Link to="/login" className="text-blue-700">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
