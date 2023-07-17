import { AppError } from '@utils/AppError'
import { GROUP_COLLECTION } from '@storage/storageConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { groupsGetAll } from './groupsGetAll'

export async function groupCreate(newGroup: string) {
  const storedGroups = await groupsGetAll()

  const groupAlredyExists = storedGroups.includes(newGroup)

  if (groupAlredyExists) {
    throw new AppError('Já existe um grupo com este nome')
  }

  await AsyncStorage.setItem(
    GROUP_COLLECTION,
    JSON.stringify([...storedGroups, newGroup]),
  )
}
