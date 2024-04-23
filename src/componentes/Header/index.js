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

            <div className="sla">
                <h1>
                    ALUNOS SENAI-SP
                    <br/>
                    INFORMAÇÕES CADASTRADAS
                </h1>
                <button className="adicionar"> ADICIONAR  <strong> + </strong> </button>
            </div>
            
        </header>
    );
}

export default Header;