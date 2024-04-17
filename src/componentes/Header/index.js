import React from "react";
import {Link} from "react-router-dom";
import "./estilo.css";

function Header(){
    return(
        <header>
            <div>
                <p>Projeto Criação de API</p>
                
           </div>
            <div>
           <Link className="topo" to="/">
            <img src="" alt="logoSenai"/>    
            </Link>
           </div>
        </header>
    )
};
export default Header;