import { LoadingSpin } from '@/components/LoadingSpin'
import { useLoading } from '@/hooks/useLoading'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ComponentsUsedsWithProviders = () => {
  const { isLoading } = useLoading()
  return (
    <>
      <LoadingSpin isLoading={isLoading} />
      <ToastContainer />
    </>
  )
}
