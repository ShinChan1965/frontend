import React from 'react'
// import Login from './Login'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Search from '../component/Search'
import Hero from '../component/Hero'
const main = () => {
  return (
       <div className=' h-full py-1'>
        <div style={{ marginBottom:'10px'}}>
    <Header/>
    </div>
    <div style={{ marginBottom: '500px' }}>
    <Hero/>
    </div>
  {/* <Login/>  */}
  <Footer/>
  <search/>
</div>
  )
}

export default main