import { Pencil, Trash } from '@phosphor-icons/react'
import { UsersMapped } from '../../adapters/usersFromApi'
import { api } from '@/services/api'
import { useNavigate } from 'react-router-dom'
import { useLoading } from '@/hooks/useLoading'

interface UsersListProps {
  users: UsersMapped[]
  setUsers: React.Dispatch<React.SetStateAction<UsersMapped[]>>
}

export const UsersList: React.FC<UsersListProps> = ({ users, setUsers }) => {
  const navigate = useNavigate()
  const { Loading } = useLoading()
  const handleDeleteUser = async (id: number) => {
    try {
      Loading.turnOn()
      await api.delete(`/users/${id}`)
      setUsers(users.filter((user) => user.id !== id))
    } catch (error) {
      console.log(error)
    } finally {
      Loading.turnOff()
    }
  }

  const handleEditUser = async (id: number) => {
    try {
      navigate(`/users/edit/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <table className="min-w-full text-left border  rounded-md">
      <thead className="bg-indigo-50 text-indigo-900">
        <th className="py-3 px-6"></th>
        <th className="py-3 px-6">Name</th>
        <th className="py-3 px-6">E-mail</th>
        <th className="py-3 px-6">UserName</th>
        <th className="py-3 px-6">Actions</th>
      </thead>

      <tbody className="bg-white w-full">
        {users?.map((user) => (
          <tr key={user.id}>
            <td className="py-3 px-6">
              <img
                className="w-[20px] h-[20px] rounded-full"
                src={`https://source.unsplash.com/random/${user.id}`}
                alt=""
              />
            </td>

            <td className="py-3 px-6" id="user-name">
              {user.name}
            </td>
            <td className="py-3 px-6">{user.email}</td>
            <td className="py-3 px-6">@{user.username}</td>
            <td className="py-3 px-6 flex gap-3">
              <button onClick={() => handleEditUser(user.id)} type="button">
                <Pencil
                  className="text-indigo-500 hover:brightness-50 transition"
                  size={24}
                />
              </button>
              <button type="button" onClick={() => handleDeleteUser(user.id)}>
                <Trash
                  size={24}
                  className="text-red-500 hover:brightness-50 transition"
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
