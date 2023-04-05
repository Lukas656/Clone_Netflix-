import React from "react";

const Episodeo = ({episodeo}) => {
  return (
    <>
      <li class="row">
        <div class="col-1 my-auto text-center">
          <h3 class="text-white">{episodeo.numero}</h3>
        </div>
        <div class="col-4">
          <img class="img-fluid rounded" src={episodeo.capa}/>
        </div>
        <div class="col-7">
          <h6 class="text-white">{episodeo.titulo}</h6>
          <p class="text-muted">{episodeo.descricao}</p>
        </div>
      </li>
    </>
  )
}

export default Episodeo