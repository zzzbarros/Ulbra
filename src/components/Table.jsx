import React from 'react'

import styled from 'styled-components'

const Root = styled.table`
  padding: 1rem;

  margin: 0 auto;
  width: 100%;

  tr{ 
    text-align: center;
    height: 2rem;
    background:   #e2e0e934;
  }
`
export function Table({ children }) {
  return (
    <Root>
      {children}
    </Root>
  )
}

