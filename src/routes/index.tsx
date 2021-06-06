import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Characters from '../pages/Characters'
import Character from '../pages/Character'
import PageNotFound from '../pages/PageNotFound'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Characters} />
      <Route exact path='/character' component={Characters} />
      <Route exact path='/character/:id' component={Character} />
      <Route path='*' component={PageNotFound} />
    </Switch>
  )
}

export default Routes
