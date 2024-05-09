import React from "react";
import axios from 'axios';
import { useState } from 'react';
import EstruturaPagina from "../../componentes/EstruturaPagina";
import "../edit/edit.css"

 function Edit() {


  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [foto, setFoto] = useState('');
  const [contato, setContato] = useState('');

  function POST(){
  
  

    let jsonArr = {
      "nome": nome,
      "descricao": descricao,
      "foto": foto,
      "contato": contato
      
    }

    if(jsonArr.foto ===""){
      jsonArr.foto = "https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg"
    }
    if(jsonArr.descricao===""){
      jsonArr.descricao = "Aluno do Senai"
    }
    if(jsonArr.nome===""){
      alert("Nome obrigatório")
      return;
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
          <section className="edit_container">
            <div className="edit">


              <div className="edit_info">
                <input type="text" id="simg" placeholder="Insira o link da foto." value={foto}
                  onChange={(e) => setFoto(e.target.value)} />
                  <br/> <br/>

                <button onClick= { POST } >ADICIONAR</button>
              </div>




              
              <div className="edit_description">
                <label> Nome:</label>

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

                <label> Adicionar contato: </label>
                <input 
                type="text"
                id="contato"
                value={contato}
                onChange={(e) => setContato(e.target.value)} />
                
             
              </div>
            </div>
          </section>
        </EstruturaPagina>
      );
      
    }
    
    export default Edit;


