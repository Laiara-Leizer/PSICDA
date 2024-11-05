import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import GamesSection from './GamesSection';
import CardsSection from './CardsSection';

import '../css/HomeContent.css';
import '../css/Games.css';


const Home = () => {
    return (
        <div>
            <Header />
            <MainContent />
            {/* <GamesSection /> */}
            <CardsSection />

          
        </div>
    );
}

export default Home;



// <section id="jogotop">JOGOS</section>
// <CardsSection />