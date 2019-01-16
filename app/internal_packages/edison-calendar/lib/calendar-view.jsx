import React, { Component } from 'react';
import Root from './calendar-components/containers/Root'
import { createStore, applyMiddleware, compose } from 'redux';
import eventsReducer from './calendar-components/reducers/events';
import { apiMiddleware } from './calendar-components/middlewares/apiMiddleware';
import { loggerMiddleware } from './calendar-components/middlewares/loggerMiddleware';
import { createHashHistory } from 'history';

export default class CalendarView extends Component {
  render() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(eventsReducer, composeEnhancers(applyMiddleware(apiMiddleware, loggerMiddleware)));
    const history = createHashHistory();
    return (
      <div className="View">
        <Root store={store} history={history} />
      </div>
    );
  }
}
