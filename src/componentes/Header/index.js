import React from 'react';
import senai from '../../img/senai.svg'
import './header.css';

function Header(){
    return(
        <header>
            <div className='titulo'>
                <p> PROJETO CRIAÇÃO DE API </p>
            </div>

            <div className='espacoLogo'>
                <img src= { senai } alt='senai logo'/>
            </div>  
                
            <div className='linha'> </div>
        </header>
    );
}

export default Header;