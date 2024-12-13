import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContaxt from './contaxt/DataContaxt';

const Editpost = () => {
  const {posts,handelUpdate,EditTitle,setEditTitle,EditBody,setEditBody}=useContext(DataContaxt)

  const {id}=useParams()
  const  post = posts.find(post =>(post.id).toString() === id);

  useEffect(()=>{
    if(post){
      setEditTitle(post.title)
      setEditBody(post.body)
    }
  },[post,setEditTitle,setEditBody])
  return (
    <main className='editPage'>
      <article className='editpost'>
        { EditTitle && 
         <>
           <h2>edit Post</h2>
         <form className='newpostForm' onSubmit={(e)=>e.preventDefault()}>
         <label htmlFor="postTitle">Title:</label>
         <input 
            type="text"
            id='postTitle'
            required
            value={EditTitle}
            onChange={(e)=> setEditTitle(e.target.value)} />
            <br />
            <label htmlFor="postTitle">Post:</label>
           <textarea
            type="text"
            id='postBody'
            required
            value={EditBody}
            onChange={(e)=> setEditBody(e.target.value)} />
            <button type='submit' onClick={()=>handelUpdate(post.id)}>Submit</button>
            </form>
         
         </>

        }
        { !EditTitle &&

         <>
            <h2>Post not found</h2>
         </>
          
        }
      </article>
    </main>
  )
}

export default Editpost