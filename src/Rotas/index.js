import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import card  from '../pages/card';
import student from '../pages/student';


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/'        Component={card} />
                <Route exact path='/contato/:_id' Component={ student } />
            </Routes>    
        </BrowserRouter>
    );
}

export default Rotas;