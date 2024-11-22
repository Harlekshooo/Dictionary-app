import React from 'react'
import './notFound.css'

const notFound = () => {
  return (
    <div className='notFoundContainer'>
        <div className="notFoundInnerContainer">
            <h2 className='notFoundHeader'>I'm sorry the word you are looking for is not found in this dictionary.☹</h2>
        </div>
    </div>
  )
}

export default notFound