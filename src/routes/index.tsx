import { Switch, Route } from 'react-router-dom'

/* import Home from '../pages/Home'
import Sub from '../pages/Sub' */

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={() => <div>Home</div>} />
      <Route exact path='/sub' component={() => <div>Sub</div>} />
      <Route
        path='*'
        component={() => (
          <div>
            <h1>404</h1>
          </div>
        )}
      />
    </Switch>
  )
}

export default Routes
