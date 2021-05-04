import {useDispatch, useSelector} from 'react-redux';

import '../../App.css';
import { logout } from '../../actions/auth';
import { getBandsByGenre, getBandsByName } from '../../actions/bands';
import { useForm } from '../../hooks/UseForms';
import {Link} from "react-router-dom";

export const NavBar = () => {
  const dispatch = useDispatch();
  const genres  = useSelector(state => state.genres.genres) || [];

  const [formValues, handleInputChange, reset] = useForm({
    param: '',
  });
  
  const { param } = formValues;
  
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getBandsByName(param));
    reset();
  };

  const handleBandsByGenre = genreCode => {
    dispatch(getBandsByGenre(genreCode));
  };

  const handleLogout = () => {
    dispatch(logout(''));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to={'/bands'}>
          Band React App
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={'/bands'}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={handleLogout}>
                Logout
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Choose a Genre
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {genres.map(genre => (
                  <li key={genre.code}>
                    {' '}
                    <span className="dropdown-item" onClick={() => handleBandsByGenre(genre.code)}>
                      {genre.name}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search by Name"
              aria-label="Search"
              name="param"
              autoComplete="off"
              value={param}
              onChange={handleInputChange}
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
