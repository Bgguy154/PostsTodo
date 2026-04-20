import React, { useState } from 'react'   // ✅ added useState
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePost, editPost } from '../features/fetchSlice'  // ✅ added editPost
import Input from './Input'

const Posts = () => {
  const posts=useSelector((state)=>state.fetchData.posts)
  const dispatch=useDispatch();

  // ✅ added state
  const [editId,setEditId]=useState(null)
  const [editText,setEditText]=useState("")

  return (
    <>
      <Input/>

      {
        posts.map((item,idx)=>(
          <div
            key={item.id}
            style={{
              display:"flex",
              justifyContent:"center",
              border:"1px solid black",
              height:"150px",
              width:"700px",
              alignItems:"center",
              flexDirection:"column",
              gap:"10px"
            }}
          >

            {/* ✅ small conditional change */}
            {editId === item.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e)=>setEditText(e.target.value)}
                />
                <button onClick={()=>{
                  dispatch(editPost({id:item.id,title:editText}))
                  setEditId(null)
                }}>
                  Save
                </button>
              </>
            ) : (
              <>
                <div>{item.title}</div>
                <button onClick={()=>{
                  setEditId(item.id)
                  setEditText(item.title)
                }}>
                  Edit
                </button>
              </>
            )}

            <Link to={`${item.id}`}>View Details</Link>

            <button onClick={()=>dispatch(deletePost(item.id))}>
              Delete Post
            </button>

          </div>
        ))
      }
    </>
  )
}

export default Posts