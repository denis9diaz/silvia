import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Importa SweetAlert
import clues from '../data/clues'; // Asegúrate de importar tus pistas
import '../styles/phases.css'; // Importa los estilos

const Phase6 = ({ nextPhase }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [finalAnswer, setFinalAnswer] = useState('');
  const clue = clues[5]; // Obtiene la pista correspondiente

  const checkAnswer = (answer) => {
    if (answer === clue.questions[correctAnswers].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
      Swal.fire({
        icon: 'success',
        title: '¡Correcto!',
        text: '¡Bien hecho! Has acertado la respuesta.',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Incorrecto',
        text: 'Intenta de nuevo.',
      });
    }
  };

  const handleFinalAnswer = () => {
    if (finalAnswer.toLowerCase() === clue.finalAnswer.toLowerCase()) {
      Swal.fire({
        icon: 'success',
        title: '¡Correcto!',
        text: '¡Has adivinado la imagen!',
      }).then(() => {
        nextPhase(); // Si la respuesta final es correcta, avanza a la siguiente fase
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Incorrecto',
        text: 'La respuesta final no es correcta. Intenta de nuevo.',
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
        <h3 className="descripcion-fase">Más sobre nosotros:</h3>
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
          <h3 className='title-phase'>¿Quién es?</h3>
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

export default Phase6;
