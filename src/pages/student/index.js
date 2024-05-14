import React from "react"; // c é noob é ? sabe oq é isso aqui nn?
import api from "../../services/api" //importando a api
import { useState, useEffect } from 'react';  // importando o useState e o useEffect pra tratar os dados da api
import { useParams } from 'react-router-dom';//o useParams fornece acesso aos parâmetros da URL definidos em rotas correspondentes
import { Link } from 'react-router-dom'; //importando o Link do react-router-dom para fazer a navegação entre as páginas
import EstruturaPagina from "../../componentes/EstruturaPagina";//importando o componente EstruturaPagina para renderizar a pagina na estrutura correta 
import "./student.css"; // me recuso a explicar o que eu to importando aqui 

function Student() {//função principal

  const { _id }  = useParams();//extrair o parâmetro _id da URL. E o atribuindo à variável _id.

  const [info, setinfo] = useState([]);//Aqui, info é o estado que armazenará os dados  setinfo é a função que será usada para atualizar o estado info. Inicialmente, o estado info é definido como um array vazio [].

    //Antes da reinderização da página e executado o hook useEffect()
    useEffect(() => {
        async function usarInfo(){ //fazendo a requisição da api GET 
            const resposta = await api.get(`https://api-fivedevs.onrender.com/${_id}`);//óia ´só o id sendo usado aqui hehe
            setinfo(resposta.data);//Guardando informações do id requisitado
            localStorage.setItem('aluno1', JSON.stringify(resposta.data)); //e botando esses caras no localstorage
        };

        usarInfo(); //chamando a função 
    }, );


    
      const minhaLista = localStorage.getItem('infos'); //: Recupera os dados armazenados no armazenamento local do navegador com a chave 'infos'.

      let Aluno = JSON.parse(minhaLista) || [];//Converte os dados obtidos do armazenamento local (que estão em formato JSON) de volta para um objeto JavaScript. Se não houver dados armazenados, inicializa Aluno como um array vazio [].

      
      
      Aluno.push(info);// Adiciona o valor de info ao array Aluno

      localStorage.setItem('infos', JSON.stringify(Aluno));//Atualiza os dados armazenados no armazenamento local com a chave 'infos', convertendo o array Aluno em uma string JSON e armazenando-a no armazenamento local. Isso garante que as informações atualizadas do aluno sejam persistentes entre as sessões do navegador.

      

      


  return (// renderizando as informações pegas pelo metodo get na página 
    <EstruturaPagina>
      <section className="student_container">
     
          <article className="student" key={info._id}>
           
            
            <div className="student_description">
              <div className="imagem">
                  <img src={ info.foto } alt="imagem aluno"/>
              </div>
              <div className="student_description_names">
                <h1> {info.nome} </h1>
                <p> {info.descricao}</p>
              </div>
            </div>

            <div className="student_info">
              
              
                {info.contato === "" &&
                <p>Contato não informado pelo Aluno</p>  
                }

                {info.contato !== "" &&
                <Link to={info.contato} target="blank"  > 
                {/* redireciona o usuário para o site definido pelo usuário */}
                <button>CONTATO</button>
                </Link>
                }

                {<Link to={`/put/${info._id}`} >
                  {/* redireciona o usuário para a página de edição */}
                    <button >EDITAR</button>
                  </Link>
                }
            

            </div>  
          </article>
      </section>
    </EstruturaPagina>
  );

  
  }


export default Student;
