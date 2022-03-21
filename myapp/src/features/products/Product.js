import React from 'react';
import './Product.css'
import {Link} from 'react-router-dom'
//import star from 'emoji-picker-react'
//import FaStarIcon from "@material-ui/icons"
import { useDispatch } from 'react-redux';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { addtobasket } from '../../redux/action';


const Product = ({id,title,image,price,rating,specification,detail}) => {

const dispatch=useDispatch();

const addingitemtobasket=()=>{
    const item={
        id,image,title,price,rating,specification,detail
    };

    dispatch(addtobasket(item))
}

    return (
        <div className='product'>
        <div className='info'>
        <Link to={`/product/${id}`} className="title">
        
        <p>{title}</p>
        
        </Link>
        <p className='price'>
        
        <strong>$</strong>
        <strong>{price}</strong>
        </p>

        <div className='rating'>
        {Array(rating).fill().map((_,index)=> (<p key={index}>*</p>))}
        </div>
        </div>
        <img src={image} alt=""/>
        <button onClick={addingitemtobasket}>
        
        <i>
        <ShoppingCartOutlinedIcon/>
        </i>
        Add to basket
        </button>
       
            
        </div>
    );
};

export default Product;