import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout} from './store/authSlice'
import { Outlet } from 'react-router-dom'
import {Header, Footer} from "./components/index"


function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL) // App dependent access to environment variables
  // //          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  kabhi kabhi nhi load na ho to app crash ho jata hai---> isliye conf folder dekho

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
      authService.getCurrentUser()
      .then((userData) =>{
        if(userData){
          dispatch(login({userData})) // userData same as that in state of authSlice so chill hai
        }else{
          dispatch(logout())
        }
      })
      .catch()
      .finally(() => {setLoading(false)})
  }, [])

 //conditional rendering

  return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header />
      <main> {/* ab kuchh bhi display karna hai between header and footer toh do like this */}
        <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>
  ) : null
}

export default App
