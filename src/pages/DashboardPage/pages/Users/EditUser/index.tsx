import { useState, useCallback, useEffect } from 'react'
import { DashboardContent } from '@/styles/layout/DashboardContent'
import { api } from '@/services/api'
import { useNavigate, useParams } from 'react-router-dom'
import { LIST_USERS } from '@/routes/pathts'
import { useLoading } from '@/hooks/useLoading'
import { Button } from '@/components/Button'
import { InputText } from '@/components/Form/InputText'

export const EditUser = () => {
  const navigate = useNavigate()
  const { Loading } = useLoading()
  const { id } = useParams()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  useEffect(() => {
    const loadInitialUserInformation = async () => {
      try {
        Loading.turnOn()
        const { data } = await api.get(`/users/${id}`)
        setFormData(data)
      } catch (err) {
        console.error(err)
        navigate(LIST_USERS)
      } finally {
        Loading.turnOff()
      }
    }

    loadInitialUserInformation()
  }, [id])

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
        await api.put(`/users/${id}`, formData)

        navigate('/users/list')
      } catch (error) {}
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formData],
  )

  const handleGoBack = useCallback(() => {
    navigate(LIST_USERS)
  }, [navigate])

  return (
    <DashboardContent title="Edit User">
      <div className="shadow bg-white ">
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
