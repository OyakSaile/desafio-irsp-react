import { useEffect, useState } from 'react'
import { UsersMapped, usersFromApi } from './adapters/usersFromApi'
import { api } from '@/services/api'
import { DashboardContent } from '@/styles/layout/DashboardContent'
import { Link } from 'react-router-dom'
import { UsersList } from './components/UsersList'

export const ListAllUsers = () => {
  const [users, setUsers] = useState<UsersMapped[]>([])

  useEffect(() => {
    const loadUsers = async () => {
      const { data } = await api.get('/users')
      const usersMapped = usersFromApi(data)
      setUsers(usersMapped)
    }

    loadUsers()
  }, [])

  return (
    <DashboardContent title="All Users">
      <Link
        to="/users/create"
        className="bg-indigo-500 my-5 ml-auto flex w-[200px] justify-center items-center text-white py-3"
      >
        Create User
      </Link>
      <div>
        <UsersList users={users} setUsers={setUsers} />
      </div>
    </DashboardContent>
  )
}
