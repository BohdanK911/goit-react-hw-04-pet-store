import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import HomePage from './pages/Home';

const AsyncAboutPage = Loadable({
  loader: () => import('./pages/About' /* webpackChunkName: "about-page" */),
  loading: Loading,
});

const AsyncPetsPage = Loadable({
  loader: () => import('./pages/Pets' /* webpackChunkName: "pets-page" */),
  loading: Loading,
});

const AsyncPetPage = Loadable({
  loader: () => import('./pages/Pet' /* webpackChunkName: "pet-page" */),
  loading: Loading,
});

const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AsyncAboutPage} />
      <Route path="/pets" exact component={AsyncPetsPage} />
      <Route path="/pets/:id" component={AsyncPetPage} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
