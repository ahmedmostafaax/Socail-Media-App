import { Button } from '@heroui/react'
import React, { useEffect, useState } from 'react'
import PostCart from '../Components/PostCart.jsx'
import { GetAllPosts } from '../Services/PostServices.js'
import LoadingScreen from '../Components/LoadingScreen.jsx'
import CreatePost from '../Components/Card/CreatePost.jsx'

export default function FeedPage() {
  const [posts, setPosts] = useState([])

  async function fetchPosts() {
    const response = await GetAllPosts()
    setPosts(response.posts)
  }
 
  useEffect(() => {
    fetchPosts()
  }, [])

  return <>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      
      <CreatePost callback={GetAllPosts}/>

      <div className="max-w-lg mx-auto space-y-6">
      
        {posts.length == 0 ? <LoadingScreen/> : 
        posts.map((post) => (<PostCart key={post.id} 
          post={post} commentLimit={false} callback={GetAllPosts} />
        ))}
      </div>

    </div>
  </> 
}