import React from "react";
import axios from 'axios'; // importando o axios pra fazer a requisição put
import { useState } from 'react'; //importando o useState pra tratar dados 
import EstruturaPagina from "../../componentes/EstruturaPagina";
import "./put.css"

 function Put() { // pode ter ficado confuso, mas essa é a função principal Put com p MAIUSCULO


  const informacoes = JSON.parse(localStorage.getItem('aluno1')) || []; //pega informações do localstoreage do navegador e as guarda dentro de uma variavel declarada no caso como informações 



  // Definir estados para os valores dos campos usando o hook useState(); do mesmo jeito feito na função post 
  //ele ja declara como uma string vazia todos os campoes que vierem vazios do localstorage
  const [nome, setNome] = useState(informacoes.nome || ''); 
  const [descricao, setDescricao] = useState(informacoes.descricao || '');
  const [foto, setFoto] = useState(informacoes.foto || '');
  const [contato, setContato] = useState(informacoes.contato || '');
  

  const newnome = (event) => {//newnome é a função  chamada quando o campo de entrada (input) do nome é alterado

    const value = event.target.value; //Ela extrai o valor digitado pelo usuário do evento (event.target.value).

    console.log('Value:', value); //Registra esse valor no console e, 

    setNome(value);// atualiza o estado nome com esse novo valor usando setNome(value).
  };


  const newfoto = (event) => { //newfoto é a função  chamada quando o campo de entrada (input) da foto é alterado

    const value = event.target.value;// Ela extrai o valor digitado pelo usuário do evento (event.target.value). 


    console.log('Value:', value);// registra esse valor no console

    setFoto(value);// atualiza o estado foto com esse novo valor usando setFoto(value).

  };



  const newDesc = (event) => { //newDesc é a função  chamada quando o campo de entrada (input) da descrição é alterado
    const value = event.target.value; //Ela extrai o valor digitado pelo usuário do evento (event.target.value). 
    console.log('Value:', value);//registra esse valor no console

    setDescricao(value); //atualiza o estado descricao com esse novo valor usando setDescricao(value).

  };



  const newcontato = ( event ) => { //newcontato é a função  chamada quando o campo de entrada (input) do contato é alterado

    const value = event.target.value;//Ela extrai o valor digitado pelo usuário do evento (event.target.value).

    console.log('Value:', value);//registra esse valor no console 

    setContato(value);//atualiza o estado contato com esse novo valor usando setContato(value).
  }
  
 

function put () { // função secundaria que executa a requisição put 




  //criando um objeto com 4 propiedades e declarando os valores das mesmas com os dados pegos do localstorage e declarados usando o useState
  let data = {
  nome : nome, 
  descricao: descricao, 
  foto: foto,
  contato: contato
 }




  axios.put(`https://api-fivedevs.onrender.com/${informacoes._id}/`, data) // realiza uma requisição PUT utilizando a biblioteca Axios com os valores do objeto declarado acima.


              //caso de bom 
            .then(response => {
              console.log(response.data);//registra no console 
              window.alert("Informações Alteradas com Sucesso")//SEU SONHO ESTÁ REALIZADO MENINO
              window.history.back();//MANDA O USUÁRIO PRA PAGNIA ANTERIOR, CHAMANDO UMA FUNÇÃO 
            }) 

            //Caso deu cu 
            .catch(error => {
              console.log(error); //registra no console que deu merda 
              window.alert("Infelizmente Não Foi Possível Alterar as Informações do Usuário")//e avisa que o bayern venceu o neymar, ou seja deu ruim 
              window.location.reload(); // atualiza a pagina 
            })
        }
        
   return ( // renderizando a página 
        <EstruturaPagina>
          <section className="put_container">
            <div className="put" >
              
              
                <div className="put_info" >
                  <img src={informacoes.foto} alt="foto" 
                  // passando a informação que deve ser imprimida na página
                  /> 
                    <input type="text" id="simg" placeholder="Altere o link da foto"
                     onChange={ newfoto } 
                     //caso o input sofra alguma alteração pelo usuário, o onchange vai automaticamente chamar uma função que atualizara o valor dos dados pegos
                     />
                    <br/><br />
                    <button onClick={ put } > SALVAR ALTERAÇÕES </button>
                    {/* chama a função que vai fazer a requisição put  */}
                  </div>
                  
                  <div className="put_description">
                      <label>Nome:</label>
                      <input
                        type="text"
                        id="snome"
                        // passando a informação que deve ser imprimida na página
                        defaultValue={ informacoes.nome }
                        
                        //caso o input sofra alguma alteração pelo usuário, o onchange vai automaticamente chamar uma função que atualizara o valor dos dados pegos
                        onChange={ newnome } />


                      <label id="des">Descrição:</label>
                      <textarea rows="4" cols="50"
                        type="text"
                        id="sdescricao"
                        // passando a informação que deve ser imprimida na página
                        defaultValue={informacoes.descricao}

                        //caso o input sofra alguma alteração pelo usuário, o onchange vai automaticamente chamar uma função que atualizara o valor dos dados pegos
                        onChange={ newDesc}
                        // onClick={ AltDesc } 
                        />

                    <label> Contato:</label>
                    <input
                    type="text"
                    id="scontato"
                    // passando a informação que deve ser imprimida na página
                    defaultValue={informacoes.contato}

                    //caso o input sofra alguma alteração pelo usuário, o onchange vai automaticamente chamar uma função que atualizara o valor dos dados pegos
                    onChange={ newcontato }
                    />

                      
                    </div>
          
          
            </div>
          </section>
        </EstruturaPagina>
      );
      
    }
    
    export default Put;