
import React, { useContext } from 'react'
import PostHeader from './PostHeader.jsx'
import { AuthContext } from '../../Context/AuthContext.jsx'
import SvgDropDown from '../SvgDropDown.jsx'

export default function Comment({ comment, postUserId }) {


    const { userData } = useContext(AuthContext)


    return <>

        <div className="p-4 bg-gray-100 -mx-5 -mb-5 mt-4">

            <div className="block mb-4 items-start">
                {/*   PostHeader for comment */}
                <PostHeader
                    photo={comment.commentCreator?.photo}
                    name={comment.commentCreator?.name}
                    date={comment.createdAt}
                />
                {/* svg  */}

                <div className="flex justify-end">
                    {userData._id === comment.commentCreator._id && userData._id === postUserId &&
                        <SvgDropDown commentId={comment._id} />}
                </div>


                {/* comment content */}

                <p className=" mr-980 text-gray-800 text-sm mt-2 flex-1">
                    {comment.content}
                </p>
            </div>

        </div>

    </>
}
