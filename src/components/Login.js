import React from 'react';
import { useDispatch } from 'react-redux';

// import { Link } from 'react-router-dom';
import { useForm } from '../hooks/UseForms';
import { login } from '../actions/auth';

export const Login = () => {
  const dispatch = useDispatch();
  // const { loading } = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: 'nando@gmail.com',
    password: '123456',
  });

  const { email, password } = formValues;

  const handleLogin = e => {
    e.preventDefault();
    if (email === 'nando@gmail.com' && password === '123456') {
      dispatch(login(email));
      localStorage.setItem('email', email);
      localStorage.setItem('isLogged', 'true');
    }
    
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
          <div className="row">
            <div className="col-lg-6 col-md-8 mx-auto">
              <div className="card rounded shadow shadow-sm">
                <div className="card-header">
                  <h3 className="mb-0">Login</h3>
                </div>
                <div className="card-body">
                  <form className="form" role="form" autoComplete="off" onSubmit={ handleLogin }>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control form-control-lg mt-2 mb-3"
                        id="email"
                        placeholder="email"
                        autoComplete="off"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control form-control-lg mt-2 mb-3"
                        id="password"
                        placeholder="password"
                        autoComplete="off"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        required=""
                      />
                      <div className="invalid-feedback">Enter your password too!</div>
                    </div>
                    <button type="submit" className="btn btn-success btn-lg float-right" id="btnLogin">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
