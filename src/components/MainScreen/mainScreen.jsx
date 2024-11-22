import React from 'react'
import './mainScreen.css'
import Header from '../Header/header'
import SearchSection from '../Search/searchSection'

const mainScreen = () => {
  return (
    <div className='mainScreenContainer'>
      <div className="mainScreenInnerContainer">
        <Header />
        <SearchSection />
      </div>
    </div>
  )
}

export default mainScreen