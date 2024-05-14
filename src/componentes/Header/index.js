import React from 'react';
// importando o link da biblioteca que mandará o usuário para outra página 
import { Link } from 'react-router-dom';
// importando a imagem do senai
import senai from '../../img/senai.svg'
// importando o css
import './header.css';


// só mais um estrutura normal de react com a renderização do header 

function Header(){
    return(
        <header>
            <div className='titulo'>
                <p> PROJETO CRIAÇÃO DE API </p>
            </div>

            <div className='espacoLogo'>
                {/* aqui o link vai fazer com que o usuário ao clicar na logo sempre volte para a página inicial */}
                    <Link to='/'> <img src= { senai } alt='senai logo'/>  </Link>
            </div>  
                
            <div className='linha'> </div>

            <div className="sla">
                <h1>
                    ALUNOS SENAI-SP
                    <br/>
                    INFORMAÇÕES CADASTRADAS
                </h1>

                {/* esse treco (Link vai te redirecionar pra outra página ) */}
                <Link to={`/Edit`}>
                <button className="adicionar"> ADICIONAR  <strong> + </strong> </button>
                </Link>
            </div>
            
        </header>
    );

    
}

export default Header;