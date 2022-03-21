import React from 'react';
import './Checkout.css'
import Banner5 from '../../Bannerimages/Banner5.jpg'
import { useSelector } from 'react-redux';
import Checkoutproduct from '../../features/checkoutproduct/Checkoutproduct';
import Subtotal from '../../features/subtottal/Subtotal';
const Checkout = () => {

const {basket,user}=useSelector(state=>state.data);

    return (
        <div className='checkout'>
        <div className='checkout-left'>
        <img className='checkout-ad'
        src={Banner5} alt=""
        />
        
      

<div>

<h3>Hello,{user?.email}</h3>
<h2 className='checkout-title'>

{basket.length===0 ? "your shopping basket is empty" :"your shopping basket"}
</h2>

{/* checkout product */}

{basket && basket.map((item)=>(
    <Checkoutproduct
    key={item.id}
    id={item.id}
    title={item.title}
    image={item.image}
    price={item.price}
    rating={item.rating}

    />
))}

</div>
</div>
<div className='checkout-right'>

{/* sub tottal*/}

<Subtotal/>

</div>

        </div>
    );
};

export default Checkout;