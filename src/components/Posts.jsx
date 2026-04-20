import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePost } from '../features/fetchSlice'
import Input from './Input'

const Posts = () => {
  const posts=useSelector((state)=>state.fetchData.posts)
  const dispatch=useDispatch();
         console.log(posts)
  return (
    <>
       <Input/>
     {
    posts.map((item,idx)=>(
      <div style={{display:"flex",justifyContent:"center",boxSizing:"border-box",border:"1px solid black",height:"150px",width:"700px",alignItems:"center",flexDirection:"column",gap:"10px"}} key={item.id}>
      <div id={idx} style={{height:"50px",width:"300px"}}>{item.title}</div>
      <Link to={`${item.id}`}>View Details</Link>
    <button onClick={()=>dispatch(deletePost(item.id))}>Delete Post</button>
      </div>
))
  }
  </>
  )
}

export default Posts