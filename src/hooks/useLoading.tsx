import { createContext, useContext, useState } from 'react'

interface LoadingContext {
  isLoading: boolean
  Loading: {
    turnOn(): void
    turnOff(): void
  }
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const LoadingContext = createContext({} as LoadingContext)

interface LoadingProviderProps {
  children: React.ReactNode
}
export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const Loading = {
    turnOn() {
      setIsLoading(true)
    },
    turnOff() {
      setIsLoading(false)
    },
  }

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, Loading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoading = () => {
  return useContext(LoadingContext)
}
