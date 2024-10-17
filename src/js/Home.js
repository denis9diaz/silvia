import React from 'react';
import Game from './Game';
import '../styles/home.css';

const Home = () => {
  const [startGame, setStartGame] = React.useState(false);

  return (
    <div className="container">
      {startGame ? (
        <Game />
      ) : (
        <div>
          <h1 className="titulo">¡Vamos a jugar!</h1>
          <h3 className="texto">Tienes que contestar una serie de preguntas.</h3>
          <h3 className="texto">A medida que vayas acertando, se irá aclarando una imagen.</h3>
          <h3 className="texto">
            Tendrás que escribir algo sobre esa imagen para pasar a la siguiente fase.
          </h3>
          <button onClick={() => setStartGame(true)} className='button-home'>¡Quiero jugar!</button>
        </div>
      )}
    </div>
  );
};

export default Home;
