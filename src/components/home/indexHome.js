import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
// import CardsSection from './components/CardsSection';

import '../css/HomeContent.css';
import '../css/Games.css';


const indexHome = () => {
    return (
        <div>
            <Header />
            <MainContent />
            {/* <GamesSection /> */}
            
            {/* <CardsSection /> */}

        </div>
    );
}

export default indexHome;



// <section id="jogotop">JOGOS</section>
// <CardsSection />