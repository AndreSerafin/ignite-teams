import { UsersIcon } from '@components/UsersIcon'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
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
