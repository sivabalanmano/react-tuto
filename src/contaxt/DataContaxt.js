import { createContext, useState, useEffect  } from "react";
import {useNavigate} from 'react-router-dom'
import { format } from 'date-fns';
import api from "../api/posts";
import useWindowsize from '../hooks/useWindowsize';
import useAxiosfetch from '../hooks/useAxiosfetch';


const DataContaxt=createContext({})

 export const DataProvider =({children})=>{
  const [posts,setPost]=useState([])
  const [search,setSearch]= useState('')
  const [searchResult,setsearchResult] = useState('')
  const [postTitle,setPostTitle] = useState('')
  const  [postBody,setpostBody] = useState('')
  const [EditTitle,setEditTitle] = useState('')
  const  [EditBody,setEditBody] = useState('')
  const navigate = useNavigate()
  const {width}=useWindowsize()
  const {data,fetchError,isLoding}= useAxiosfetch("http://localhost:3500/posts")

  useEffect(()=>{
    setPost(data)
  },[data])



  useEffect(()=>{
    const filterResult = posts.filter((post)=>
    ((post.body).toLowerCase()).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase()))

    setsearchResult(filterResult.reverse())
  },[posts,search])

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const id=posts.length ? posts[posts.length -1].id +1:1;
    const dateTime = format(new Date(), 'MMMM dd,  yyyy PP');
    try{
          const newPost = {id,title:postTitle,dateTime,body:postBody}
          const response = await api.post('/posts',newPost)
          const allpost =[...posts,response.data];
          setPost(allpost)
          setPostTitle('')
          setpostBody('')
          navigate('/')
        }
        catch(err){
          if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
  
          }
        
         else{
        console.log(`Error:${err.message}`)}
      }
  }

  const handelUpdate = async (id)=>{
    const dateTime = format(new Date(), 'MMMM dd,  yyyy PP');
    const updatePost = {id,title:EditTitle,dateTime,body:EditBody}
    try{
      const response = await api.put(`/posts/${id}`,updatePost)
         setPost(posts.map(post=>post.id===id ? {...response.data} : post))
          setEditTitle('')
          setEditBody('')
          navigate('/')
   
    }
    catch(err){
      if(err.response){
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)

      }
    
     else{
    console.log(`Error:${err.message}`)}
  }
  }

  const handleDelete = async (id)=>{
    try{
      await api.delete(`posts/${id}`)
    const postList = posts.filter(post => post.id !== id);
    setPost(postList)
    navigate('/')
    }
    catch(err){
      if(err.response){
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)

      }
    
     else{
    console.log(`Error:${err.message}`)}
  }
  }
    return (
        <DataContaxt.Provider value={{
            width,search,setSearch,posts,isLoding,fetchError,handleSubmit,postTitle,setPostTitle,postBody,setpostBody
            ,handleDelete,handelUpdate,EditTitle,setEditTitle,EditBody,setEditBody,searchResult,useNavigate,navigate
        }}>
            {children}
        </DataContaxt.Provider>
    )
}
export default DataContaxt