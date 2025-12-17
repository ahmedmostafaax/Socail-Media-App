import React from 'react'
import { Link } from 'react-router-dom'

export default function PostFooter({commentsNumber , postId}) {
  return <>
  
     <div className="flex justify-between items-center mt-5">
        <div className="flex ">
          <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">Likes</span>
        </div>  
        <div className="ml-1 text-gray-500 dark:text-gray-400 font-light"><Link
         to={'post-details/' + postId} > {commentsNumber} comments </Link> </div> 
        </div>
    
    </>
}
