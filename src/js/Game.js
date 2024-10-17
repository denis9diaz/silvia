import React, { useState } from 'react';
import Phase1 from './Phase1';
import Phase2 from './Phase2';
import Phase3 from './Phase3';
import Phase4 from './Phase4';
import Phase5 from './Phase5';
import Phase6 from './Phase6';
import Phase7 from './Phase7';


const phases = [Phase1, Phase2, Phase3, Phase4, Phase5, Phase6, Phase7];

const Game = () => {
  const [currentPhase, setCurrentPhase] = useState(0);

  const nextPhase = () => {
    if (currentPhase < phases.length - 1) {
      setCurrentPhase(currentPhase + 1);
    } else {
    }
  };

  const CurrentPhaseComponent = phases[currentPhase];

  return (
    <div className="game-container">
      <CurrentPhaseComponent nextPhase={nextPhase} />
    </div>
  );
};

export default Game;
