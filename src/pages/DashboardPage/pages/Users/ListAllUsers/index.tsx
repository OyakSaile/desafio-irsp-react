import { useEffect, useState } from 'react'
import { UsersMapped, usersFromApi } from './adapters/usersFromApi'
import { api } from '@/services/api'
import { Pencil, Trash } from '@phosphor-icons/react'

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
    <div className="min-w-full mt-5">
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
                <button>
                  <Pencil weight="fill" size={24} />
                </button>
                <button>
                  <Trash weight="fill" size={24} className="text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
