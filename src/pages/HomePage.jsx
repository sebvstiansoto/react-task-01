import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import '../styles/HomePage.css'
import Images from '../components/Images'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
    <section className='homepage'>
        <NavBar/>
        <Header/>
    </section>
    <section className='public-images'>
        <Images/>
        <Images/>
        <Images/>
        <Images/>
    </section>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default HomePage