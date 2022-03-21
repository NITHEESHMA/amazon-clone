import React from 'react';
import './Subtotal.css'
import {useSelector} from 'react-redux'
import CurrencyFormat from "react-currency-format"
import {useHistory} from 'react-router-dom'
import {getBasketTotal} from '../../utils/BasketToal'

const Subtotal = () => {
const {basket,user}=useSelector(state=>state.data);
let history=useHistory();


const handlecheckout=()=>{
    if(user){
history.push('/payment')

    }
    else{
        history.push('/login')
    }
}

    return (
        <div className='subtotal'>
            <CurrencyFormat renderText={(value)=>(

                <>
                
                <p>
                Subtotal({basket.length} item):<strong>{value}</strong>
                </p>
<small className='subtotal-gift'>
<input type='checkbox'/>
this orders contain a gift
</small>

                </>
            )}

            decimalScale={2} value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

            <button onClick={handlecheckout}>
            
            proceed to checkout
            </button>
        </div>
    );
};

export default Subtotal;