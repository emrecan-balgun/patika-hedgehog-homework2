import { useState } from 'react';
import headerImg from '../assets/img/header-img.svg';
import {
  successNotify,
  failNotify,
  warningNotify,
} from '../constants/toastify';

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    if (!username || !password) return warningNotify();
    if (username === 'admin' && password === 'admin') return successNotify();
    else return failNotify();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') return login();
  };

  return (
    <div className="h-screen">
      <div className="h-full flex bg-[url('/src/assets/img/banner-bg.png')]">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <img
            src={headerImg}
            className="w-1/2 h-1/2 animate-[bounce_6s_ease-in-out_infinite]"
            alt="header_image"
          />
          <h1 className="text-white font-bold text-4xl font-sans">
            You are back!
          </h1>
          <p className="text-white mt-1">
            Welcome back to my world, I would be happy to welcome you.
          </p>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="w-1/2 mx-auto">
            <h1 className="text-2xl font-bold text-center text-white">Login</h1>
            <form className="mt-5">
              <div className="mb-5">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e)}
                  onInvalid={(e) =>
                    e.target.setCustomValidity('Please enter your username')
                  }
                />
              </div>
              <div className="mb-5">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e)}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => login()}
                >
                  Sign In
                </button>
                {/* <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;