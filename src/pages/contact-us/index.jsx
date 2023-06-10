import React from 'react'
import GetInTouch from '../../components/ContactUsPage/GetInTouch'
import FindOurLocation from '../../components/ContactUsPage/FindOurLocation'
import Contact from '../../components/ContactUsPage/Contact'
import ContactHero from '../../components/ContactUsPage/ContectHero'

const ContactUs = () => {
  return (
    <div>
      <ContactHero/>
      <Contact/>
      <FindOurLocation />
      <GetInTouch />
    </div>
  )
}

export default ContactUs
