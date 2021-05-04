import { Link } from 'react-router-dom';

export const BandGridItem = ({ band }) => {
  return (
    <div className="card text-dark bg-light m-4 w300 animate__animated animate__fadeIn ">
      <div className="card-header fs-4 fw-bold">{band.name}</div>
      <div className="card-body">
        <h5 className="card-title">Genre: {band.genreCode}</h5>
        <p className="card-text">Year: {band.year}</p>
        <p className="card-text">Country: {band.country}</p>
        <Link className="btn btn-link float-end" to={`/details/${band.id}`}>See More...</Link>
      </div>
    </div>
  );
};
