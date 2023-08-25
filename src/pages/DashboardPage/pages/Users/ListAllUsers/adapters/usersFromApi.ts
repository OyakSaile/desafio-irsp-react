export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface UsersFromApi {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface UsersMapped {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}
export const usersFromApi = (data: UsersFromApi[]): UsersMapped[] => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      username: item.username,
      email: item.email,
      address: item.address,
      phone: item.phone,
      website: item.website,
      company: item.company,
    }
  })
}
