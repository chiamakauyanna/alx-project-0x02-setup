import { PostProps } from '@/interfaces'
import React from 'react'

const PostCard:React.FC<PostProps> = ({title, content, userId}) => {
  return (
      <div className='bg-gray-300 mb-4 p-4 rounded'>
          <h2 className='font-bold text-lg mb-4'>{title}</h2>
          <p>{content}</p>
          <p>User ID: {userId}</p>
      </div>
  );
}

export default PostCard