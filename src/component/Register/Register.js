import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <div>
        <div>
          <h2>Please Register</h2>
          <form action="" method="get">
            <input className="border border-gray-400 rounded " type="text" name="name" id="" placeholder="Name" />
            <br />
            <input className="border border-gray-400 rounded " type="email" name="email" id="" placeholder="Email" />
            <br />
            <input className="border border-gray-400 rounded "
              type="password"
              name="password"
              id=""
              placeholder="password"
            />
            <br />
            <input className="border border-gray-400 rounded "
              type="password"
              name="re-password"
              id=""
              placeholder="re-password"
            />
            <br />
            <div className="flex items-center justify-center">
              <p>
                Are your register{" "}
                <Link className="text-blue-600" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
          <div>
            <p>.......................Or..............................</p>
            <h2>Login with Social Media</h2>
            <button
              className="border-2 rounded-lg px-6 font-semibold  py-1 my-2"
              type="button"
            >
              Login With Google
            </button>
            <button
              className="border-2 rounded-lg px-6 font-semibold  py-1 my-2"
              type="button"
            >
              Login With Github
            </button>
            <button
              className="border-2 rounded-lg px-6 font-semibold  py-1 my-2"
              type="button"
            >
              Login With Facebook
            </button>
          </div>
        </div>
      </div>
    );
};

export default Register;