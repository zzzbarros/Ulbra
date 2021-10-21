import React from 'react'

import {
  Switch,
  Route
} from 'react-router-dom';

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </>
  )
}

export default Routes
