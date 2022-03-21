import React from 'react';
import {useState,useEffect} from 'react'
import './Login.css'
import {useDispatch,useSelector} from 'react-redux'
import {Link,useHistory} from 'react-router-dom'
import {logininitiate} from '../../redux/action'



const Login = () => {
const [email,setemail]=useState("");
const [password,setpassword]=useState("");


const {user}=useSelector((state)=>state.data);

const dispatch=useDispatch();

let history=useHistory();
useEffect(() => {
   
    if(user){
        history.push("/");
    }


}, [user,dispatch]);



const signin=(e)=>{
e.preventDefault();
dispatch(logininitiate(email,password));

setemail("");
setpassword("");

}

    return (
        <div className='login'>
          <Link to='/'>
          <img src='https://tse4.mm.bing.net/th?id=OIP.q147_8-0-KUzdNrCSjVNvQHaHa&pid=Api&P=0&w=169&h=169' className='login-logo' alt='image'/>
          
          </Link>

          <div className='login-container'>
          
          <h1>sign in </h1>
          <form>
          <h5>E-mail</h5>
        
          <input type='text'
          value={email}
          onChange={(e)=>setemail(e.target.value)}/>

<h5>password</h5>
<input type='text'
value={password}

onChange={(e)=>setpassword(e.target.value)}/>

<button type='submit' onClick={signin} className="login-signIn">Sign IN </button>

</form>

<p>By continuing, you agree to Amazon's Conditions of Use and 
Privacy Notice.</p>

          </div>

          <p>new to amazon?</p>

          <Link to="/register">
          
          <button className='login-register'>Create your amazon account</button>
          </Link>
        </div>
    );
};

export default Login;