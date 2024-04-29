import React from "react";
import api from "../../services/api"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import user from '../../img/senai.svg'
import EstruturaPagina from "../../componentes/EstruturaPagina";
import './card.css'


function Card (){


    //declarar uma variavel de estado para a lista de filmes
    const [infos, setinfo] = useState([]);

    //Antes da reinderização da página e executado o hook useEffect()
    useEffect(() => {
        async function usarInfo(){
            const resposta = await api.get('https://api-fivedevs.onrender.com/');
            setinfo(resposta.data);
        };

        usarInfo();
    }, []);
    return(
        <EstruturaPagina>
        <div className="container">
            
            <section className="sessao">
                <ul className="lista">
                    
                    {infos.map((inf) => {
                    return(
                        <article key={inf._id}>
                        <li>
                        <img src={ inf.foto } alt="imagem aluno"/>
                        <h2 className="nome"> {inf.nome} </h2>
                        <Link to={`/contato/${inf._id}`} className="link"><button className="visu"> VISUALIZAR </button> </Link>
                        <button className="excluir"> EXCLUIR </button>
                        </li>
                        </article>
                    )
                })}
                       
                        


                        

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