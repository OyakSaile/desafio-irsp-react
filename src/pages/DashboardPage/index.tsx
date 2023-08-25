import { useEffect, useState } from 'react'
import { UsersMapped, usersFromApi } from './pages/Users/ListAllUsers/adapters/usersFromApi'
import { api } from '../../services/api'
import { Search } from './components/Search'
import { Userslist } from './components/UsersList'
import { SideMenu } from '../../components/SideMenu'
import { DashboardContent } from '../../styles/layout/DashboardContent'
import { Outlet } from 'react-router-dom'

export const DashboardPage: React.FC = () => {
  return (
    <main className="h-screen flex">
      <SideMenu />
      <DashboardContent title="Users">
        <Outlet />
      </DashboardContent>
    </main>
  )
}
