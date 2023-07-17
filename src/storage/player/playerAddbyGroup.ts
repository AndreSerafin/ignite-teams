import { AppError } from '@utils/AppError'
import { PLAYER_COLLECTION } from '@storage/storageConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AsyncStorageHook } from '@react-native-async-storage/async-storage/lib/typescript/types'

import { PlayerStorageDTO } from './PlayerStorageDTO'
import { playerGetByGroup } from './playerGetbyGroup'
export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string,
) {
  const storedPlayers = await playerGetByGroup(group)

  const playerAlredyExists = storedPlayers.filter(
    (player) => player.name === newPlayer.name,
  )

  if (playerAlredyExists.length > 0) {
    throw new AppError('Esta pessoa já está cadastrada')
  }

  const storage = JSON.stringify([...storedPlayers, newPlayer])

  await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
}
