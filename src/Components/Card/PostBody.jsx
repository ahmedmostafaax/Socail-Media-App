
import React from 'react'

export default function PostBody({body , image}) {
  return <>
     { body && <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal"> {body} </p>}
     { image && <img src={image} className='w-full h-75 object-cover' />}
  </>
}
