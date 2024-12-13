import React, { useContext } from 'react'
import {  useParams,Link } from 'react-router-dom'
import DataContaxt from './contaxt/DataContaxt';

const PostPage = () => {
  const {posts,handleDelete}=useContext(DataContaxt)
  const {id} = useParams();
  const  post = posts.find(post =>(post.id).toString() === id);
  return (
    <main className='postPage'>
      <article className='post'>
        { post && 
         <>
           <h2>{post.title}</h2>
           <p>{post.datetime}</p>
           <p>{post.body}</p>
           <Link to={`/edit/${post.id}`}><button>Edit Post</button></Link>
           <button onClick={()=>handleDelete(post.id)}>Delete Post</button>
         
         </>

        }
        { !post &&

         <>
            <h2>Post not found</h2>
         </>
          
        }
      </article>
    </main>
  )
}

export default PostPage