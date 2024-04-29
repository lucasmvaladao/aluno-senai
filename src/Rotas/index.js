import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import card  from '../pages/card';
import student from '../pages/student';
import Edit from "../pages/edit";


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/'        Component={card} />
                <Route exact path='/contato/:_id' Component={ student } />
                <Route exact path="/Edit"        Component={ Edit} />
            </Routes>    
        </BrowserRouter>
    );
}

export default Rotas;