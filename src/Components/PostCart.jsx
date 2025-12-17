import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from "@heroui/react";
import Comment from "./Card/Comment.jsx";
import PostBody from "./Card/PostBody.jsx";
import PostFooter from "./Card/PostFooter.jsx";
import PostHeader from "./Card/PostHeader.jsx";
import { useContext, useState } from "react";
import { CreateCommentApi } from "../Services/CommentContent.js";
import { AuthContext } from "../Context/AuthContext.jsx";
import SvgDropDown from "./SvgDropDown.jsx";

export default function PostCart({post , commentLimit }) {
  const { userData } = useContext(AuthContext)
  const [ commentContent , setCommentContent ] = useState('')
  const [loading , setLoading ] = useState(false)
  const [comments , setComments] = useState(post.comments.reverse())

  async function createComment (e){
    e.preventDefault()
    setLoading(true)
    
    const response = await CreateCommentApi(commentContent, post.id)
       
    if(response.message){
      setComments(response.comments)
      setCommentContent('')
    } 
    setLoading(false)
  }

  return (
    <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg overflow-hidden">
    
      {/* Dropdown Menu */}
      <div className="flex justify-end">
        {userData._id === post.user._id && 
        <>
        <SvgDropDown/>
        </>
        }
      </div>


      {/* Header */}
      <PostHeader photo={post.user.photo} name={post.user.name} date={post.createdAt}/>

      {/* Body */}
      <PostBody body={post.body} image={post.image}/>

      {/* Footer */}
      <PostFooter postId={post.id} commentsNumber={comments.length} />

      {/* Create Comment */}
      <form onSubmit={createComment} className='flex gap-2 m-1'>
        <Input 
          onChange={(e)=> setCommentContent(e.target.value)} 
          value={commentContent} 
          variant='bordered' 
          placeholder='comment...' 
        />
        <Button 
          isLoading={loading} 
          type='submit' 
          variant='ghost' 
          disabled={commentContent.length < 2} 
          color='danger' 
          className='font-bold'
        >
          Add
        </Button>
      </form>

      {/* Comments */}
      {comments.length > 0 && comments.slice(0, commentLimit).map((comment) =>
        <Comment postUserId={post.user._id} comment={comment} key={comment._id} />
      )}

    </div>
  )
}