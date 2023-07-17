import { playerGetByGroup } from './playerGetbyGroup'

export async function playerGetByGroupAndTeam(group: string, team: string) {
  const storage = await playerGetByGroup(group)

  const players = storage.filter((player) => player.team === team)

  return players
}
