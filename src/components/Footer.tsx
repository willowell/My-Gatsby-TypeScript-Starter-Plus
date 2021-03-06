import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

const StyledFooter = styled.footer`
  height: ${heights.footer}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};
`

const FooterInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({ }: FooterProps) => {
  return (
    <StyledFooter>
      <FooterInner>
        <h1>Here is the bottom of the page!</h1>
      </FooterInner>
    </StyledFooter>
  )
}

export default Footer
