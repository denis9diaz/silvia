import React, { useState } from 'react';
import Swal from 'sweetalert2';
import clues from '../data/clues'; // Asegúrate de importar las pistas correctamente
import '../styles/phases.css'; // Importa los estilos

const Phase7 = () => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [finalAnswer, setFinalAnswer] = useState('');
  const [showFinalMessage, setShowFinalMessage] = useState(false); // Nuevo estado para mostrar la pantalla final
  const [showVideo, setShowVideo] = useState(false); // Estado para manejar la aparición del video
  const [isImageVisible, setIsImageVisible] = useState(false); // Estado para controlar la visibilidad de la imagen
  const clue = clues[6]; // Obtiene la pista correspondiente a la fase 7

  const checkAnswer = (answer) => {
    if (answer === clue.questions[correctAnswers].correctAnswer) {
      const newCorrectAnswers = correctAnswers + 1;
      setCorrectAnswers(newCorrectAnswers);
  
      // Si el nuevo conteo de respuestas correctas es 2, muestra la imagen sin difuminar
      if (newCorrectAnswers === 2) {
        Swal.fire({
          icon: 'success',
          title: '¡Correcto!',
          text: '¡Bien hecho! Has acertado la respuesta. La imagen ya es visible.',
          position: 'bottom',
          width: '300px',
          padding: '1rem',
          customClass: {
            popup: 'compact-alert',
          },
          showConfirmButton: true, // Mostrar el botón de "OK"
        }).then(() => {
          // Aclarar la imagen
          setIsImageVisible(true);
        });
      } else {
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
        });
      }
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
        text: '¡Has adivinado la imagen!',
      }).then(() => {
        setShowFinalMessage(true); // Muestra el mensaje final
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
    const scaleAmount = 1.2 - correctAnswers * 0.05; // Escala de la imagen ligeramente

    return {
      filter: `blur(${isImageVisible ? 0 : blurAmount}px)`, // Sin difuminado si la imagen es visible
      transform: `scale(${scaleAmount})`, // Escalar la imagen sin rotar
      transition: 'filter 0.5s, transform 0.5s', // Transiciones suaves
      opacity: 0.9, // Mantener algo de opacidad
    };
  };

  return (
    <div>
      {!showFinalMessage ? (
        <div className="phase-container">
          <h2 className='adivina'>Adivina la imagen</h2>
          <img
            src={clue.imageSrc} // La imagen inicial (difuminada)
            alt="Imagen para adivinar"
            style={getImageStyle()} // Estilos aplicados
            className='img-phase'
          />
          <div className="question-container">
            <h3 className="descripcion-fase">¿Qué prefieres?</h3>
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
              <h3 className='title-phase'>Regalo material o viaje</h3>
              <input
                type="text"
                className="input-phase"  // Clase para el input
                value={finalAnswer}
                onChange={(e) => setFinalAnswer(e.target.value)}
              />
              <button className="submit-button" onClick={handleFinalAnswer}>Enviar</button> {/* Clase para el botón */}
            </div>
          )}
        </div>
      ) : (
        // Mensaje final y opción para ver el video
        <div className="final-message">
          <h1 className='felicidades'>¡Felicidades bebé!</h1>
          <p className='fel2'>Aquí tienes tu regalo</p>
          {!showVideo && (
            <button className="show-gift-button" onClick={() => setShowVideo(true)}>Quiero mi regalo!</button>
          )}
          {showVideo && (
            <div className="video-container" style={{ textAlign: 'center' }}>
              <video controls className="video-container" style={{ width: '50%' }}> {/* Ajustar tamaño del video */} 
                <source src="https://res.cloudinary.com/dxzhssh9m/video/upload/v1729171142/copy_BF8B69AC-4EDE-4F67-9DA7-9E95F9195FD1_qk3tcl.mov" type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Phase7;
