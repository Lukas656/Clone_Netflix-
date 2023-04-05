import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/home'


function App() {

    const logado = localStorage.getItem('@user');

    return (
        <>
        {/* Importando o cabeçalho de component/Header */}
        <BrowserRouter>
            <Routes>
               {!logado && <Route path="/" exact element={<Login />} />} 
               {logado && <Route path="/" exact element={<Home />} />} 
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;