import React, {useState, useEffect} from "react";
import ModalFilme from '../../components/ModalFilme';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import '../../styles/home.css';
import api from '../../services/api';

const Home = () => {
  const [principal , setPrincipal] = useState({});
  const [secoes, setSecoes]= useState([]);

  const getHome = async()=>{
    try {
      const response = await api.get('/filmes/home');
      const res = response.data;

      if(res.error){
        alert(res.messagem);
        return false;
      }
      setPrincipal(res.principal);
      setSecoes(res.secoes);

    } catch (error) {
      alert(error.messagem)
    }
  }

  useEffect(()=>{
    getHome();

  }, [])
  // retornar o HTML componente 
  return (
    <>
  <ModalFilme/>
  <div class="conteiner-fluid">
    <Header/>
  </div>

<Hero filme={principal}/>

  <div class="main-content">
  {secoes.map(secao => <Section secao={secao}/>)} 
  </div>

    </>
  )
};


export default Home

