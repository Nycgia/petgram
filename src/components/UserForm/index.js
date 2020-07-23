import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button } from './styles'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <>
    <h2>{title}</h2>
    <Form onSubmit={onSubmit}>
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
