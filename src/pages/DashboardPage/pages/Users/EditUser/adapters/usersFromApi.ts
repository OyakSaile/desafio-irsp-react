export interface UsersFromApi {
  id: string
  name: string
  email: string
}

export interface UsersMapped {
  id: string
  name: string
  email: string
}
export const usersFromApi = (data: UsersFromApi): UsersMapped => {
  return {
    id: data.id,
    name: data.name,
    email: data.email,
  }
}
