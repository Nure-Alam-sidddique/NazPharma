import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const [isLogin ,setIsLogin] = useState(false);
  const {
    signInUsingGoogle,
    signInUsingGithub,
    signInUsingFacebook,
    signInEmailPassword,
    emailVerify
  } = useAuth();
  const location = useLocation();
  // console.log(location.state?.from);
  const redirect_Url = location.state?.from || '/home';
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
   const handleEmail = (e) => {
     e.preventDefault();
     setEmail(e.target.value);
   };
   const handlePassword = (e) => {
     e.preventDefault();
     setPassword(e.target.value);
   };
  const handleEmailPassword = (e)=> {
    e.preventDefault();
    setIsLogin(true);
    signInEmailPassword(email, password).then(result => {
      console.log(email, password);
      history.push('/home');
      emailVerify().then(() => {
        console.log("Send Email Successfully");
      })
    }).catch(error => console.log(error.message));

  }
  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gray-200 ">
      {/* social Midea */}
      <div className="mt-20 w-1/4">
        <div className="space-y-2">
          <button
            onClick={handleGoogleSignIn}
            className="block w-full bg-white text-gray-900 border border-gray-200 hover:bg-gray-100 px-3 py-2 rounded text-white"
            type="button"
          >
            Google
          </button>
          <button
            onClick={handleGithubSignIn}
            className="block w-full bg-gray-900 hover:bg-gray-800 p-2 rounded text-white"
            type="button"
          >
            Github
          </button>
          <button
            onClick={handleFacebookSignIn}
            className="block w-full bg-blue-800 hover:bg-blue-700 p-2 rounded text-white"
            type="button"
          >
            Facebook
          </button>
        </div>
      </div>
      {/* Login form design */}
      <div className="bg-white p-6 rounded shadow-2xl w-1/4 mt-5">
        {/* <h2 className="text-3xl font-bold mb-4 text-purple-800 ">
            Create Your Account
          </h2> */}
        <form className="space-y-4">
          <div>
            <label className="block mb-2 font-bold text-left">Email</label>
            <input
              onBlur={handleEmail}
              className="w-full border-2 border-gray-200 p-1 rounded outline-none focus:border-purple-500 "
              type="email"
              name="email"
              id=""
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block mb-1 font-bold text-left">password</label>
            <input
              onBlur={handlePassword}
              className="w-full border-2 border-gray-200 p-1 rounded outline-none focus:border-purple-500 "
              type="password"
              name="password"
              id=""
              placeholder="password"
            />
          </div>
            <Link className="text-blue-600 mx-1 text-left">
              Forgot password?
            </Link>
          <button
            onClick={handleEmailPassword}
            type="button"
            className="block w-full bg-yellow-700 hover:bg-purple-500 p-2 rounded text-white"
          >
            Sign In
          </button>
        </form>
      </div>
      <p className="mb-40 mt-2">
        Don’t have an account?
        <Link className="text-blue-600 mx-1" to="/register">
          Sign Up
        </Link>
      </p>
    </div>
    //   <div>
    //       <div>
    //   <h1>Please Login</h1>
    //   <form action="">
    //       <input
    //         onBlur={handleEmail}
    //       className="border"
    //       type="email"
    //       name="email"
    //       placeholder="enter Email"
    //     />
    //     <br />
    //       <input
    //         onBlur={handlePassword}
    //       className="border"
    //       type="password"
    //       name="password"
    //       placeholder="enter password"
    //     />
    //     <br />
    //     <div className="flex items-center justify-center">
    //       <p className="px-2">
    //         Are you new user? <Link className="text-blue-600" to="/register">Create Account</Link>
    //       </p>
    //         <button
    //           onClick={handleEmailPassword}
    //         className="border-2 border-gray-400 rounded-lg px-6 font-semibold  py-1 my-2 bg-indigo-300"
    //         type="button"
    //       >
    //         Login
    //       </button>
    //     </div>
    //     <div>
    //       <p>
    //         ............................Or................................
    //       </p>
    //     </div>
    //     <h3>Login with social Media</h3>
    //               <button
    //                   onClick= {handleGoogleSignIn}
    //       className="border-2 rounded-lg px-6 font-semibold  py-1 my-2"
    //       type="button"
    //     >
    //       Login With Google
    //     </button>
    //       <button
    //         onClick={handleGithubSignIn}
    //       className="border-2 rounded-lg px-6 font-semibold  py-1 my-2"
    //       type="button"
    //     >
    //       Login With Github
    //     </button>
    //       <button
    //         onClick={handleFacebookSignIn}
    //       className="border-2 rounded-lg px-6 font-semibold  py-1 my-2"
    //       type="button"
    //     >
    //       Login With Facebook
    //     </button>
    //           </form>
    //     </div>
    // </div>
  );
};

export default Login;