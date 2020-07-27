import styled from 'styled-components'

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
