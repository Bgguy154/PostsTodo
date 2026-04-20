import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { deletePost } from '../features/fetchSlice';

const Post = () => {
    const items=useSelector((state)=>state.fetchData.posts);
    const dispatch=useDispatch();

    const {id}=useParams();
    const post=items.find((p)=>p.id===Number(id))
    console.log(post.title)
  return (
    <>
    <div>{post.title}</div>
    <div>{post.body}</div>
    </>
  )
}

export default Post