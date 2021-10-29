import React from 'react'

import {
  Switch,
  Route
} from 'react-router-dom';

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import { ContactList } from '../pages/ContactList'
import { Products } from '../pages/Products'

import styled from 'styled-components'

const Wrapper = styled.div`
  min-height: 60vh;
`

function Routes() {
  return (
    <Wrapper>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/contactList" exact component={ContactList} />
        <Route path="/products" component={Products} />
        <Route path="/products/category" component={Products} />
      </Switch>
    </Wrapper>
  )
}

export default Routes
