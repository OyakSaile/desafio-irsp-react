import { createBrowserRouter } from 'react-router-dom'
import { DashboardPage } from '../pages/DashboardPage'
import { ListAllUsers } from '../pages/DashboardPage/pages/Users/ListAllUsers'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
    children: [
      {
        path: 'users/list-all-users',
        element: <ListAllUsers />,
      },
    ],
  },
])
