import React, {useState} from "react";
import '../../styles/app.css';
import api from '../../services/api';

const Login = () => {

  const [credenciais, setCredenciais]= useState({
    email: '',
    senha: '',
  })
  const login = async ()=>{
    try{
      const response = await api.post('/usuario/login', credenciais);
      const res = response.data;

      if(res.error){
        alert(res.message);
        return false;
      }

      localStorage.setItem('@user', JSON.stringify(res.usuario));
      window.location.reload();
    }catch(err){
      alert(err.message);
    }
  }

  return (
    <>
      <div className="bg-body">
        <div class="container-fluid">
          <header class="row">
            <img className="img-Login" src="https://i.ibb.co/YNH2nM7/Netflix-Login.png" />
          </header>
          <div id="caixa-login">
            <h1>Entrar</h1>
            <br />
            <form>
              <input
                type="email"
                class="formEmail"
                placeholder="Email ou Número de Telefone"
                onChange={(e)=>{
                  setCredenciais({
                    ...credenciais,
                    email: e.target.value
                  });
                }}/>
              <br />
              <input
                type="senha"
                class="formSenha"
                placeholder="Senha"
                onChange={(e)=>{
                  setCredenciais({
                    ...credenciais,
                    senha: e.target.value
                  });
                }}/>
              <br />
              <button type="button" onClick={login}>Entrar</button>
              <div class="infos">
                <div class="campo-lembre-se">
                  <input type="checkbox" name="lembre-se" id="checkbox-one" />
                  <p>Lembre-se de mim</p>
                </div>
                <div class="campo-lembre-se">
                  <p>Precisa de Ajuda?</p>
                </div>
              </div>
              <div class="campo-lembre-se">
                <p>Novo por Aqui?</p> <a href="#">Assine Agora.</a>
              </div>

              <footer>
                <p>Está Pagina foi desenvolvida por Lucas Santos e é unicamente para Fins Estudantis.</p>
              </footer>
            </form>
          </div>
        </div>
      </div>

    </>
  )
};


export default Login;