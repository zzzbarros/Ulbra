import React from 'react'

import Navbar from '../../components/Navbar/Navbar';

import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #000;
`

const Wrapper = styled.section`
  max-width:100vw;
  padding: 4em;
  background: #f0f0f0;
`

function Header() {
  return (
    <div>
      <Wrapper>
        <Title>
          Programação Orientada a Componentes
        </Title>
      </Wrapper>
      <Navbar />
    </div>
  )
}

export default Header
