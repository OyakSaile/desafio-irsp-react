import { Pencil, Trash } from '@phosphor-icons/react'
import { UsersMapped } from '../../adapters/usersFromApi'
import { api } from '@/services/api'
import { useNavigate } from 'react-router-dom'

interface UsersListProps {
  users: UsersMapped[]
  setUsers: React.Dispatch<React.SetStateAction<UsersMapped[]>>
}

export const UsersList: React.FC<UsersListProps> = ({ users, setUsers }) => {
  const navigate = useNavigate()
  const handleDeleteUser = async (id: number) => {
    try {
      await api.delete(`/users/${id}`)
      setUsers(users.filter((user) => user.id !== id))
    } catch (error) {
      console.log(error)
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
    <table className="min-w-full text-left">
      <thead className="bg-indigo-500 text-white">
        <th className="py-3 px-6"></th>
        <th className="py-3 px-6">Name</th>
        <th>E-mail</th>
        <th>UserName</th>
        <th>Actions</th>
      </thead>

      <tbody className="bg-indigo-100 w-full">
        {users?.map((user) => (
          <tr data-testid="custom-element" key={user.id}>
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
                <Pencil weight="fill" size={24} />
              </button>
              <button type="button" onClick={() => handleDeleteUser(user.id)}>
                <Trash weight="fill" size={24} className="text-red-500" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
