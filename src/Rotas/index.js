import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import card  from '../pages/card';
import student from '../pages/student';
import Edit from "../pages/edit";
import Put from "../pages/put";


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/'        Component={card} />
                <Route exact path='/contato/:_id' Component={ student } />
                <Route exact path="/Edit"        Component={ Edit} />
                <Route exact path='/put/:id'         Component={ Put }/>
            </Routes>    
        </BrowserRouter>
    );
}

export default Rotas;