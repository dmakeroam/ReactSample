import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './components/Main'

export default () => (
  <Router>
    <Switch>
      <Route path='/main' component={Main} />
    </Switch>
  </Router>
)
