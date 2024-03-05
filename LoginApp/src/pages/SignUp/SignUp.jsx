import React,{useState} from 'react'
import Input from '../../component/input/Input'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth';
import { auth } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import "./Style.scss"

function SignUp() {

    const [values,setvalues] = useState({
        name:"",
        email:"",
        pass:""

    });
    const naviagte = useNavigate();

    const [errorMsg,setErrorMsg] = useState("")
    const [submitButtonDisabled,setSubmitButtonDisabled]  = useState(false)
    const handleSubmission = ()=>{
        if(!values.name || !values.email || !values.pass){
            setErrorMsg("Fill all the Detaiks");
            return;
        }
        setErrorMsg("")
        console.log(values)

        setSubmitButtonDisabled(true)

        createUserWithEmailAndPassword(auth,values.email,values.pass).then(async(res)=>{
            console.log(res)
            setSubmitButtonDisabled(false)
            const user = res.user;
            await updateProfile(user,{
                displayName:values.name
            })
            naviagte("/")
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
        type= "text"
        placeholder = "Enter a name"
        label ="Name" 
        onChange={(event)=>setvalues((prev)=>({...prev,name: event.target.value}))} 
        
        required
    />
   </div>
   <div className='input-email'>
    <Input 
        type= "email"
        placeholder = "Enter a Email"
        label ="Name"
        onChange={(event)=>setvalues((prev)=>({...prev,email: event.target.value}))} 
        required
    />
   </div>
   <div className='input-paasword'>
     <Input 
     type= "password"
     placeholder ="Enter a Password"
     label= "Password"
     onChange={(event)=>setvalues((prev)=>({...prev, pass: event.target.value}))}
      />

   </div>
   <div><h1>{errorMsg}</h1></div>

   <div>
    <button onClick={()=>{handleSubmission()}
    }
    disabled={submitButtonDisabled}>SignUp</button>
    <p>Already have an account?
    <Link to="/SignIn">SignIn</Link> </p>
   </div>


</div>
</div>
  )
}

export default SignUp