import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button } from './styles'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
    <h2>{title}</h2>
    <Form onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Email'
        {...email}
      />
      <Input
        type='password'
        placeholder='Password'
        {...password}
      />
      <Button>{title}</Button>
    </Form>
    </>
  )
}