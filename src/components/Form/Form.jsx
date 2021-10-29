import React from 'react'
import { useForm } from "react-hook-form"

import Api from '../../services/Api'

import styled from 'styled-components'

const Wrapper = styled.section`
  width: 50%;
`

const FormGroup = styled.div`
  display:flex;
  justify-content: space-around;
  padding: 1rem;
  label {
    margin: .5rem;
    min-width: 15vw;
  }

  input {
    flex-grow: 2;
  }
`

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    Api.post('/contacts', {
      name: data.name,
      email: data.email,
      message: data.message
    })
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <label name="name">Nome</label>
          <input type="text" {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}
        </FormGroup>
        <FormGroup>
          <label name="email">Email</label>
          <input type="text" {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}
        </FormGroup>
        <FormGroup>
          <label name="message">Mensagem</label>
          <input type="text" {...register("message", { required: true })} />
          {errors.message && <span>This field is required</span>}
        </FormGroup>
        <input type="submit" />
      </form>
    </Wrapper>
  )
}

export default Form
