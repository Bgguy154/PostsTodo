import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../features/fetchSlice';

const Input = () => {
    const [newPost,setNewPost]=useState({title:"",body:""});
    const posts=useSelector((state)=>state.fetchData.posts);
    const len=posts.length;
    const dispatch=useDispatch();

    const handleAdd=()=>{
        dispatch(addPost({userId:len+1,id:len+1,title:newPost.title,body:newPost.body}))
    }
  return (
    <>
     <div style={{height:"100px",width:"200px"}}>
        <label>
            <input type='text' onChange={(e)=>setNewPost({...newPost,title:e.target.value})}/>
            Title
            <input type='text' onChange={(e)=>setNewPost({...newPost,body:e.target.value})}/>
            Body
        </label>
        <button onClick={handleAdd}>Add Post</button>
     </div>
    </>
  )
}

export default Input