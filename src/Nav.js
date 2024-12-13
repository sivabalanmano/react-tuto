import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContaxt from './contaxt/DataContaxt'

const Nav = () => {
  const {search,setSearch}=useContext(DataContaxt)

  return (
    <nav className='nav'>
      <form className="searchform" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='search'></label>
        <input 

        id='search'
        placeholder='SearchPost'
        type="text"
        value={search}
        onChange={(e)=>setSearch(e.target.value)} />

      </form>
      <ul className='nav'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/postpage">PostPage</Link></li>
      </ul>
    </nav>
  )
}

export default Nav