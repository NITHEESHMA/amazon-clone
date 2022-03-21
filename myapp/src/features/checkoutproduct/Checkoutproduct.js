import React from 'react';
import './Checkoutproduct.css'
import { useDispatch } from 'react-redux';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { removefrombasket } from '../../redux/action';
const Checkoutproduct = ({id,title,image,rating,price}) => {
let dispatch=useDispatch();


const removeitemfrombasket=()=>{
    dispatch(removefrombasket(id));
}


    return (
        <div className='checkout-product'>
            
    <img src={image} alt="" className='checkout-product-image'/>
    <div className='checkout-product-info'>
    <p className='checkout-product-title'>{title}</p>
    <p className='checkout-product-price'>
    <strong>$</strong>
    <strong>{price}</strong>
    </p>

    <div className='checkout-product-rating'>
    {Array(rating).fill().map((_,index)=>(
        <p key={index}>*</p>
    ))}
    </div>    

    <button onClick={removeitemfrombasket}>
    <i>
    <ShoppingCartOutlinedIcon/>
    </i>
    Remove from basket
    </button>
    </div>
    
    </div>
    );
};

export default Checkoutproduct;