import React from 'react';
import "./Payment.css"
import { useSelector,useDispatch } from 'react-redux';
import CurrencyFormat from 'react-currency-format'
import Checkoutproduct from '../../features/checkoutproduct/Checkoutproduct';
import { getBasketTotal } from '../../utils/BasketToal';

import { Link, useHistory } from 'react-router-dom';
import {db} from "../../utils/firebase"

const Payment = () => {
const {basket,user}=useSelector(state=>state.data)


const handlesubmit=(e)=>{
    e.preventDefault();
}

    return (
        <div className='payment'>
         <div className='payment-container'>
         <h1>checkout {<Link to="/checkout">{basket.length}</Link>}</h1>
         <div className='payment-section'>
         
         <div className='payment-title'>
         
         <h3>delivery address</h3>
         </div>

         <div className='payment-address'>
         
         <p>{user && user.email}</p>
         <p>Access layout B block </p>
         <p>bangalore,india</p>
         
         </div>
         
         </div>

         <div className='payment-section'>
         
         <div className='payment-title'>
         
         <h3>reviwe item and delivery</h3>
         
         </div>
         <div className='patment-items'>
         
         {basket && basket.map((item)=>(
             <Checkoutproduct
             
             id={item.id}
             title={item.title}
             image={item.image}
             price={item.price}
             rating={item.rating}
             
             />
         ))}
         </div>
         
         </div>

<div className='payment-section'>

<div className='payment-title'>

<h3>payment method</h3>
</div>

<div className='payment-details'>

<form onSubmit={handlesubmit}>

<div className='payment-priceContainer'>
<CurrencyFormat renderText={(value)=>(

    <>
    <h3>order total :{value}</h3>
   </>
)}

decimalScale={2} value={getBasketTotal(basket)}
displayType={"text"}
thousandSeparator={true}
prefix={"$"}
/>

<button>
<span>Buy now</span>
</button>
</div>

</form>

</div>
</div>

         </div>
        </div>
    );
};

export default Payment;