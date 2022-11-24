import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import AppProvider from '../state/AppProvider'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Layout({ children }: any) {
  return (
    <>
      <AppProvider>
        <Header />
        <Sidebar />
        {children}
        <Footer />
      </AppProvider>
    </>
  )
}

export default Layout
