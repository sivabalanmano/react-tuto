import React, { useContext } from 'react'
import DataContaxt from './contaxt/DataContaxt'

const NewPost = () => {
  const {handleSubmit,postTitle,setPostTitle,postBody,setpostBody}=useContext(DataContaxt)
  return (
    <main className='newpost'>
      <h2>New Post</h2>
      <form className='newpostForm' onSubmit={handleSubmit}>
         <label htmlFor="postTitle">Title:</label>
         <input 
            type="text"
            id='postTitle'
            required
            value={postTitle}
            onChange={(e)=> setPostTitle(e.target.value)} />
            <br />
            <label htmlFor="postTitle">Post:</label>
           <textarea
            type="text"
            id='postBody'
            required
            value={postBody}
            onChange={(e)=> setpostBody(e.target.value)} />
            <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default NewPost