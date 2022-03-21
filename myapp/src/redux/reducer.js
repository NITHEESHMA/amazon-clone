import * as actionTypes from './actionType'


const initialstate={
   
    loading:false,
    basket:[],
    user:null,
    error:null,
}

const shopreducer=(state=initialstate,action)=>{
    switch(action.type){
case actionTypes.REGISTER_START:
    return{
...state,
loading:true,
    }

    case actionTypes.REGISTER_SUCCESS:
    return{
...state,
loading:false,
user:action.payload,
    }


    case actionTypes.REGISTER_FAIL:
    return{
...state,
loading:false,
error:action.payload,
    }

  
//-------------------------------------------------




    case actionTypes.LOGIN_START:
        return{
    ...state,
    loading:true,
        }
    
        case actionTypes.LOGIN_SUCCESS:
        return{
    ...state,
    loading:false,
    user:action.payload,
        }
    
    
        case actionTypes.LOGIN_FAIL:
        return{
    ...state,
    loading:false,
    error:action.payload,
        }
//-------------------------------------------------
        case actionTypes.SET_USER:
            return{
                ...state,user:action.payload,
            };
    


//--------------------------------------------------



case actionTypes.LOGOUT_START:
        return{
    ...state,
    loading:true,
        }
    
        case actionTypes.LOGOUT_SUCCESS:
        return{
    ...state,
    loading:false,
    user:null,
        }
    
    
        case actionTypes.LOGOUT_FAIL:
        return{
    ...state,
    loading:false,
    error:action.payload,
        }

    //========================================

    case actionTypes.ADD_TO_BASKET:
      
   
            const newbasket=[...state.basket,action.payload];
            return{
...state,
basket:newbasket,

        }



        //--------------------------------------

        case actionTypes.REMOVE_FROM_BASKET:
      
   
            let newBasket=[...state.basket];
            const index=state.basket.findIndex(
                (item)=>item.id===action.payload)
            
            if(index>0){
                newBasket.splice(index,1);
            }
            return{
         ...state,
            basket:newBasket,

        }

    

    default:return state;


    }
}







export default shopreducer;