import { SideMenu } from '../../components/SideMenu'
import { Outlet } from 'react-router-dom'

export const DashboardPage: React.FC = () => {
  return (
    <main className="h-screen flex">
      <SideMenu />

      <Outlet />
    </main>
  )
}
