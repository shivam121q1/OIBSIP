import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"

function Home(props) {
  return (
    <div className='main-page'> 
      <div className='heading-link'>
        <h1>
          <Link to="/SignIn">SignIn</Link>

        </h1>
        <br />
        <h1>
         <Link to="/SignUp">SignUp</Link>
        </h1>
      </div>
      <br></br>
    <br />
    <h2>{props.name ? `Welcome - ${props.name}`: `Login Please`}</h2>
       
    </div>
  )
}

export default Home
