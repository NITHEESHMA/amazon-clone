import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../Data';
import './Singleproduct.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { useDispatch } from 'react-redux';
import { addtobasket } from '../../redux/action';

const Singleproduct = () => {

    let {id}=useParams();

let singleproduct=products.find((item)=>item.id===id);


let dispatch=useDispatch();

const additemtobasketsingle=()=>{
const item={
id:singleproduct.id,
rating:singleproduct.rating,
title:singleproduct.title,
price:singleproduct.price,
image:singleproduct.image,
specification:singleproduct.specification,
detail:singleproduct.detail


}

dispatch(addtobasket(item))
}


    return (
        <div className='singles-products-containers'>
            <img className='singles-products-ad' src="https://tse3.mm.bing.net/th?id=OIP.WYqHNwP-sxyIZOqlyFCJvwHaFT&pid=Api&P=0&w=250&h=179" alt=""/>

<div>


<div className='singles-products'>

<img src={singleproduct.image} className="singles-products-images" alt=""/>

<div className='singles-products-info'>
<div className='singles-products-title'>{singleproduct.title}</div>
<div className='singles-products-rating'>

{Array(singleproduct.rating).fill().map((_,index)=>(
    <p key={index}>*</p>
))}


</div>

<p className='singles-products-price'>

price:<strong>$</strong>
<strong>{singleproduct.price}</strong>
</p>

<div className='singles-products-specification'>

<h4>specification</h4>

{singleproduct.specification && singleproduct.specification.map((item,index)=>(
    <li key={index}>{item}</li>
))}
</div>


<div className='singles-products-description'>

<p>{singleproduct.detail}</p>
</div>

<button onClick={additemtobasketsingle}>

<i>
<ShoppingCartOutlinedIcon/>
</i>
Add To Basket

</button>

</div>


</div>

</div>


        </div>


        
        
    );
};

export default Singleproduct;