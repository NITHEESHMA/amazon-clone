//import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react'
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/Home';
import Header from './features/header/Header';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
//import Product from './features/products/Product';
//import { Provider } from 'react-redux';
import {useDispatch} from 'react-redux'
import {auth} from './utils/firebase'
import { setuser } from './redux/action';
import Singleproduct from './pages/singleproduct/Singleproduct';
import Checkout from './pages/checkout/Checkout';
import Payment from './pages/payment/Payment';

function App() {

  let dispatch=useDispatch();


useEffect(() => {
  auth.onAuthStateChanged((authUser)=>{
if(authUser){
  dispatch(setuser(authUser));

}

else{
  dispatch(setuser(null));
}

  })
 
}, [dispatch]);

  return (

    <BrowserRouter>
    <div className="App">
    
   <Switch>

   <Route path="/login">
  <Login/>
   
   </Route>


   <Route path="/register">
   <Register/>
   </Route>

   <Route path="/payment">
   <Header/>
  <Payment/>
   </Route>


   <Route path="/checkout">
   <Header/>
  <Checkout/>
   </Route>

   <Route path="/product/:id">
   <Header/>
  <Singleproduct/>
   </Route>
   

   <Route path="/">
   <Header/>
   <Home/>
   </Route>
   
   </Switch>
     
    
    </div>
    </BrowserRouter>
  );
}

export default App;
