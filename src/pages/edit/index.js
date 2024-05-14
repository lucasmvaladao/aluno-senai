import React from "react";
import axios from 'axios'; // importando o axios pra fazer requisições 
import { useState } from 'react'; // importando o useState pra tratar os dados da api
import EstruturaPagina from "../../componentes/EstruturaPagina";
import "../edit/edit.css"



 function Edit() { // esta é a função principal que terá a renderização da página


  // utilizando o hook use State 
  //para criar quatro estados no componente Edit. Cada estado representa um campo de entrada no formulário:
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [foto, setFoto] = useState('');
  const [contato, setContato] = useState('');
  //Cada useState retorna um par de valores: o primeiro valor (nome, descricao, foto e contato) que neste caso é o estado atual e o segundo valor (setNome, setDescricao, setFoto e setContato) que é uma função que permite atualizar esse estado.

  function POST(){ // esta função secundaria porém não menos importante executa o método post 
  
  
    //criando um objeto com 4 propiedades e declarando os valores das mesmas 
    //os valores delas são os mesmos declarados acima na  função edit()
    let jsonArr = {
      "nome": nome,
      "descricao": descricao,
      "foto": foto,
      "contato": contato
    }


    //fazendo tratativas 


    // se caso o usuário não adicione uma foto ao aluno este if define uma foto padrão em caso de       ausencia da foto do usuário 
    if(jsonArr.foto ===""){
      jsonArr.foto = "https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg"
    }


    //caso não seja adicionado uma descrição pelo usuário, é definida uma mensagem padrão 
    if(jsonArr.descricao===""){
      jsonArr.descricao = "Aluno do Senai"
    }


    //caso não seja adicionado um nome pelo usuário, eu obrigo o lazarento a colocar pelo menos um nome no usuário
    if(jsonArr.nome===""){
      alert("Nome obrigatório")
      return;
    }
      
      console.log(jsonArr) // verifica se as informações estão sendo guardadas


      axios.post('https://api-fivedevs.onrender.com/', jsonArr) // realiza uma requisição POST utilizando a biblioteca Axios.


      //aqui é caso a requisição funcione corretamente
    .then(response => { 
      console.log(response) // pra verificar a resposta 
      alert("Cadastrado com sucesso") // aquela mensagem pra avisar que deu bom e alegrar nosso dia 
      BackHome(); // e aproveita e ja manda o usuário de volta pra home pra visualizar o novo aluno visualizado, chamando uma função
    })

    //aqui é se algo der ruim 
    .catch(error => {
      console.log(error) //avisar no console que deu merda e diz que deu merda 
      alert("Erro ao cadastrar")// avisa pro usuário que deu merda
      BackHome(); // e depois manda ele de volta pra home chamando uma  funçãon 
    })
  }

  // essa função manda o usuário pra home novamente 
  function BackHome(){
    window.location.href = "/" // o barra que foi definido la em rotas que mandaria o usuáruio de volta
    //pra home
  }


  //renderizando a pagina de adiconar um novo usuário 
   return (
        <EstruturaPagina>
          <style>  {/* esse treco aqui sempre que está pagina em especifico for renderizada ele deixa invisivel um botão do header pra não confundir o usuário, pq tem um botão igual que será renderizado */}
          {`
          .adicionar{
             visibility: hidden; 
          }
        `}
          </style>
          <section className="edit_container">
            <div className="edit">


              <div className="edit_info">
                <input type="text" id="simg" placeholder="Insira o link da foto." value={foto} // O value aqui define o valor do campo de entrada como o estado foto atual, o valor do campo será sempre atualizado conforme o estado foto muda.

                  onChange={(e) => setFoto(e.target.value)} //Define uma função de retorno de chamada que é acionada sempre que o valor do campo é alterado. Quando o valor do campo muda, a função setFoto é chamada com o novo valor do campo de entrada, atualizando assim o estado foto.

                  // a mesma coisa acontece nos outros inputs respectivamente

                   />
                  <br/> <br/>
                {/* chamando a função post sempre que o ser apertar o botão */}
                <button onClick= { POST }  >ADICIONAR</button> 
              </div>




              
              <div className="edit_description">
                <label> Nome:</label>

                <input
                type="text" 
                id="snome"
                value={nome}
                onChange={(e) => setNome(e.target.value)} />


                <label id="des">Descrição:</label>
                <textarea rows="4" cols="50" 
                type="text" 
                id="sdescricao"
                value={descricao} 
                onChange={(e) => setDescricao(e.target.value)}/>

                <label> Adicionar contato: </label>
                <input 
                type="text"
                id="contato"
                value={contato}
                onChange={(e) => setContato(e.target.value)} />
                
             
              </div>
            </div>
          </section>
        </EstruturaPagina>
      );
      
    }
    
    export default Edit;


