import React from 'react'

import styled from 'styled-components'

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;

const Wrapper = styled.section`
padding: 4em;
background: papayawhip;
`;

function Header() {
  return (
    <>
      <Wrapper>
        <Title>
          Programação Orientada a Componentes
        </Title>
      </Wrapper>
    </>
  )
}

export default Header
