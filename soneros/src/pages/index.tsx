import React from "react"
import DashboardHeader from "../components/dashboard/Header"
import Head from "../components/Head"
import DashboardSidebar from "../components/dashboard/Sidebar"
import Dashboard from "../components/dashboard/DashBoard"
import styles from '../styles/Dashboard.module.css'
export default function Page() {
  return (
    <>

      <Head />
      <div className={styles.externalDiv}>
      <DashboardHeader />

      <DashboardSidebar /> 
      <Dashboard />
      </div>
     
     

    </>
  )
}