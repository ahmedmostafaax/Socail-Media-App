import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetSinglePost } from '../Services/PostServices.js'
import PostCart from '../Components/PostCart.jsx'
import LoadingScreen from '../Components/LoadingScreen.jsx'

export default function PostDetails() {

 let {id} = useParams()

 const [post , setPost] = useState(null)
 
 async function getPost (){
  const response = await GetSinglePost(id)
  if(response.message){
    setPost(response.post)
  }
 }

 useEffect(()=>{
  getPost()
 },[])


  return <>

  <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg overflow-hidden mx-auto">

  {post ? <PostCart post={post} 
  commentLimit={post.comments.length} callback={getPost} />: <LoadingScreen/> }
  
  </div>
  
  </>
}
