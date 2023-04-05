import React from "react";


const Hero = ({filme}) =>{
    return(
        <div id="hero" class="conteiner-fluid" style={{
          backgroundImage: `url(${filme.capa})`
        }}>
        <div class="conteiner">
          <div class="row" id="hero_info">
            <div class="col-6">
              <img class="logo" src={filme.logo}/>
              <p class="text-white">{filme.descricao?.substr(0,194)}...</p>
              <br />
              <button class="btn btn-lg btn-custom-white">
                <img src="https://i.ibb.co/ynZmX0h/play-icon.png" width="25px"/> Assistir
              </button>
              <button class="btn btn-lg btn-custom-translicent">
                <img src="https://i.ibb.co/5c7tv83/info-icon.png" width="25px"/> Mais Informações
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Hero;