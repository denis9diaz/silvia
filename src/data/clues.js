// src/data/clues.js
import altea from '../img/altea.png';
import beso from '../img/beso.png';
import bilbao from '../img/bilbao.png';
import cerdeña from '../img/cerdeña.png';
import champi from '../img/champi.png';
import oliva from '../img/oliva.png';
import sanse from '../img/sanse.png';

const clues = [
  {
    hint: "¿Dónde es?",
    imageSrc: oliva,
    finalAnswer: "Oliva", // Respuesta final correcta
    questions: [
      {
        question: "¿Qué me robabas siempre en el gimnasio?",
        correctAnswer: "Las poleas",
        answers: ["La multi", "Las poleas", "La de jalon", "El móvil"],
      },
      {
        question: "Y fuera del gimnasio, ¿qué me robas siempre?",
        correctAnswer: "Todas son correctas",
        answers: ["Los vapers", "La cama", "El corasón", "Todas son correctas"],
      },
      {
        question: "¿Cuál es el sitio donde más veces hemos ido a comér?",
        correctAnswer: "El Rinconcito",
        answers: ["Aarde", "Five Guys", "El Rinconcito", "Sushi"],
      },
    ],
  },
  {
    hint: "¿Dónde es?",
    imageSrc: altea,
    finalAnswer: "altea", // Respuesta final correcta
    questions: [
      {
        question: "¿Cuál de estos estadios NO hemos visitado?",
        correctAnswer: "Sánchez Pizjuán",
        answers: ["Reale Arena", "Sánchez Pizjuán", "El Sardinero", "San Mamés"],
      },
      {
        question: "¿Cuantas champions tiene el Real Madrid?",
        correctAnswer: "15",
        answers: ["16", "15", "14", "13"],
      },
      {
        question: "¿Cómo se llama la segunda competición Europea?",
        correctAnswer: "Europa League",
        answers: ["Europa League", "UEFA", "Mundialito de Clubes", "Conference League"],
      },
    ],
  },
  {
    hint: "¿Dónde es?",
    imageSrc: cerdeña,
    finalAnswer: "cerdeña", // Respuesta final correcta
    questions: [
      {
        question: "Llego sorniendo loco, que hay de nuevo. Pero llevo un par de muertos en el ...",
        correctAnswer: "maletero",
        answers: ["trastero", "avispero", "maletero", "salpicadero"],
      },
      {
        question: "Claro que no estaremos aquí para siempre, pero sí lo harán mis letras y mis piezas en los ...",
        correctAnswer: "puentes",
        answers: ["dientes", "fuertes", "suertes", "puentes"],
      },
      {
        question: "Como aquella foto nuestra en el fondo del cajón, devorandonos la boca en el ...",
        correctAnswer: "fotomatón",
        answers: ["sillón", "fotomatón", "salón", "cartón"],
      },
    ],
  },
  {
    hint: "¿Dónde es?",
    imageSrc: sanse,
    finalAnswer: "san sebastian", // Respuesta final correcta
    questions: [
      {
        question: "¿Cuál de estas pelis NO es de Cristofer Nolan?",
        correctAnswer: "Crank",
        answers: ["Crank", "Tenet", "Origen", "Interestelar"],
      },
      {
        question: "¿Cuál de estas pelis es de Tarantino?",
        correctAnswer: "Malditos Bastardos",
        answers: ["Batman Begins", "Malditos Bastardos", "El diario de Noa", "El libro de la selva"],
      },
      {
        question: "¿Cual de estas pelis NO vimos juntos en el cine?",
        correctAnswer: "La llamada",
        answers: ["Oppenheimer", "La llamada", "Barbie", "Jhon Wick 4"],
      },
    ],
  },
  {
    hint: "¿Dónde es?",
    imageSrc: bilbao,
    finalAnswer: "bilbao", // Respuesta final correcta
    questions: [
      {
        question: "Guapo",
        correctAnswer: "Silvia",
        answers: ["Silvia", "Denis"],
      },
      {
        question: "Masajeador",
        correctAnswer: "Denis",
        answers: ["Silvia", "Denis"],
      },
      {
        question: "Dormilón",
        correctAnswer: "Silvia",
        answers: ["Silvia", "Denis"],
      },
    ],
  },
  {
    hint: "Quién es?",
    imageSrc: champi,
    finalAnswer: "champiñon", // Respuesta final correcta
    questions: [
      {
        question: "¿Cuál es nuestro principal medio de conversación?",
        correctAnswer: "Stickers de Champi",
        answers: ["A gritos", "Llamada", "Texto", "Stickers de Champi"],
      },
      {
        question: "¿Cuántos meses llevamos juntos?",
        correctAnswer: "19",
        answers: ["17", "18", "19", "20"],
      },
      {
        question: "¿Cuántos meses más vamos a estar juntos?",
        correctAnswer: "∞",
        answers: ["Máximo 5", "1", "0, te dejo", "∞"],
      },
    ],
  },
  {
    hint: "¿Qué prefieres? Regalo material o viaje",
    imageSrc: beso,
    finalAnswer: "Viaje", // Respuesta final correcta
    questions: [
      {
        question: "Comida a domicilio",
        correctAnswer: "Sushi",
        answers: ["Hamburguesa", "Sushi"],
      },
      {
        question: "Plan de noche",
        correctAnswer: "Dormir",
        answers: ["Dormir", "Peli"],
      },
    ],
  },
];

export default clues;
