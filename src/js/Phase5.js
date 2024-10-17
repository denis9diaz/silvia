import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Importa SweetAlert
import clues from '../data/clues'; // Asegúrate de importar tus pistas
import '../styles/phases.css'; // Importa los estilos

const Phase5 = ({ nextPhase }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [finalAnswer, setFinalAnswer] = useState('');
  const clue = clues[4]; // Obtiene la pista correspondiente

  const checkAnswer = (answer) => {
    if (answer === clue.questions[correctAnswers].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
      Swal.fire({
        icon: 'success',
        title: '¡Correcto!',
        position: 'bottom',
        width: '300px',  // Ajustar ancho a 300px
        padding: '1rem',
        customClass: {
          popup: 'compact-alert',
        },
        showConfirmButton: true, // Mostrar el botón de "OK"
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Incorrecto',
        position: 'bottom',
        width: '300px',
        padding: '1rem',
        customClass: {
          popup: 'compact-alert',
        },
        showConfirmButton: true, // Mostrar el botón de "OK"
      });
    }
  };
  
  const handleFinalAnswer = () => {
    if (finalAnswer.toLowerCase() === clue.finalAnswer.toLowerCase()) {
      Swal.fire({
        icon: 'success',
        title: '¡Correcto!',
        position: 'bottom',
        width: '300px',
        padding: '1rem',
        customClass: {
          popup: 'compact-alert',
        },
        showConfirmButton: true, // Mostrar el botón de "OK"
      }).then(() => {
        nextPhase();
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Incorrecto',
        position: 'bottom',
        width: '300px',
        padding: '1rem',
        customClass: {
          popup: 'compact-alert',
        },
        showConfirmButton: true, // Mostrar el botón de "OK"
      });
    }
  };
  
  const getImageStyle = () => {
    const blurAmount = (3 - correctAnswers) * 10; // Mayor difuminado si hay menos respuestas correctas
    const scaleAmount = 1.2 - (correctAnswers * 0.05); // Escala de la imagen ligeramente

    return {
      filter: `blur(${blurAmount}px)`, // Aplicar difuminado
      transform: `scale(${scaleAmount})`, // Escalar la imagen sin rotar
      transition: 'filter 0.5s, transform 0.5s', // Transiciones suaves
      opacity: 0.9, // Mantener algo de opacidad
      maxWidth: '300px', // Tamaño máximo para la imagen (ajustado a 300px)
    };
  };

  return (
    <div className="phase-container">
      <h2 className='adivina'>Adivina la imagen</h2>
      <img
        src={clue.imageSrc} // La imagen inicial (difuminada)
        alt="Imagen para adivinar"
        style={getImageStyle()} // Estilos aplicados
        className='img-phase'
      />
      <div className="question-container">
        <h3 className="descripcion-fase">¿Quién es más?</h3>
        {correctAnswers < clue.questions.length && (
          <div>
            <p className="question-text">{clue.questions[correctAnswers].question}</p>
            {clue.questions[correctAnswers].answers.map((answer, index) => (
              <button key={index} className="round-button" onClick={() => checkAnswer(answer)}>
                {answer}
              </button>
            ))}
          </div>
        )}
      </div>
      {correctAnswers === clue.questions.length && (
        <div>
          <h3 className='title-phase'>¿Dónde fue esto?</h3>
          <input
            type="text"
            className="input-phase" // Añadir clase al input
            value={finalAnswer}
            onChange={(e) => setFinalAnswer(e.target.value)}
          />
          <button className="submit-button" onClick={handleFinalAnswer}>Enviar</button>
        </div>
      )}
    </div>
  );
};

export default Phase5;
