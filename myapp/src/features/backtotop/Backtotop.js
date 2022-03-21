import React from 'react';
import { useState,useEffect } from 'react';

import './Backtotop.css'

const Backtotop = () => {
const [isvisible,setisvisible]=useState(false);


const togglevisibility=()=>{
    if(window.pageYOffset>900){
        setisvisible(true);
    }

    else{
        setisvisible(false);
    }
};

const scroltotop=()=>{
    window.scrollTo({


        top: 0,
        behavior:"smooth"
    });
};


useEffect(() => {
    window.addEventListener("scroll",togglevisibility);
    return () => {
        window.removeEventListener("scroll",togglevisibility);
    };
}, []);

    return (
        <div className='scoll-to-top'>

        {isvisible && (
            <div className='back-top-container' onClick={scroltotop}>

            </div>
        )}
            
        </div>
    );
};

export default Backtotop;