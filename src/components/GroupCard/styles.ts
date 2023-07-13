import { UsersIcon } from '@components/UsersIcon'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 96px;
  margin-bottom: 12px;
  flex-direction: row;
  background: ${({ theme }) => theme.COLORS.GRAY_500};
  padding: 0 32px;
  align-items: center;
  align-self: center;
  gap: 20px;
  border-radius: 6px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const Icon = styled(UsersIcon).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_500,
}))``
