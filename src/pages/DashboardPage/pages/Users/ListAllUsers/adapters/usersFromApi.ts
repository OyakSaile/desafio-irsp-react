export interface UsersFromApi {
  id: number
  name: string
  username: string
  email: string
}

export interface UsersMapped {
  id: number
  name: string
  username: string
  email: string
}
export const usersFromApi = (data: UsersFromApi[]): UsersMapped[] => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      username: item.username,
      email: item.email,
    }
  })
}
