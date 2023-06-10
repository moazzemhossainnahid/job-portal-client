import Layout from '../components/Layouts'
import { useEffect } from 'react'
import '../styles/globals.css'
import 'aos/dist/aos.css' 
import AOS from 'aos'


export default function App({ Component, pageProps }) {
useEffect(() => {
  AOS.init({
    duration: 1500, 
    offset: 100, 

  })
}, [])
  
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
