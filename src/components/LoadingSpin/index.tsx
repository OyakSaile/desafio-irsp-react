import './styles.css'

interface LoadingSpinProps {
  isLoading: boolean
}
export const LoadingSpin: React.FC<LoadingSpinProps> = ({
  isLoading = false,
}) => {
  return isLoading ? (
    <div
      data-testid="loading-spinner"
      className="h-screen w-full absolute  bg-indigo-500 z-10 flex flex-col justify-center items-center "
    >
      <div className="custom-loader"></div>
    </div>
  ) : null
}
