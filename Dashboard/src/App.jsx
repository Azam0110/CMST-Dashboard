import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Sidebar from './SideBar'
import Dashboard from './Dashboard'
import DashboardButtons from './DashboardButtons'
import DashboardStat from './DashboardStats'
import StatsList from './StatsList'
import VisitorPopup from './VisitorPopup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Sidebar/>
      <DashboardButtons/>
      <StatsList/>
      <VisitorPopup/>
      
    </>
  )
}

export default App
