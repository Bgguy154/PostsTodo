import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route ,Routes, useNavigate} from 'react-router-dom'
import Post from './components/Post'
import Posts from './components/Posts'
import { useDispatch, useSelector } from 'react-redux'
import { displayPosts } from './features/fetchSlice'
import Input from './components/Input'

function App() {
  const [posts,setPosts]=useState([]);
  const items=useSelector((state)=>state.fetchData.posts);
  const dispatch=useDispatch();
  

  useEffect(()=>{
    async function fetchPosts() {
       const res=await fetch("https://jsonplaceholder.typicode.com/posts");
       const fetchedPosts=await res.json();
       setPosts(fetchedPosts)
       dispatch(displayPosts(fetchedPosts))
    }
    fetchPosts()
  },[])
  // console.log(posts)
 return(
  <>

   
   <Routes>
    <Route path='/' element={<Posts/>}/>
    <Route path='/:id' element={<Post/>}/>
   </Routes>

  </>
 )
}

export default App
