import React, { useContext, useState, useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import AppProvider, {AppContext} from '../state/AppProvider'
import { W_WIDTH } from '../state/ActionTypes'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Layout({ children }: any) {
  const { dispatch } = useContext(AppContext)
  // const initHeight = (window.innerHeight-70).toString()+"px";
  const [wWidth, setWHeight] = useState(500)
  const getWWidth: any = () => {
    setWHeight(wWidth)
    
    dispatch({
      type: W_WIDTH,
      payload: { w_width: window.innerWidth },
    });
  }
  useEffect(() => {
    window.addEventListener('resize', getWWidth)
    console.log('resize',wWidth);
    return () => {
      window.removeEventListener('resize', getWWidth)
    }
  }, [wWidth])
  useEffect(() => {
    console.log('wWidth',wWidth);
    setWHeight(window.innerWidth)
    
  }, [])

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
