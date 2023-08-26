import { LoadingSpin } from '@/components/LoadingSpin'
import { useLoading } from '@/hooks/useLoading'

export const ComponentsUsedsWithProviders = () => {
  const { isLoading } = useLoading()
  return <LoadingSpin isLoading={isLoading} />
}
