import React, { useState } from 'react'
import './searchSection.css'
import { IoMdSearch } from "react-icons/io";
import Result from '../Result/result';
import NotFound from '../Notfound/notFound';


const searchSection = () => {

  const baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en/"
  const [searchTerm, setSearchTerm] = useState("")
  // const [resultTerm, setResultTerm] = useState("")
  const [searchPackage, setSearchPackage] = useState([])
  const [emptySearch, setEmptySearch] = useState(false)
  const [found, setFound] = useState(true)
  
  
  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${baseURL}${searchTerm}`)
      const data = await res.json()
      if(res.ok) {
        setFound(true)
      }else{
        setFound(false);
      }
      
      if(searchTerm == data[0].word){
        setSearchTerm(data[0].word)
      }

      setSearchPackage(data[0].meanings)
      localStorage.setItem("storedPackage", JSON.stringify(data[0].meanings))
      localStorage.setItem("storedTerm", JSON.stringify(searchTerm))
    } catch (error) {
      // console.log(error);
      console.log("There has been an error sorry");
    }
    
  }

  const savedPackage = JSON.parse(localStorage.getItem("storedPackage"))
  const savedTerm = JSON.parse(localStorage.getItem("storedTerm"))
  // localStorage.clear()

  const handleSearchChange = (e) => {
    let searchResult = e.target.value
    setSearchTerm(searchResult)
    // console.log(emptySearch)
  }
  

  return (
    <div className='searchContainer'>
        <main className="searchInnerContainer">
            <form onSubmit={handleSearchSubmit} className='searchInputContainer'>
                <input className='searchInput' onChange={handleSearchChange} type="text" placeholder='Enter the text to search for' />
                <button className='mobileSearchBtn'>search</button>
                <button className='desktopSearchBtn'><IoMdSearch className='searchIcon' /></button>
            </form>
            {/* <Result savedTerm={savedTerm} savedPackage={savedPackage == null ? searchPackage : savedPackage} /> */}
            
            
            {found ? (<Result savedTerm={savedTerm} savedPackage={savedPackage == null ? searchPackage : savedPackage} />) : (<NotFound />)}
            
            
            
        </main>
    </div>
  )
}

export default searchSection