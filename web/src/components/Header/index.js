import React, {useState, useEffect} from "react";
import '../../styles/home.css';

const Header = () => {

const logout = () =>{
  localStorage.clear();
  window.location.reload();
}

  const [user, setUser] = useState({});

  useState(() => {
    setUser(JSON.parse(localStorage.getItem('@user')));
  }, []);



  return (
    <>
      <header class="row">
        <div class="col-2">
        <img class="img-logo" src="https://i.ibb.co/YNH2nM7/Netflix-Login.png"/>
        </div>
        <div class="col-8">
          <ul class="menu-list">
            <li>
              <a href="home.html">Inicio</a>
            </li>
            <li>
              <a href="serie.html">Séries</a>
            </li>
            <li>
              <a href="recent.html">Mais Recentes</a>
            </li>
            <li>
              <a href="list.html">Minha Lista</a>
            </li>
          </ul>
        </div>
        <div className="col-2 text-right">
          <a onClick={logout} className="text-white">Olá {user?.nome}.  Sair</a>
        </div>
      </header>
    </>
  )
}

export default Header;