import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import CalendarContainer from './CalendarContainer';
import EventFormContainer from './EventFormContainer';

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={CalendarContainer} />
      <Route path="/:start/:end" component={EventFormContainer} />
    </Switch>
  </App>
);
