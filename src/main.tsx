import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { router } from './routes/dashboardRoutes.tsx'
import { RouterProvider } from 'react-router-dom'
import { LoadingProvider } from './hooks/useLoading.tsx'
import { ComponentsUsedsWithProviders } from './utils/ComponentsUsedsWithProviders.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoadingProvider>
      <ComponentsUsedsWithProviders />
      <RouterProvider router={router} />
    </LoadingProvider>
  </React.StrictMode>,
)
