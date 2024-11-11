import React from 'react';

const styles = {
  header: {
    backgroundColor: '#ECFFFF',
    padding: '1rem 0',
  },
  logo: {
    maxWidth: '200px', // Logo size adjustment
  },
  inputFlex: {
    width: 'auto',
    border: '2px solid #000',
    borderRadius: '10px',
    backgroundColor: '#9ACEFF',
    marginLeft: '0.3vw',
  },
  pesquisar: {
    marginLeft: 'auto',
  },
  main: {
    textAlign: 'center',
    padding: '5rem 0',
  },
  titulo: {
    fontSize: '5vw',
    fontFamily: 'Gochi Hand, cursive',
    fontWeight: 100,
  },
  sobre: {
    fontFamily: 'Baloo 2, sans-serif',
    marginTop: '2vh',
    fontSize: '2vw',
  },
  p: {
    fontFamily: 'Baloo 2, sans-serif',
    textAlign: 'justify',
    marginTop: '2vh',
    fontSize: '1.3vw',
  },
  partida: {
    marginTop: '4vh',
  },
  frase: {
    backgroundColor: '#332623',
    color: '#fff',
    padding: '1rem 2rem',
    borderRadius: '1.5vw',
    textDecoration: 'none',
    display: 'inline-block',
  },
  jogotop: {
    fontSize: '2rem',
    fontWeight: 900,
    marginTop: '4rem',
  },
  card: {
    border: '2px solid #C3C9FF',
    borderRadius: '10%',
    backgroundColor: '#E2E5FF',
  },
  cardImgTop: {
    borderRadius: '10%',
    width: '100%',
    height: 'auto',
  },
  cardBody: {
    backgroundColor: '#E2E5FF',
  },
  cardText: {
    marginTop: '1vh',
    color: '#000',
  },
};

function MainPage() {
  return (
    <div style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      {/* HEADER */}
      <header style={styles.header}>
        <div className="container d-flex justify-content-between align-items-center">
          <img
            src="./img/Logo PSICDA.png"
            alt="logo"
            style={styles.logo}
            className="img-fluid"
          />
          <div className="d-flex align-items-center">
            <a href="#sobre" className="mx-3">SOBRE MIM</a>
            <a href="#jogotop" className="mx-3">JOGOS</a>
            <a href="#leis" className="mx-3">LEIS</a>
            <a href="#contatos" className="mx-3">CONTATOS</a>
            <form className="d-flex">
              <input
                id="input-flex"
                className="form-control"
                type="search"
                placeholder="Pesquisar..."
                aria-label="Search"
                style={styles.inputFlex}
              />
              <button type="submit" style={styles.pesquisar}>
                <img
                  id="pesquisar"
                  src="./img/Vector.png"
                  alt="Pesquisar"
                  style={{ height: '2rem' }}
                />
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main style={styles.main}>
        <div className="container">
          <h1 style={styles.titulo}>Escola</h1>
          <div className="row">
            <div className="col-lg-6 col-md-8">
              <img
                className="img-fluid"
                src="./img/containerhome.png"
                alt="home"
              />
            </div>
            <div className="col-lg-6 col-md-4">
              <h2 style={styles.sobre}>Sobre o site</h2>
              <p style={styles.p}>
                O site foi desenvolvido com o intuito de ajudar crianças na
                fase de alfabetização e é recomendado para crianças que tenham
                Deficit de Atenção com Hiperatividade. Contudo, ainda sim outras
                crianças podem utilizar.
              </p>
              <div style={styles.partida}>
                <a href="./memoriafacil.html" style={styles.frase}>
                  Iniciar partida?
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* GAMES SECTION */}
      <section id="jogotop" style={styles.jogotop}>
        <div className="container text-center">
          <h2>JOGOS</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* Game 1 */}
            <div className="col">
              <div className={styles.card}>
                <img
                  src="./img/Logo PSICDA.png"
                  className="card-img-top"
                  alt="Caderno das Cores"
                  style={styles.cardImgTop}
                />
                <div className="card-body" style={styles.cardBody}>
                  <h5 className="card-title">
                    <a
                      href="./jogo2.html"
                      className="card-title"
                      style={styles.cardText}
                    >
                      Caderno das Cores
                    </a>
                  </h5>
                  <p className="card-text" style={styles.cardText}>
                    Para este jogo, você deve deixar os dois lados do caderno
                    de cores iguais. Terá uma figura de um lado e a criança deve
                    apertar em cima dos quadrados até deixar com a mesma cor.
                  </p>
                </div>
              </div>
            </div>

            {/* Game 2 */}
            <div className="col">
              <div className={styles.card}>
                <img
                  src="./img/Jogo 02.jpg"
                  className="card-img-top"
                  alt="Jogo da Memória"
                  style={styles.cardImgTop}
                />
                <div className="card-body" style={styles.cardBody}>
                  <h5 className="card-title">
                    <a
                      href="./memoriamedio.html"
                      className="card-title"
                      style={styles.cardText}
                    >
                      Jogo da Memória
                    </a>
                  </h5>
                  <p className="card-text" style={styles.cardText}>
                    Neste jogo, o objetivo é colocar todas as letras em ordem,
                    as letras estarão embaralhadas, igual um jogo da memória
                    comum. Porém com um design específico para não se perder o
                    foco.
                  </p>
                </div>
              </div>
            </div>

            {/* Game 3 */}
            <div className="col">
              <div className={styles.card}>
                <img
                  src="./img/Jogo 03.png"
                  className="card-img-top"
                  alt="ZIG-ZAG"
                  style={styles.cardImgTop}
                />
                <div className="card-body" style={styles.cardBody}>
                  <h5 className="card-title">
                    <a
                      href="./memoriadificil.html"
                      className="card-title"
                      style={styles.cardText}
                    >
                      ZIG-ZAG
                    </a>
                  </h5>
                  <p className="card-text" style={styles.cardText}>
                    Para este jogo, você deve deixar os dois lados do caderno
                    de cores iguais. Terá uma figura de um lado e a criança deve
                    apertar em cima dos quadrados até deixar com a mesma cor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
