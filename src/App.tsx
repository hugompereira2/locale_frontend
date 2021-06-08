import { Global } from './style/global'
import { TopMenu } from './components/TopMenu/index'
import { Tendencias } from './components/Tendencias/index'
import { CardDetails } from './components/CardDetails/index'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <TopMenu />
      <Switch>
        <Route exact path="/">
          <Tendencias />
        </Route>
        <Route path="/CardDetails/:idRouter">
          <CardDetails />
        </Route>
      </Switch>
      <Global />
    </Router>
  );
}

export default App;
