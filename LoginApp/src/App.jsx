import { useEffect, useState } from 'react'
import {BrowserRouter , Routes,Route} from "react-router-dom"
import SignIn from './pages/signIn/SignIn'
import Home from './pages/Home/Home'
import SignUp from './pages/SignUp/SignUp'
import { auth } from './firebase/config'

function App() {

  const [values,setvalues] = useState("")

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setvalues(user.displayName)
      }else{
        setvalues("")
      }
      console.log(user.displayName)
    })
    
  },[values])
  
    return (
      <div className='App'>
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home name={values}/>}  />
           <Route path='/SignIn' element={<SignIn />}  />
           <Route path='/SignUp' element={<SignUp />}  />
         </Routes>
       </BrowserRouter>
       
      </div>
    )
}

export default App
