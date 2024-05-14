import React from "react";
//importando o axios pra fazer requisições de get post put e delete na api 
import axios from 'axios';
//importando a api
import api from "../../services/api"
// importando o useState e useEffect que farão as requisições em react 
import { useState, useEffect } from 'react';
//importando o Link do react-router-dom para fazer a navegação entre as páginas
import { Link } from 'react-router-dom';
//importando o componente EstruturaPagina para renderizar a pagina na estrutura correta 
import EstruturaPagina from "../../componentes/EstruturaPagina";
//importando o css da pagina
import './card.css'


function Card (){

    //declarar uma variavel de estado para a lista de alunos 
    const [infos, setinfo] = useState([]);

    //Antes da reinderização da página e executado o hook useEffect()
    // que fará basicamente a requisição da api e a guardará na variavel declarada acima 
    useEffect(() => {
        async function usarInfo(){
            const resposta = await api.get('https://api-fivedevs.onrender.com/');
            //salvando as resposta da api na variavel
            setinfo(resposta.data);
            //salvando os dados da api no localstorage
            localStorage.setItem('infos', JSON.stringify(resposta.data));
        };
        //chamando a função 
        usarInfo();
    }, []);

   
//renderizando a página 
    return (
        <EstruturaPagina>
            <section className="container_card">
                <div className="card">
                    <section className="sessao">
                        <ul className="lista">
                            {/* iterando os dados da salvos da api na página através do .map */}
                            {infos.map((inf) => (
                                <article key={inf._id}>
                                    <li>
                                        <div className="imgename">
                                            <img src={inf.foto} alt="imagem aluno" />
                                            <h2 className="nome">{inf.nome}</h2>
                                        </div>

                                        <div className="btnsvizuexclu">
                                            {/* redireciona o usuário para a pagina com as informações do aluno em questão 
                                            no caso para  a página students  */}
                                            <Link to={`/contato/${inf._id}`} className="link">  {/* Link pega os usuários pelo id 
                                            assim ele sabe como e qual aluno pegar    */}
                                                <button className="visu">VISUALIZAR</button>
                                            </Link>
                                            <button className="excluir" onClick={() => Excluir(inf._id)}>EXCLUIR</button> 
                                            {/* Executa a função excluir passando o id do aluno em questão */}
                                        </div>
                                        
                                    </li>
                                </article>
                            ))}
                        </ul>
                    </section>
                    <div className="footer"></div>
                </div>
            </section>
        </EstruturaPagina>
    )
    
    //função para excluir o aluno executando o metodo delete 
    function Excluir(_id){ // pega o id do aluno em questão que se deseja excluir
        axios.delete(`https://api-fivedevs.onrender.com/${_id}`) // através do axios execut-se o metodo delete com a url da api e o id em questão
        window.alert("Aluno Excluido com Sucesso")
        window.location.reload(); //atualiza a página e carrega a nova lista de alunos 
        }

       
}

export default Card;