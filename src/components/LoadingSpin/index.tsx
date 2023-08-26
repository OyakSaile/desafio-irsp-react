import { useLoading } from '@/hooks/useLoading'
import './styles.css'
export const LoadingSpin = () => {
  const { isLoading } = useLoading()

  return isLoading ? (
    <div className="h-screen w-full absolute  bg-indigo-500 z-10 flex flex-col justify-center items-center ">
      <div className="custom-loader"></div>
    </div>
  ) : null
}
