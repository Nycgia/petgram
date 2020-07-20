import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
  margin-top: 20px;
  min-height: 200px;
  border-radius: 10px;
  padding-bottom: 10px;
  box-shadow: 0px 0px 9px 2px rgba(184,184,184,1);
`

export const ImgWrapper = styled.div`
  border-radius: 10px 10px 0 0;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`
