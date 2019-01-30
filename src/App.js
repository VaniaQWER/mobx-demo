import React, { PureComponent } from 'react';
import { Provider } from 'mobx-react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import stores from './stores';

import Login from './routes/login';
import SuccessPage from './routes/success';

class App extends PureComponent {
  render() {
    return (
      <Provider {...stores}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path='/success' component={SuccessPage}/>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
