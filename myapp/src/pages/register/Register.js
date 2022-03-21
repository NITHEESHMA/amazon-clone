import React from 'react';
import './Register.css'
import { Link, useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';
import { registerinitiate } from '../../redux/action';


const Register = () => {

const [email,setemail]= useState("");

const [password,setpassword]= useState("");



const {user}=useSelector((state)=>state.data);
const history=useHistory();

//console.log("user=>",user);

useEffect(() => {

    if(user){
        history.push('/');
    }
   
}, [user,history]);


let dispatch=useDispatch();


const register=(e)=>{
    e.preventDefault();
    dispatch(registerinitiate(email,password))
setemail("");
setpassword("");
}

    return (
        <div className='register'>
        <Link to="/">
        
        <img src='https://tse4.mm.bing.net/th?id=OIP.q147_8-0-KUzdNrCSjVNvQHaHa&pid=Api&P=0&w=169&h=169' className='register-logo' alt='logo'/>
        
        </Link>

        <div className='register-container'>
        
        <h1>Create account</h1>
        <form>
        <h5>E-mail</h5>

        <input
        
        type='text'
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        />

        <input
        type='text'
        value={password}
onChange={(e)=>setpassword(e.target.value)}        
        
        
        />

        <button type='submit' onClick={register} className='continue'>continue</button>
        
        <div className='detail'>
        
        <p>Already have an Account ?</p>

        <Link to="/login" className='signIn-link'> 
        
        <p>Sign In</p>
        
        </Link>
        </div>
        </form>
        </div>
          
        </div>
    );
};

export default Register;