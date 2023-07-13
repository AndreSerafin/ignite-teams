import styled from 'styled-components/native'
import { UsersIcon } from '@components/UsersIcon'

export const Container = styled.View`
  padding: 20px 16px;

  flex: 1;
  background: ${({ theme }) => theme.COLORS.GRAY_600};
`
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  gap: 20px;
`

export const IconContainer = styled.View`
  align-self: center;
`

export const Icon = styled(UsersIcon).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_700,
}))``
