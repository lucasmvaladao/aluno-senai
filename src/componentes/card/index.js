import React from "react";
import user from '../../img/user.png'
import './card.css'

function Card (){
    return(
        <div className="container">
            <div className="sla">
            <h1>
                ALUNOS SENAI-SP
                <br/>
                INFORMAÇÕES CADASTRADAS
            </h1>
            <button className="adicionar"> ADICIONAR  <strong> + </strong> </button>
            </div>
            <section className="sessao">
                <ul className="lista">
                    <li>
                        <img src={ user } alt="imagem aluno"/>
                        <h2 className="nome"> ALUNO 01 </h2>
                        <button className="visu"> VISUALIZAR </button>
                        <button className="excluir"> EXCLUIR </button>
                    </li>

                    <li>
                        <img src={ user } alt="imagem aluno"/>
                        <h2 className="nome"> ALUNO 02 </h2>
                        <button className="visu"> VISUALIZAR </button>
                        <button className="excluir"> EXCLUIR </button>
                    </li>

                    <li>
                        <img src={ user } alt="imagem aluno"/>
                        <h2 className="nome"> ALUNO 03 </h2>
                        <button className="visu"> VISUALIZAR </button>
                        <button className="excluir"> EXCLUIR </button>
                    </li>

                    <li>
                        <img src={ user } alt="imagem aluno"/>
                        <h2 className="nome"> ALUNO 04 </h2>
                        <button className="visu"> VISUALIZAR </button>
                        <button className="excluir"> EXCLUIR </button>
                    </li>

                    <li>
                        <img src={ user } alt="imagem aluno"/>
                        <h2 className="nome"> ALUNO 05 </h2>
                        <button className="visu"> VISUALIZAR </button>
                        <button className="excluir"> EXCLUIR </button>
                    </li>

                    
                </ul>
            </section>
            <div className="rodape"></div>
        </div>
    )
}

export default Card;