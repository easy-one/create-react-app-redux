import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Main from '../Main/Main';


class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/:repoName" component={Main} />
      </Switch>
    );
  }
}

export default App;
