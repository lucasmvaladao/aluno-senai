import React from "react";
import senai from "../../img/senai.svg";
import header from "../header/index";
import main from "../main/index";

import EstruturaPagina from "../../componentes/EstruturaPagina";
import "../edit/style1.css"

 function Edit() {
   return (

        <EstruturaPagina>
          <section className="student">
            <div className="student_info">
              <input type="text" id="simg" placeholder="Arraste a foto" /><br /><br />
              <button onClick={contatoAlunos}>CONTATO</button>
            </div>
            <div className="student_description">
              <label>Nome:</label>
              <input type="text" id="snome" />
              <label id="des">Descrição:</label>
              <input type="text" id="sdescricao" />
    
              <button onClick={editarAlunos}>ADICIONAR</button>
            </div>
          </section>
        </EstruturaPagina>
      );
    }
    
    export default Edit;


