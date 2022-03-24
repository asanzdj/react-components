import React from 'react'
import { StyledLink } from './Link.styled.js'

type Props = {
  theme: 'normal' | 'highlighted'
  onClick: () => void
  text: string
}

function Link({ theme, onClick, text }: Props): JSX.Element {
  return (
    <StyledLink onClick={onClick} theme={theme}>
      {text}
    </StyledLink>
  )
}

export default Link
