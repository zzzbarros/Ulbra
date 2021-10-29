import React from 'react'

import Form from '../components/Form/Form'
import styled from 'styled-components'

const Wrapper = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h1 {
      width: 100%;
      text-align: center;
    }
`

function Contact() {
  return (
    <Wrapper>
      <h1>Novo Contato</h1>
      <Form />
    </Wrapper>
  )
}

export default Contact