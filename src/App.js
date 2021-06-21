import React from 'react'
import Register from './components/Register'
import Forms from './components/Forms/index'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
const App = () => {
  return (
    <>
      <Router >
        <Switch>
          <Route path='/' exact><Register></Register></Route>
          <Route path='/forms'><Forms></Forms></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
