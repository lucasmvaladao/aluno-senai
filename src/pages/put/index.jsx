import React from "react";
// import axios from 'axios';
import api from "../../services/api"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EstruturaPagina from "../../componentes/EstruturaPagina";
import "./put.css"

 function Put() {

  const { _id }  = useParams();

  const [infor, setinfo] = useState([]);

    //Antes da reinderização da página e executado o hook useEffect()
    useEffect(() => {
        async function usarInfo(){
            const resposta = await api.get(`https://api-fivedevs.onrender.com/${_id}`);
            setinfo(resposta.data);
        };

        usarInfo();
    }, );


    
      const minhaLista = localStorage.getItem('info');
      let Aluno = JSON.parse(minhaLista) || [];

      
      
      Aluno.push(infor);
      localStorage.setItem('info', JSON.stringify(Aluno));

   return (
        <EstruturaPagina>
          <section className="student">
            <div className="student_info">
              <input
               type="text"
                id="simg"
                placeholder="Arraste a foto"
                defaultValue={ infor.foto}
                 />
                 <br /><br />
              <button> ADICIONAR CONTATO</button>
            </div>
            <div className="student_description">
              <label>Nome:</label>

              <input
               type="text" 
               id="snome"
               defaultValue={ infor.nome}
                />


              <label id="des">Descrição:</label>
              <input 
              type="text" 
              id="sdescricao"
              defaultValue={ infor.descricao}
              />
    
              <button > SALVAR ALTERAÇÕES </button>
            </div>
          </section>
        </EstruturaPagina>
      );
      
    }
    
    export default Put;