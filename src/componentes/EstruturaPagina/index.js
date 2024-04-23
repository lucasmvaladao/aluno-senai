import React  from "react";
import Header   from '../Header';

function EstruturaPagina(props){
    return(
        <section>
            <Header />
                { props.children }
        </section>
    );
}

export default EstruturaPagina;