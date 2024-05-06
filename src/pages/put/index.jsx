import React from "react";
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import EstruturaPagina from "../../componentes/EstruturaPagina";
import "./put.css"

 function Put() {

  const { _id }  = useParams();

  const informacoes = JSON.parse(localStorage.getItem('aluno1')) || [];

  // Definir estados para os valores dos campos
  const [nome, setNome] = useState(informacoes.nome || '');
  const [descricao, setDescricao] = useState(informacoes.descricao || '');
  const [foto, setFoto] = useState(informacoes.foto || '');


console.log(nome)
console.log(descricao)
console.log(foto)

 

function put () {


  let data = {
  nome : nome,
  descricao: descricao,
  foto: foto
 }



  axios.put(`https://api-fivedevs.onrender.com/${informacoes._id}/`, data)
            .then(response => {
              console.log(response.data);
              
            }) 
            .catch(error => {
              console.log(error);
              window.alert("DEU RUIM ")
            })
        }
        
   return (
        <EstruturaPagina>
          <section className="student" >
                <article>
            <div className="student_info" >
              <img src={informacoes.foto} alt="foto"/>
                <input
                  type="text"
                  id="simg"
                  placeholder="Arraste a foto" />
                <br/><br />
                <button> ADICIONAR CONTATO</button>
              </div>
              
              <div className="student_description">
                  <label>Nome:</label>
                  <input
                    type="text"
                    id="snome"
                    // onClick={ Altnome }
                    defaultValue={ informacoes.nome } />


                  <label id="des">Descrição:</label>
                  <input
                    type="text"
                    id="sdescricao"
                    defaultValue={informacoes.descricao}
                    // onClick={ AltDesc } 
                    />

                  <button onClick={ put }> SALVAR ALTERAÇÕES </button>
                </div>
                </article>
          </section>
        </EstruturaPagina>
      );
      
    }
    
    export default Put;