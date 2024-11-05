import React from 'react';
import Card from './Card';
import GameOneLog from '../img/Jogo 01.jpg';
import GameTwoLog from '../img/Jogo 02.jpg';
import GameThreeLog from '../img/Jogo 03.png';

const CardsSection = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <Card 
                imageSrc={GameOneLog}
                title="Caderno das Cores"
                link="./jogo2.html"
                description="Para este jogo, você deve deixar os dois lados do caderno de cores iguais. Terá uma figura de um lado e a criança deve apertar em cima dos quadrados até deixar com a mesma cor."
            />
            <Card 
                imageSrc={GameTwoLog}
                title="Jogo da memória"
                link="./memoriamedio.html"
                description="Neste jogo, o objetivo é colocar todas as letras em ordem, as letras estarão embaralhadas, igual um jogo da memória comum. Porém com um design específico para não se perder o foco."
            />
            <Card 
                imageSrc={GameThreeLog}
                title="ZIG-ZAG"
                link="./memoriadificil.html"
                description="Para este jogo, você deve deixar os dois lados do caderno de cores iguais. Terá uma figura de um lado e a criança deve apertar em cima dos quadrados até deixar com a mesma cor."
            />
        </div>
    );
}

export default CardsSection;