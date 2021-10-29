import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Nav = styled.nav`
background: lightblue;
  ul {
  display: flex;
  list-style: none;
  margin: 0;
  justify-content: space-around;
  padding: 0rem 8rem;
    li {
      display: flex;
      padding: 1rem;
      margin: 0 1rem;
      :hover {
        filter: brightness(10);
        cursor: pointer;
      }
      
        a {
          text-decoration: none;

          :active {
            color: white;
          }
        }
    }
}
`

function Navbar() {
  return (
    <Nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>Sobre</Link>
        </li>
        <li>
          <Link to='/contact'>Contatos</Link>
        </li>
        <li>
          <Link to='/contactList'>Lista de Contatos</Link>
        </li>
        <li>
          <Link to='/products'>Lista de Produtos</Link>
        </li>
      </ul>
    </Nav>
  )
}

export default Navbar
