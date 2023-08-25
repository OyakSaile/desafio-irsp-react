import { createBrowserRouter } from 'react-router-dom'
import { DashboardPage } from '../pages/DashboardPage'
import { ListAllUsers } from '../pages/DashboardPage/pages/Users/ListAllUsers'
import { CreateUser } from '@/pages/DashboardPage/pages/Users/CreateUser'
import { EditUser } from '@/pages/DashboardPage/pages/Users/EditUser'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
    children: [
      {
        path: 'users/list',
        element: <ListAllUsers />,
      },
      {
        path: 'users/create',
        element: <CreateUser />,
      },
      {
        path: 'users/edit/:id',
        element: <EditUser />,
      },
    ],
  },
])
