import React from 'react';
import Logo from '../img/Logo PSICDA.png';
// import '../css/Home.css';
import '../components/styles/HomeStyleComponent'; // Updated path to match the filename
import '../components/styles/StyleHeaderComponent'; // Updated path to match the filename

const Header = () => {
    return (
        <header className="header container-fluid d-flex align-items-center justify-content-between">
            <img className="logo" src={Logo} alt="logo do site" />

            <nav className="nav">
                <a href="#sobre-nos" className="nav-link">SOBRE NÓS</a>
                <a href="#jogos" className="nav-link">JOGOS</a>
                <a href="#leis" className="nav-link">LEIS</a>
                <a href="#contato" className="nav-link">CONTATO</a>
            </nav>

            <form className="search-form d-flex" role="search">
                <input 
                    type="search" 
                    className="search-input form-control" 
                    placeholder="Pesquisar..." 
                    aria-label="Search" 
                />
            </form>
        </header>
    );
}

export default Header;








