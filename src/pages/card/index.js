import React from "react";
import { Link } from 'react-router-dom';
import user from '../../img/senai.svg'
import EstruturaPagina from "../../componentes/EstruturaPagina";
import './card.css'

function Card (){
    return(
        <EstruturaPagina>
        <div className="container">
            
            <section className="sessao">
                <ul className="lista">
                    <li>
                        <img src={ user } alt="imagem aluno"/>
                        <h2 className="nome"> ALUNO 01 </h2>


                        <Link to='/contato' className="link">
                        <button className="visu"> VISUALIZAR </button>
                        </Link>
                        

                        <button className="excluir"> EXCLUIR </button>
                    </li>

                    <li>
                        <img src={ user } alt="imagem aluno"/>
                        <h2 className="nome"> ALUNO 02 </h2>


                        <Link to='/contato' className="link">
                        <button className="visu"> VISUALIZAR </button>
                        </Link>


                        <button className="excluir"> EXCLUIR </button>
                    </li>

                    <li>
                        <img src={ user } alt="imagem aluno"/>
                        <h2 className="nome"> ALUNO 03 </h2>


                        <Link to='/contato' className="link">
                        <button className="visu"> VISUALIZAR </button>
                        </Link>


                        <button className="excluir"> EXCLUIR </button>
                    </li>

                    <li>
                        <img src={ user } alt="imagem aluno"/>
                        <h2 className="nome"> ALUNO 04 </h2>


                        <Link to='/contato' className="link">
                        <button className="visu"> VISUALIZAR </button>
                        </Link>


                        <button className="excluir"> EXCLUIR </button>
                    </li>

                    <li>
                        <img src={ user } alt="imagem aluno"/>
                        <h2 className="nome"> ALUNO 05 </h2>


                        <Link to='/contato' className="link">
                        <button className="visu"> VISUALIZAR </button>
                        </Link>


                        <button className="excluir"> EXCLUIR </button>
                    </li>

                    
                </ul>
            </section>

            <div className="footer"></div>
           
        </div>
         </EstruturaPagina>
    )
}

export default Card;