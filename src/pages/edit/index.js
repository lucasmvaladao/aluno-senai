import React from "react";
import axios from 'axios';
import EstruturaPagina from "../../componentes/EstruturaPagina";
import "../edit/style1.css"

 function Edit() {

  function POST(){
  
  

    let jsonArr = {
      "nome": document.getElementById('snome').value,
      "descricao": document.getElementById('sdescricao').value,
      "foto": document.getElementById('simg').value } 
      
      console.log(jsonArr)

      axios.post('https://api-fivedevs.onrender.com/', jsonArr)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }


   return (
        <EstruturaPagina>
          <section className="student">
            <div className="student_info">
              <input type="text" id="simg" placeholder="Arraste a foto" /><br /><br />
              <button> ADICIONAR CONTATO</button>
            </div>
            <div className="student_description">
              <label>Nome:</label>
              <input type="text" id="snome" />
              <label id="des">Descrição:</label>
              <input type="text" id="sdescricao" />
    
              <button onClick= { POST() } >ADICIONAR</button>
            </div>
          </section>
        </EstruturaPagina>
      );
      
    }
    
    export default Edit;


