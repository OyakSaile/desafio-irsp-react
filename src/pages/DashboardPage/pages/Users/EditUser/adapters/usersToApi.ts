export interface UserMapped {
  name: string
  email: string
  password: string
}

export interface UsersToApi {
  name: string
  email: string
  password: string
}
export const usersToApi = (data: UserMapped): UsersToApi => {
  return {
    email: data.email,
    name: data.name,
    password: data.password,
  }
}
