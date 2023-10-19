import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const {signInUser}=useContext(AuthContext)
    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
    
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signInUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
    };

    return (
        <div className="container mx-auto w-1/2 mt-10 bg-base-200">
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
        </div>
    );
};

export default Login;
