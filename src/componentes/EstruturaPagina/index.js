import React  from "react";
import Header   from '../Header';
//importando o elemento header criado na pasta header

// a função estrutura pagina define a estrutura que a página terá 
// no caso o header será um elemento que aparecerá em todas as partes do site 
//logo ele aparece em cima de {props.children} sendo o elemento pai 
function EstruturaPagina(props){
    return(
        <section>
            <Header />
                { props.children }
        </section>
    );
}

export default EstruturaPagina;