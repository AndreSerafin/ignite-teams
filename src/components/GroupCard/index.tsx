import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

interface Props extends TouchableOpacityProps {
  title: string
}

export function GroupCard({ title, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Icon size={32} filled={true} />
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
