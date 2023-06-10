import React from 'react'
import Footer from '../common/Footer'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  const router = useRouter()
  const { pathname } = router
  console.log(pathname)

  return (
    <div className='min-h-screen overflow-x-hidden'>
      {/* <Header />
      <Navbar /> */}

      <div className='min-h-[70vh]  bg-slate-50 '>{children}</div>
      {!pathname.includes('/admin') && <Footer />}
    </div>
  )
}

export default Layout
