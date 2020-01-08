import * as React from 'react'
import styled from '@emotion/styled'

const StyledLayoutHome = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 60px;
`

interface LayoutHomeProps {
  className?: string
}

const LayoutHome: React.FC<LayoutHomeProps> = ({ children, className }) => (
  <StyledLayoutHome className={className}>{children}</StyledLayoutHome>
)

export default LayoutHome
