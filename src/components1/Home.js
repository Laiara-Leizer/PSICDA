import React from 'react';
import './css/Home.css'; // Import the CSS file

const Home = () => {
    return (
        <div className="container"> {/* Apply CSS class */}
            <h1 className="title">Hello, World!</h1> {/* Apply CSS class */}
            <p>This is a paragraph styled with CSS.</p>
        </div>
    );
}

export default Home;