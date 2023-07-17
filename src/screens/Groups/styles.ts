import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex: 1;
`
