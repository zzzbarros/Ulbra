import React, { useEffect, useState } from 'react'

import Api from '../components/services/Api';



function Home() {

  const [page, setPage] = useState([])

  useEffect(() => {
    Api.get('/pages/1')
      .then((response) => {
        setPage(response.data)
      });
  }, [])

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
    </>
  )
}

export default Home
