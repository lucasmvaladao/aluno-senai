import React from "react";
import './card.css'

function Card (){
    return(
        <div className="container">
            <h1>
                ALUNOS SENAI-SP
                INFORMAÇÕES CADASTRADAS
            </h1>
            <button className="adicionar"> ADICIONAR  <stron> + </stron> </button>

            <section className="sessao">
                <ul className="lista">
                    <li> aluno 1 </li>

                    <li>aluno2</li>

                    <li>aluno3</li>

                    <li>aluno4</li>

                    <li>aluno5</li>
                </ul>
            </section>
        </div>
    )
}

export default Card;