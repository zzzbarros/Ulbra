import React from 'react'

import styled from 'styled-components'

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: #000;
`

const Wrapper = styled.footer`
  padding: 1.5em 0;
  background: #f0f0f0;
`

function Footer() {
  return (
    <Wrapper>
      <Title>Footer</Title>
    </Wrapper>
  )
}

export default Footer
