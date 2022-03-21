export const getBasketTotal=(basket)=>
basket.reduce((amout,item)=>item.price+amout,0)