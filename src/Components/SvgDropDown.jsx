import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react'
import React from 'react'
import { DeleteCommentApi } from '../Services/CommentContent.js'

export default function SvgDropDown({commentId}) {


  async function deleteComment(commentId){
    const response = await DeleteCommentApi(commentId)
  }


  return<>
  
    <Dropdown>
              <DropdownTrigger>
                <button className="cursor-pointer p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                  </svg>
                </button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="edit" className="text-danger" color="danger">Edit</DropdownItem>
                <DropdownItem onClick={()=>deleteComment(commentId)} key="delete" className="text-danger" color="danger">Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
  </>
}
