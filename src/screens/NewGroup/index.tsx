import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import * as S from './styles'

import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

import { groupCreate } from '@storage/group/groupCreate'
import { AppError } from '@utils/AppError'
import { Alert } from 'react-native'

export function NewGroup() {
  const [group, setGroup] = useState('')

  const { navigate } = useNavigation()

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma.')
      }

      await groupCreate(group)
      navigate('players', { group })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message)
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar este grupo')

        console.log(error)
      }
    }
  }
  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.IconContainer>
          <S.Icon />
        </S.IconContainer>
        <Highlight
          title="Nova Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />
        <Input
          placeholder="Nome da turma"
          onChange={(e) => setGroup(e.nativeEvent.text)}
        />
        <Button title="Criar" onPress={handleNew} />
      </S.Content>
    </S.Container>
  )
}
