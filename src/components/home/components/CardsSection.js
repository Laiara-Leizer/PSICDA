import React from 'react';

const CardsSection = ({ imageSrc, title, link, description }) => {
    return (
        <div className="col">
            <section className="background-card">
                <div className="card">
                    <img src={imageSrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><a href={link} className="card-title">{title}</a></h5>
                        <p className="card-text d-flex mx-2 mt-4">{description}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CardsSection;