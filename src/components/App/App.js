import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Main from '../Main/Main';

const App = () => {
  // todo: At this moment it's an overhead to have <Switch> here.
  // Please remove if the project does not expand in future.
  return (
    <Switch>
      <Route path="/:repoName?" component={Main} />
    </Switch>
  )
};

export default App;
