import React from "react";
import axios from 'axios';
import { useState } from 'react';
import EstruturaPagina from "../../componentes/EstruturaPagina";
import "../edit/style1.css"

 function Edit() {


  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [foto, setFoto] = useState('');

  function POST(){
  
  

    let jsonArr = {
      "nome": nome,
      "descricao": descricao,
      "foto": foto
    }
      
      console.log(jsonArr)

      axios.post('https://api-fivedevs.onrender.com/', jsonArr)
    .then(response => {
      console.log(response)
      alert("Cadastrado com sucesso")
    })
    .catch(error => {
      console.log(error)
      alert("Erro ao cadastrar")
    })
  }


   return (
        <EstruturaPagina>
          <section className="student">
            <div className="student_info">
              <input
               type="text"
                id="simg"
                placeholder="Arraste a foto"
                value={foto}
                onChange={(e) => setFoto(e.target.value)} />
                 <br /><br />
              <button> ADICIONAR CONTATO</button>
            </div>
            <div className="student_description">
              <label>Nome:</label>

              <input
               type="text" 
               id="snome"
               value={nome}
               onChange={(e) => setNome(e.target.value)} />


              <label id="des">Descrição:</label>
              <input 
              type="text" 
              id="sdescricao"
              value={descricao} 
              onChange={(e) => setDescricao(e.target.value)}/>
    
              <button onClick= { POST } >ADICIONAR</button>
            </div>
          </section>
        </EstruturaPagina>
      );
      
    }
    
    export default Edit;


