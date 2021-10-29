import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Api from '../services/Api'

import { useLocation } from 'react-router-dom'
import { Table } from '../components/Table';


export function Products() {
  let location = useLocation();
  const [products, setProducts] = useState([])

  useEffect(() => {
    Api.get(`${location.pathname}`)
      .then(products => {
        setProducts(products.data)
      })
  }, [location])

  return (
    <>
      <h1>Produtos</h1>
      <ul>
        <li><Link to='/products/'>Todas categorias</Link></li>
        <li><Link to='/products/category/1'>Categoria 1</Link></li>
        <li><Link to='/products/category/2'>Categoria 2</Link></li>
        <li><Link to='/products/category/3'>Categoria 3</Link></li>
      </ul>
      <Table>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Produto</th>
            <th>Preço</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.idProduct}>
              <td>{product.idCategory}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

