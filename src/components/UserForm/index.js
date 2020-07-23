import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, ErrorMsg } from './styles'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
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
    <Form disabled={disabled} onSubmit={handleSubmit}>
      <h2>{title}</h2>
      <Input
        type='text'
        placeholder='Email'
        disabled={disabled}
        {...email}
      />
      <Input
        type='password'
        placeholder='Password'
        disabled={disabled}
        {...password}
      />
      <Button disabled={disabled}>{title}</Button>
    </Form>
    {error && <ErrorMsg>{error}</ErrorMsg>}
    </>
  )
}
