import React from "react";
//importando o browserrouter, routes e o route para definir as rotas de redirecionamento do site 
import { BrowserRouter, Routes, Route } from "react-router-dom";
//importando as páginas do site 
import card  from '../pages/card';
import student from '../pages/student';
import Edit from "../pages/edit";
import Put from "../pages/put";


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                {/* definindo as rotas de redirecionamento do site */}
                <Route exact path='/'        Component={card} />
                {/* '/' manda o usuário para a pagina card  */}
                <Route exact path='/contato/:_id' Component={ student } />
                {/* '/contato/:_id' manda o usuário para a pagina student  */}
                <Route exact path="/Edit"        Component={ Edit} />
                {/* '/Edit' manda o usuário para a pagina Edit */}
                <Route exact path='/put/:id'         Component={ Put }/>
                {/* '/put/:id' manda o usuário para a pagina put  */}
            </Routes>    
        </BrowserRouter>
    );
}

export default Rotas;