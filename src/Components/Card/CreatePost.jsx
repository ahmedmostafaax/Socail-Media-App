

import { Button, Spinner } from '@heroui/react'
import React, { useState } from 'react'
import Image from '../../assets/download.jpg'
import { CreatePostApi } from '../../Services/PostServices.js'


export default function CreatePost({callback}) {


    const[postBody , setPostBody] = useState('')
    const[image , setImage] = useState(null)
    const[imageUrl , setImageUrl] = useState()
    const[loading , setLoading] = useState(false)



    function handelImage(e){
        setImage(e.target.files[0])
        // URL.createObjectURL(e.target.files[0]) 
        setImageUrl(URL.createObjectURL(e.target.files[0]))
        e.target.value = ''

    }


    async function createPosts (e){
        e.preventDefault()
        setLoading(true)

        const formData = new FormData()

        formData.append('body' , postBody)
        formData.append('image' , image)

        const response = await CreatePostApi(formData)
        if(response.message){
            await callback()
            setPostBody('')
            setImageUrl('')
        }
        setLoading(false)
    }



  return <>
    <div className="mx-auto relative px-5 py-4 mb-4 bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg overflow-hidden">

  <form onSubmit={createPosts}> 
    <textarea value={postBody} onChange={(e)=>setPostBody(e.target.value)}
      placeholder='Type Something....' className='bg-gray-100 mt-2 border w-full rounded resize-none p-3'rows={2}></textarea>

     {imageUrl &&  <div className='relative'>
        <img src={imageUrl} className='w-full' alt='photo' />
        <svg onClick={()=>setImageUrl('')}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute top-4 end-4 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
        </svg>
      </div>}
    





    <div className="flex items-center justify-between mt-3">
      <div>
        <label className="cursor-pointer text-gray-600 hover:text-red-500 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Photo
          <input onChange={handelImage}  type='file' className='hidden' />
        </label>
      </div>
      
      <Button className='mb-1' type='submit' variant='ghost' color='danger'>Post</Button>    
    </div>
  </form>

  {loading && 
    <div className='absolute inset-0 w-full h-full flex justify-center items-center bg-gray-300/30'>
      <Spinner/>
    </div>}


</div>


  </>
} 
