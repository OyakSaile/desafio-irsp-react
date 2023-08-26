import { useEffect, useState } from 'react'
import { UsersMapped, usersFromApi } from './adapters/usersFromApi'
import { api } from '@/services/api'
import { DashboardContent } from '@/styles/layout/DashboardContent'
import { Link } from 'react-router-dom'
import { UsersList } from './components/UsersList'
import { Plus } from '@phosphor-icons/react'
import { useLoading } from '@/hooks/useLoading'
import { CREATE_USER_ROUTER } from '@/routes/paths'

export const ListAllUsers = () => {
  const [users, setUsers] = useState<UsersMapped[]>([])
  const { Loading } = useLoading()

  useEffect(() => {
    const loadUsers = async () => {
      try {
        Loading.turnOn()
        const { data } = await api.get('/users')

        const usersMapped = usersFromApi(data)

        setUsers(usersMapped)
      } catch (err) {
        console.error(err)
      } finally {
        Loading.turnOff()
      }
    }

    loadUsers()
  }, [])

  return (
    <DashboardContent title="All Users">
      <Link
        to={CREATE_USER_ROUTER}
        className="bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all font-bold gap-3 my-5 ml-auto flex w-[200px] justify-center items-center text-white py-3"
      >
        Create new <Plus weight="fill" />
      </Link>
      <div>
        {users.length > 0 ? (
          <UsersList users={users} setUsers={setUsers} />
        ) : (
          <h2>No users found, create one.</h2>
        )}
      </div>
    </DashboardContent>
  )
}
