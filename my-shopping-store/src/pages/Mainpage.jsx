import React from 'react'
import Mencollection from '../components/Mencollection'
import Womencollection from '../components/Womencollection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

const Mainpage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Mencollection />
      <Womencollection />
      <Footer />
    </div>
  )
}

export default Mainpage
