import { useState, useCallback } from 'react'
import { DashboardContent } from '@/styles/layout/DashboardContent'
import { api } from '@/services/api'
import { useNavigate } from 'react-router-dom'

export const CreateUser = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    },
    [],
  )

  const handleCreateUser = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      try {
        await api.post(`/users/`, formData)

        navigate('/users/list')
      } catch (error) {}
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formData],
  )

  return (
    <DashboardContent title="Create User">
      <div>
        <form onSubmit={handleCreateUser}>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password..."
              required
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <button className="bg-indigo-500 mt-5 text-white" type="submit">
            Create User
          </button>
        </form>
      </div>
    </DashboardContent>
  )
}
