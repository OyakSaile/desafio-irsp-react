import { useState, useCallback, useEffect } from 'react'
import { DashboardContent } from '@/styles/layout/DashboardContent'
import { api } from '@/services/api'
import { useNavigate, useParams } from 'react-router-dom'
import { useLoading } from '@/hooks/useLoading'
import { Button } from '@/components/Button'
import { InputText } from '@/components/Form/InputText'
import { LIST_ALL_USERS_ROUTE } from '@/routes/paths'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { Form, Formik } from 'formik'
import { usersFromApi } from './adapters/usersFromApi'
import { usersToApi } from './adapters/usersToApi'
import { editUserSchema } from '@/schemas/editUserSchema'

export const EditUser = () => {
  const navigate = useNavigate()
  const { Loading } = useLoading()
  const { id } = useParams()

  const [initialUserValue, setInitialUserValue] = useState({
    id: '',
    name: '',
    email: '',
  })

  useEffect(() => {
    const loadInitialUserInformation = async () => {
      try {
        Loading.turnOn()
        const { data } = await api.get(`/users/${id}`)

        const userMapped = usersFromApi(data)
        console.log(userMapped)
        setInitialUserValue(userMapped)
      } catch (err) {
        console.error(err)
        navigate(LIST_ALL_USERS_ROUTE)
      } finally {
        Loading.turnOff()
      }
    }

    loadInitialUserInformation()
  }, [id])

  const handleGoBack = useCallback(() => {
    navigate(LIST_ALL_USERS_ROUTE)
  }, [navigate])

  const handleCreateUser = useCallback(
    async (formData: { name: string; email: string; password: string }) => {
      try {
        const userMapped = usersToApi(formData)
        await api.put(`/users/${id}`, userMapped)

        navigate(LIST_ALL_USERS_ROUTE)
      } catch (error) {
        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message, {
            toastId: 1,
          })
        } else {
          console.error(error)
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return (
    <DashboardContent title="Edit User">
      <div className="shadow bg-white ">
        <Formik
          initialValues={{
            name: initialUserValue.name,
            password: '',
            email: initialUserValue.email,
          }}
          enableReinitialize
          validationSchema={editUserSchema}
          onSubmit={(values) => {
            handleCreateUser(values)
          }}
        >
          {({ errors, touched }) => (
            <Form className=" flex flex-col justify-center h-full  p-12">
              <div className=" grid grid-cols-1 md:grid-cols-2  gap-6">
                <InputText
                  label="Name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  hasError={!!errors.name && !!touched.name}
                  errorMessage={errors.name}
                />

                <InputText
                  label="E-mail"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={initialUserValue.email}
                  disabled
                  hasError={!!errors.email && !!touched.email}
                  errorMessage={errors.email}
                />
              </div>
              <div className="my-5 grid grid-cols-1 md:grid-cols-2">
                <InputText
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Enter user password..."
                  hasError={!!errors.password && !!touched.password}
                  errorMessage={errors.password}
                />
              </div>
              <div className="mx-auto flex gap-3 flex-col md:flex-row">
                <Button
                  onClick={handleGoBack}
                  className="border  py-5 w-[250px]  rounded-md text-indigo-500 hover:bg-indigo-50 transition-all"
                  type="button"
                >
                  Voltar
                </Button>
                <Button
                  className="bg-indigo-500 py-5 w-[250px] mx-auto rounded-md text-white"
                  type="submit"
                  disabled={!!errors.name || !!errors.password}
                >
                  Create User
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </DashboardContent>
  )
}
