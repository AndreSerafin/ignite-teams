import { Alert, FlatList } from 'react-native'
import * as S from './styles'

import { Button } from '@components/Button'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ListEmpty } from '@components/ListEmpty'

import { groupsGetAll } from '@storage/group/groupsGetAll'

import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useCallback, useState } from 'react'

export function Groups() {
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<string[]>([])

  const { navigate } = useNavigation()

  function handleNewGroup() {
    navigate('new')
  }

  function handleGroupSelecetion(group: string) {
    navigate('players', { group })
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)
      const data = await groupsGetAll()
      setGroups(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      Alert.alert('Turmas', 'Não foi possivel carregar as turmas')
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, []),
  )

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard onPress={() => handleGroupSelecetion(item)} title={item} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        }
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  )
}
