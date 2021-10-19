import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { signInUsingGoogle, signInUsingGithub, signInUsingFacebook } = useAuth();
  const location = useLocation();
  // console.log(location.state?.from);
  const redirect_Url = location.state?.from;
  const history = useHistory();

  const handleGoogleSignIn = () => {
    signInUsingGoogle().then(result => {
      history.push(redirect_Url);
    });
  }
  const handleGithubSignIn = () => {
    signInUsingGithub().then(result => {
      history.push(redirect_Url);
    });
  }
  const handleFacebookSignIn = () => {
    signInUsingFacebook().then(result => {
      history.push(redirect_Url);
    })
  }
    return (
        <div>
            <div> 
        <h1>Please Login</h1>
        <form action="">
          <input
            className="border"
            type="email"
            name="email"
            placeholder="enter Email"
          />{" "}
          <br />
          <input
            className="border"
            type="password"
            name="password"
            placeholder="enter password"
          />
          <br />
          <div className="flex items-center justify-center">
            <p className="px-2">
              Are you new user? <Link className="text-blue-600" to="/register">Create Account</Link>
            </p>
            <button
              className="border-2 border-gray-400 rounded-lg px-6 font-semibold  py-1 my-2 bg-indigo-300"
              type="button"
            >
              Login
            </button>
          </div>
          <div>
            <p>
              ............................Or................................
            </p>
          </div>
          <h3>Login with social Media</h3>
                    <button
                        onClick= {handleGoogleSignIn}
            className="border-2 rounded-lg px-6 font-semibold  py-1 my-2"
            type="button"
          >
            Login With Google
          </button>
            <button
              onClick={handleGithubSignIn}
            className="border-2 rounded-lg px-6 font-semibold  py-1 my-2"
            type="button"
          >
            Login With Github
          </button>
            <button
              onClick={handleFacebookSignIn}
            className="border-2 rounded-lg px-6 font-semibold  py-1 my-2"
            type="button"
          >
            Login With Facebook
          </button>
                </form>
          </div>
      </div>
    );
};

export default Login;