import React, {useState,useEffect} from "react";
import Episodeo from "../Episodeo/index";
import api from '../../services/api';

const ModalFIlme = ()=>{

  const [filme, setFilme]= useState({});
  const [episodeos, setEpisodeos] = useState([]);


  const selectFilmeListener = ()=>{
    window.addEventListener('selectFilme', (data)=>{
      setFilme(data.detail);
    });
  };

  const getEpisodeos = async (temporada_id)=>{
    try {
      const response = await api.get(`/ep/temporada/${temporada_id}`);
      const res = response.data;

      if(res.error){
        alert(res.messagem)
        return false
      }
      setEpisodeos(res.episodeos)
    } catch (error) {
      alert(error.messagem)      
    }
  }

  useEffect(()=>{
    selectFilmeListener();
  }, []);
  useEffect(()=>{
    if(filme.tipo == "serie"){
      getEpisodeos(filme.temporadas[0]?._id);
    }
  }, [filme]);



    return(
    <>
     <div class="modal fade" id="modal-filmes">
    <div class="modal-dialog ">
      <div class="modal-content">
        <div class="modal-hero" style={{backgroundImage: `url(${filme.capa})`}}>
          <img src={filme.logo} class="logo-modal" width="100%"/>
          <div class="modal-hero-infos">
            <button class="btn btn-lg btn-custom-white">
              <img src="https://i.ibb.co/ynZmX0h/play-icon.png" width="25px"/> Assistir
            </button>
            <a href="#" class="btn-custom-round btn btn-lg btn-light rounded-circle">
              <img src="https://i.ibb.co/ynZmX0h/play-icon.png" width="25px"/>
            </a>
            <a href="#" class="btn-custom-round border-white btn btn-lg rounded-circle opacity-50">
              <img src="https://i.ibb.co/0tSyRGQ/1dislike-icon.png" width="25px"/>
            </a>
            <a href="#" class="btn-custom-round border-white btn btn-lg rounded-circle opacity-50">
              <img src="https://i.ibb.co/SQ4TsF1/like-icon.png" width="25px"/>
            </a>
          </div>
        </div>
        <div class="modal-info">
          <div class="row">
            <div class="col-7">
              <p class="filme-descricao">{filme.descricao}
              </p>
            </div>
            <div class="col-5">
              <p class="filme-elenco">
                Elenco: <text>{filme.elenco?.join(', ')}</text>
                <br />
                <br />
                Gêneros: <text>{filme.generos?.join(', ')}</text>
                <br />
                <br />
                Cenas e Momentos: <text>{filme.cenas_momentos}</text>
              </p>
            </div>
          </div>
          <br />
          {filme.tipo == "serie" && <>
          <div class="row">
            <div class="col-7">
              <h3 class="text-white">Episódeos</h3>
            </div>
            <div class="col-5 text-right">
              <select class="form-control"  onChange={(e)=>{
                getEpisodeos(e.target.value)
              }}>
                {filme.temporadas?.map(temporada => <option value={temporada._id}>{temporada.titulo}</option>)};
              </select>
            </div>
          </div>
          <div class="row">
            <ul id="lista-episodeos">
              {episodeos.map((episodeo) =>(
                 <Episodeo episodeo={episodeo}/>
              ))};
            </ul>
          </div>
          </> }



        </div>
      </div>

    </div>
  </div>    
    </>
    )
}

export default ModalFIlme;