import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App';
import HistoryPage from './views/history';
import { GlobalStyles } from './global-styles';
import {DataProvider} from './context/dataContext'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <GlobalStyles/>
      <Router>
        <Switch>
          <Route exact path='/'>
            <App />
          </Route>
          <Route path='/history'>
            <HistoryPage />
          </Route>
        </Switch>
      </Router>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
