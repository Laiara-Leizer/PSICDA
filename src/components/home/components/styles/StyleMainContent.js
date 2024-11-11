import React from 'react';

//MAIN

const StylesMainContent = {
  gochiHandRegular: {
    fontFamily: "Gochi Hand, cursive",
    fontWeight: 400,
    fontStyle: "normal",
  },
  raleway: {
    fontFamily: "Raleway, sans-serif",
    fontOpticalSizing: "auto",
    fontWeight: "weight",
    fontStyle: "normal",
  },
  baloo2: {
    fontFamily: "Baloo 2, sans-serif",
    fontOpticalSizing: "auto",
    fontWeight: "weight",
    fontStyle: "normal",
  },
  general: {
    fontFamily: "Arial, Helvetica, sans-serif",
    padding: 0,
    margin: 0,
    color: "#000",
    backgroundColor: "#ECFFFF",
  },
  header: {
    width: "100vw",
    height: "15vh",
    display: "flex",
    fontWeight: 700,
  },
  logo: {
    display: "inline-flex",
    alignItems: "center",
    marginLeft: "3vw",
    marginRight: "7vw",
  },
  // Add more styles here as needed
};

const StyleMainContent = () => {
  return (
    <main style={StylesMainContent.general}>
      <div className="text" style={StylesMainContent.text}>
        {/* Your content goes here */}
      </div>
    </main>
  );
}

export default StyleMainContent;
























