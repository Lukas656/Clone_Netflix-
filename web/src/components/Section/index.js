import React from "react";
import Filme from '../Filme/index'

const  Section = ({secao})=>{
    return(
        <section>
        <div class="conteiner">
          <div class="row">
            <div class="col-12">
              <h5 class="text-white">{secao[0]?.generos[0]}</h5>
            </div>
          </div>
        </div>
        <div class="col-12">
          <ul class="filme-lista">
           {secao.map((filme)=>(
            <Filme filme={filme}/>
           ))}             
          </ul>
        </div>
      </section>
    )
}

export default Section;