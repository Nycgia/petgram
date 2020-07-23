import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  color: #000;
  border: solid 1px #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
`

export const Button = styled.button`
  cursor: pointer;
  background: #8d00ff;
  border: 0;
  border-radius: 3px;
  color: #FFF;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;

  &:hover {
    background: #6a02bd;
  }

  &[disabled] {
    opacity: .3;
  }
`
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`

export const ErrorMsg = styled.span`
  color: red;
  font-size: 14px;
`
