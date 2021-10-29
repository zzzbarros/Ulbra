import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

import Api from '../services/Api';

const Wrapper = styled.section`
  margin: 0 auto;
  text-align: center;
`
function Home() {

  const [page, setPage] = useState([])

  useEffect(() => {
    Api.get('/pages/1')
      .then((response) => {
        setPage(response.data)
      });
  }, [])

  return (
    <Wrapper>
      <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
    </Wrapper>
  )
}

export default Home
