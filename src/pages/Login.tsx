import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import "./../css/Login.css"; // Custom CSS for Star Wars theme

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/characters');
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/characters');
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-starwars">Login</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card card-starwars shadow-sm">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-starwars">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control input-starwars"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-starwars">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control input-starwars"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-primary btn-starwars"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-starwars"
                    onClick={handleRegister}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
