import React from 'react';
import {Link, useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';

export const BandDetails = () => {
  const bands = useSelector(state => state.bands.bands) || [];
  const albums = useSelector(state => state.albums.albums) || [];
  let band = {};
  let albumsByBand = [];
  const { id } = useParams();

  if (bands.length > 0) {
    band = bands.find(band => band.id === Number(id));
    albumsByBand = albums.filter( album => album.bandId === Number(id));
  }

  return (
    <div>
      {
        (band !== null || band || undefined) && (
          <div className="card text-dark bg-light m-4 p-4 animate__animated animate__fadeIn ">
            <div className="card-header fs-2 fw-bold">{band.name}</div>
            <div className="card-body">
              <h5 className="card-title fs-4">Genre: {band.genreCode}</h5>
              <p className="card-text fs-4 mt-3">Year: {band.year}</p>
              <p className="card-text fs-4">Country: {band.country}</p>
              <h4 className="fs-4">Members</h4>
              <ul className="list-group fs-4">
                {band.members.map(member => (
                  <li key={member.name} className="list-group-item fs-5">{member.name}</li>
                ))}
              </ul>
              {
                (albumsByBand.length > 0) && (<h4 className="fs-4 mt-3">Albums</h4>)
              }
              <ul className="list-group fs-4 mt-3">
                {albumsByBand.map(album => (
                  <li key={album.name} className="list-group-item fs-5">{album.name} - {album.year}</li>
                ))}
              </ul>
            </div>
            <Link className="btn btn-link float-end" to={`/bands`}>Go Back...</Link>
          </div>
        )
      }
    </div>
  
  );
};
