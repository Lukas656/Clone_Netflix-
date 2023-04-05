import React from "react";


const Filme = ({filme}) => {
const selectFilme = ()=>{
  const event = new CustomEvent('selectFilme',{
    detail: filme,
  });
    window.dispatchEvent(event);
};


  return (
    <>
      <li class="filme" onClick={selectFilme} data-bs-toggle="modal" data-bs-target="#modal-filmes">
        <img class="img-fluid" src={filme.thumb} width="500px" />
        <div class="filme-info">
          <div class="col-12">
            <a href="#" class="btn-custom-round btn btn-bkg  rounded-circle">
              <img src="https://i.ibb.co/ynZmX0h/play-icon.png" width="25px" />
            </a>
            <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
              <img src="https://i.ibb.co/0tSyRGQ/1dislike-icon.png" width="25px" />
            </a>
            <a href="#" class="btn-custom-round border-white btn  rounded-circle opacity-50">
              <img src="https://i.ibb.co/SQ4TsF1/like-icon.png" width="25px" />
            </a>
            <a href="#" class="btn-custom-round border-white btn  rounded-circle opacity-50">
              <img src="https://i.ibb.co/fM1jpn5/plus-icon.png" width="25px" />
            </a>
          </div>
          <p>T3:EP5<text>"Meu Episódeo</text></p>
        </div>
      </li>
    </>
  )
}

export default Filme;