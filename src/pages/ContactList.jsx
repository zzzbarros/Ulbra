import React, { useEffect, useState } from 'react'
import Api from '../services/Api'

import { Table } from '../components/Table';

export function ContactList() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    Api.get('/contacts')
      .then(response => {
        setUsers(response.data)
      })
  }, [])

  return (
    <>
      <h1>Contatos</h1>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Mensagem</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.idContact}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}


