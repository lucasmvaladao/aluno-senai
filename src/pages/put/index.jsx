import React from "react";
import axios from 'axios';
import { useState } from 'react';
import EstruturaPagina from "../../componentes/EstruturaPagina";
import "./put.css"

 function Put() {


  const informacoes = JSON.parse(localStorage.getItem('aluno1')) || [];



  // Definir estados para os valores dos campos
  const [nome, setNome] = useState(informacoes.nome || '');
  const [descricao, setDescricao] = useState(informacoes.descricao || '');
  const [foto, setFoto] = useState(informacoes.foto || '');
  const [contato, setContato] = useState(informacoes.contato || '');
  

  const newnome = (event) => { 

    const value = event.target.value;

    console.log('Value:', value);

    setNome(value);
  };
  const newfoto = (event) => {
    const value = event.target.value;

    console.log('Value:', value);

    setFoto(value);
  };
  const newDesc = (event) => {
    const value = event.target.value;

    console.log('Value:', value);

    setDescricao(value);
  };
  const newcontato = ( event ) => {
    const value = event.target.value;

    console.log('Value:', value);

    setContato(value);
  }
  
 

function put () {


  let data = {
  nome : nome, 
  descricao: descricao, 
  foto: foto,
  contato: contato
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
          <section className="put_container">
            <div className="put" >
              
              
                <div className="put_info" >
                  <img src={informacoes.foto} alt="foto"/>
                    <input type="text" id="simg" placeholder="Altere o link da foto" onChange={ newfoto }/>
                    <br/><br />
                    <button onClick={ put }> SALVAR ALTERAÇÕES </button>
                  </div>
                  
                  <div className="put_description">
                      <label>Nome:</label>
                      <input
                        type="text"
                        id="snome"
                        // onClick={ Altnome }
                        defaultValue={ informacoes.nome }
                        onChange={ newnome } />


                      <label id="des">Descrição:</label>
                      <input
                        type="text"
                        id="sdescricao"
                        defaultValue={informacoes.descricao}
                        onChange={ newDesc}
                        // onClick={ AltDesc } 
                        />

                    <label> Contato:</label>
                    <input
                    type="text"
                    id="scontato"
                    defaultValue={informacoes.contato}
                    onChange={ newcontato }
                    />

                      
                    </div>
          
          
            </div>
          </section>
        </EstruturaPagina>
      );
      
    }
    
    export default Put;