import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, ErrorMsg } from './styles'
import { SubmitButton } from '../SubmitButton'
import PropTypes from 'prop-types'

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
      <SubmitButton disabled={disabled}>{title}</SubmitButton>
    </Form>
    {error && <ErrorMsg>{error}</ErrorMsg>}
    </>
  )
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool
}
