import { useState, useCallback } from 'react'
import { DashboardContent } from '@/styles/layout/DashboardContent'
import { api } from '@/services/api'
import { useNavigate } from 'react-router-dom'
import { usersToApi } from './adapters/usersToApi'
import { InputText } from '@/components/Form/InputText'
import { LIST_ALL_USERS_ROUTE } from '@/routes/paths'
import { Button } from '@/components/Button'

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
        const userMapped = usersToApi(formData)

        await api.post(`/users/`, userMapped)

        navigate(LIST_ALL_USERS_ROUTE)
      } catch (error) {}
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formData],
  )

  const handleGoBack = useCallback(() => {
    navigate(LIST_ALL_USERS_ROUTE)
  }, [navigate])

  return (
    <DashboardContent title="Create New User">
      <div className=" shadow bg-white ">
        <form
          className=" flex flex-col justify-center h-full  p-12"
          onSubmit={handleCreateUser}
        >
          <div className=" grid grid-cols-2 gap-6">
            <InputText
              label="Name"
              type="text"
              name="name"
              placeholder="User name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />

            <InputText
              label="E-mail"
              type="email"
              name="email"
              placeholder="E-mail"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-5 grid grid-cols-2">
            <InputText
              label="Password"
              type="password"
              name="password"
              placeholder="Enter user password..."
              required
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="mx-auto flex gap-3">
            <Button
              onClick={handleGoBack}
              className="border  py-5 w-[250px]  rounded-md text-indigo-500 hover:bg-indigo-50 transition-all"
              type="submit"
            >
              Voltar
            </Button>
            <Button
              disabled={!formData.name || !formData.email || !formData.password}
              className="bg-indigo-500 py-5 w-[250px] mx-auto rounded-md text-white"
              type="submit"
            >
              Create User
            </Button>
          </div>
        </form>
      </div>
    </DashboardContent>
  )
}
