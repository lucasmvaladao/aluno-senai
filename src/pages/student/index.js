import React from "react";
import teste from '../../img/teste.jpg';
import EstruturaPagina from "../../componentes/EstruturaPagina";
import "./student.css";

function student() {
  return (
    <EstruturaPagina>
      <section className="student">
        <div className="student_info">
          <div className="imagem">
           <img src={ teste } alt="aluno1"></img>
          </div>
          <button onclick="contatoAlunos()" href="https://www.linkedin.com/in/kamila-cavalcante-45540915a/">CONTATO</button>
        </div>
        <div className="student_description">
          <h1>Kamila Cavalcante</h1>
          <p>
            tem 26 anos e atualmente estudante de Desenvolvimento de Sistemas no
            Senai Suiço Brasileira. Reside em São Paulo, na Zona Leste.
            Contribuiu para o criação do projeto "Criando API", sob a função de
            (função). Projeto ministrado pelo professor Átila durante as aulas
            de PWFE - 2º Semestre / 2024.
          </p>
          <button onclick="editarAlunos()">EDITAR</button>
          </div>

          
      </section>
        <div className="footer"> </div>

    </EstruturaPagina>
  );
}

export default student;
