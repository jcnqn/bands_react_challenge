import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { BandsGrid } from '../components/BandsGrid';
import { BandDetails } from '../components/BandDetails';
import { NavBar } from '../components/shared/NavBar';
import { useDispatch } from 'react-redux';
import { getAllBands } from '../actions/bands';
import {getAllAlbums} from "../actions/albums";
import {getAllGenres} from "../actions/genres";

export const DashboardRoutes = () => {
  const dispatch = useDispatch();
  dispatch(getAllBands());
  dispatch(getAllAlbums());
  dispatch(getAllGenres());

  return (
    <>
      <NavBar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/bands" component={BandsGrid} />
          <Route exact path="/details/:id" component={BandDetails} />

          <Redirect to="/bands" />
        </Switch>
      </div>
    </>
  );
};
