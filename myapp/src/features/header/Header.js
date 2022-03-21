import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { logoutinitiate } from '../../redux/action';

const Header = () => {

        const {user,basket}=useSelector((state)=>state.data)
let dispatch=useDispatch();

const handleauth=()=>{
        if(user){
        dispatch(logoutinitiate());
        }
}

    return (
        <nav className='header'>
      <Link to='/'>
      
      <img src="https://tse4.mm.bing.net/th?id=OIP.WGxtnw81X7exO2PxiVlL9QHaEK&pid=Api&P=0&w=302&h=170" className="header-logo" alt="amazon logo"/>
      
      </Link>     
        <div className='header-option' style={{marginRight:"-10px"}}>
        
        <LocationOnOutlinedIcon/>
        </div>
        <div className='header-option'>
        <span className='header-option1'>Hello</span>
        <span className='header-option2'>Select Your Address</span>
        
        </div>

        <div className='search'>
        
        <select>
        <option>All</option>
        
        </select>
        <input type='text' className='searchinput'/>

        <SearchIcon className='searchicon'/>
</div>

<div className='header-nav'>
<Link to={`${user ? "/" : "/login"}`} className='header-link'>
<div onClick={handleauth} className='header-option'>
<span className='header-option1'>Hello,{user ? user.email : "guest"}{" "} </span>
        <span className='header-option2'>{user ? "signOut" : "signIn"}</span>

</div>
</Link>

<Link to='/orders' className='header-link'>
<div className='header-option'>
<span className='header-option1'>Returns</span>
        <span className='header-option2'>& orders</span>

</div>
</Link>


<Link to='/login' className='header-link'>
<div className='header-option'>
<span className='header-option1'>Your</span>
        <span className='header-option2'>prime</span>

</div>
</Link>


<Link to='/checkout' className='header-link'>
<div className='header-basket'>

<ShoppingCartOutlinedIcon/>
<span className='header-option2 basket-count'>{basket && basket.length}</span>

</div>
</Link>


</div>
        </nav>
    );
};

export default Header;