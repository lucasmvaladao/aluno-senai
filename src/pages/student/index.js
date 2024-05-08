import React from "react";
import api from "../../services/api"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EstruturaPagina from "../../componentes/EstruturaPagina";
import "./student.css";

function Student() {

  const { _id }  = useParams();

  const [info, setinfo] = useState([]);

    //Antes da reinderização da página e executado o hook useEffect()
    useEffect(() => {
        async function usarInfo(){
            const resposta = await api.get(`https://api-fivedevs.onrender.com/${_id}`);
            setinfo(resposta.data);
            localStorage.setItem('aluno1', JSON.stringify(resposta.data));
        };

        usarInfo();
    }, );


    
      const minhaLista = localStorage.getItem('infos');
      let Aluno = JSON.parse(minhaLista) || [];

      
      
      Aluno.push(info);
      localStorage.setItem('infos', JSON.stringify(Aluno));

      

      


  return (
    <EstruturaPagina>
      <section className="student">
                        <article key={info._id}>
                        <div className="student_info">
                        <div className="imagem">
                        <img src={ info.foto } alt="imagem aluno"/>
                        </div>
                        <Link to={info.contato} target="blank">
                        <button >
                          CONTATO
                        </button>
                        </Link>
                        </div>
                        <div className="student_description">
                        <h2 className="nome"> {info.nome} </h2>
                        <p> {info.descricao}</p>
                        <Link to={`/put/${info._id}`} >
                        <button >EDITAR</button>
                        </Link>
                        </div>
                        </article>
      </section>
        <div className="footer"> </div>

    </EstruturaPagina>
  );

  
  }


export default Student;
