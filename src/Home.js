import React, { useContext } from 'react'
import Feed from './Feed'
import DataContaxt from './contaxt/DataContaxt'

const Home = () => {
  const  {searchResult,isLoding,fetchError}=useContext(DataContaxt)
  return (
    <main  className='home'>
      {isLoding && <p className='statusmsg'>Loading Posts</p>}
      {isLoding && fetchError && <p className='statusmasg' style={{color:"red"}}>{fetchError}</p>}
      {!isLoding && !fetchError && (searchResult.length ? <Feed posts={searchResult}/>:<p>No Posts To Display</p>)}
    </main>
  )
}

export default Home