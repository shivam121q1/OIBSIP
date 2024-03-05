// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../component/input/Input'
import "./stle.scss"
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../../firebase/config"


function SignIn(){
    const [values,setvalues] = useState({
        
        email:"",
        pass:""

    });
   const navigate = useNavigate();

    const [errorMsg,setErrorMsg] = useState("")
    const [submitButtonDisabled,setSubmitButtonDisabled]  = useState(false)
    const handleSubmission = ()=>{
        if(!values.email || !values.pass){
            setErrorMsg("Fill all the Detaiks");
            return;
        }
        setErrorMsg("")
        console.log(values)

        setSubmitButtonDisabled(true)

            signInWithEmailAndPassword(auth,values.email,values.pass).then(async(res)=>{
            console.log(res)
            setSubmitButtonDisabled(false)
            navigate("/")
        }).catch(err=>{
            setSubmitButtonDisabled(false)
            setErrorMsg(err.message)
            console.log(err)})

    }
    
  return (
    <div className='main'>
        <div className='Container'>
       <div className="heading">
        <h3>Login IN With Credentials</h3>
       </div>
       <div className='input-email'>
        <Input 
            type= "email"
            placeholder = "Enter a Email"
            
            label ="Email"
            onChange={(event)=>setvalues((prev)=>({...prev,email: event.target.value}))}
            required
        />
       </div>
       <div className='input-paasword'>
         <Input 
         type= "password"
         placeholder ="Enter a Password"
         label= "Password"
        
         onChange={(event)=>setvalues((prev)=>({...prev,pass: event.target.value}))} />

       </div>
       <div>
       <p>{errorMsg}</p>
        <button disabled={submitButtonDisabled} onClick={()=>{handleSubmission()}}>SignIn</button>
        <p>Dont have a account?
        <Link to="/SignUp">SignUp</Link> </p>
       </div>

    
    </div>
    </div>
  )
}


export default SignIn