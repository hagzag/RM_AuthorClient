import React from 'react';
import { Route } from 'react-router';
import App from '../src/app/App';
import Page404 from './app/pages/Page404';
import RoadmapsPage from './app/pages/RoadmapsPage';
import NewRoadmap from './app/pages/NewRoadmapPage';

export default (
  <div>
    <Route path="/" component={App}>
      <Route path="roadmaps" component={RoadmapsPage} />
      <Route path="page404" component={Page404} />
      <Route path="newroadmap" component={NewRoadmap} />
    </Route>
  </div>
);