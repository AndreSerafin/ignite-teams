import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

interface Props extends TouchableOpacityProps {
  iconName: keyof typeof MaterialIcons.glyphMap
  type?: S.ButtonIconTypeStyleProps
}

export function ButtonIcon({ iconName, type = 'PRIMARY', ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Icon name={iconName} type={type} />
    </S.Container>
  )
}
