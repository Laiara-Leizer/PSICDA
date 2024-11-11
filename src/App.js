// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from './components/home/indexHome';
import HomeNow from './HomeComponent';

// import GameOne from './components/GameOne/index';

// import Contact from './components1/Contact';
// import Estilizada from './components1/Estilizada';

const App = () => {
    return (
     <Router>

        <Link to='/home'>Home</Link>
        {/* <Link to='/gameone'>GameOne</Link> */}
        {/* <Link to='/contact'>Contact</Link>
        <Link to='/estilizada'>Estilizada</Link> */}

        <Routes>
                <Route path='/home' element={<HomeNow/>} />
                {/* <Route path='/gameone' element={<GameOne/>} /> */}
                {/* <Route path='/contact' element={<Contact/>} />
                <Route path='/estilizada' element={<Estilizada/>} /> */}
        </Routes>

    </Router>

    );
}

export default App;