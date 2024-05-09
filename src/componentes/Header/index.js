import React from 'react';
import { Link } from 'react-router-dom';
import senai from '../../img/senai.svg'
import './header.css';

function Header(){
    return(
        <header>
            <div className='titulo'>
                <p> PROJETO CRIAÇÃO DE API </p>
            </div>

            <div className='espacoLogo'>
                    <Link to='/'> <img src= { senai } alt='senai logo'/>  </Link>
            </div>  
                
            <div className='linha'> </div>

            <div className="sla">
                <h1>
                    ALUNOS SENAI-SP
                    <br/>
                    INFORMAÇÕES CADASTRADAS
                </h1>
                <Link to={`/Edit`}>
                <button className="adicionar"> ADICIONAR  <strong> + </strong> </button>
                </Link>
            </div>
            
        </header>
    );

    
}

export default Header;