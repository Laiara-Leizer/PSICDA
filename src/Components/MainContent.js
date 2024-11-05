import React from 'react';
import CardsSection from './CardsSection';


const MainContent = () => {
    return (
        <main className="main">


              <div className="text">
                <h1 className="titulo">Escola</h1>
                <div className="homeimage">
                    <img className="home" src="./img/containerhome.png" alt="home" />
                </div>
                <h2 className="sobre">Sobre o site</h2>
                <p className="p">
                    O site foi desenvolvido com o intuito de ajudar crianças na fase de alfabetização e é recomendado para crianças que tenham Deficit de Atenção com Hiperatividade. Contudo, ainda sim outras crianças podem utilizar.
                </p>
                <div className="partida">
                    <a href="./memoriafacil.html" className="frase">Iniciar partida?</a>
                </div>
            </div>
        </main>
    );
}

export default MainContent;




