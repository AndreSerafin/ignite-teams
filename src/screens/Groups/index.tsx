import { View, Text } from 'react-native'
import * as S from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'

export function Groups() {
  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />
    </S.Container>
  )
}
