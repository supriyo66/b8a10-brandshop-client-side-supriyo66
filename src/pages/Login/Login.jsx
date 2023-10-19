import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {signInUser,signInWithGoogle}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
    
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signInUser(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(location?.state? location.state : '/')
        })
    };
    const handleGoogle=()=>{
        signInWithGoogle()
        .then(res=>console.log(res.user))
        .catch(error=>{
          console.error(error);
        //   setLoginError(error.message)
        })
      }

    return (
        <div className="container mx-auto w-full mt-10 bg-base-200 md:w-2/3 lg:w-1/2">
          <div className="flex items-center justify-center ">
            <div className=" flex-shrink-0 w-full  shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
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
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <p className="text-center text-xl font-medium p-5">New here? <Link to='/registration' className="text-blue-700">Register</Link></p>
            </div>
          </div>
          <div className="text-center mt-5 py-2">
      <button onClick={handleGoogle}  className=" btn btn-primary text-xl font-medium ">Google Sign In</button>
      </div>
        </div>
    );
};

export default Login;
