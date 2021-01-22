import MontgomeryCardsImg from '../images/MontgomeryCardsImg.png';
import ChicasDelCodingImg from "../images/ChicasdelCodingImg.png";
import DreamSeriesImg from '../images/DreamSeriesImg.png';
import RickMortyImg from '../images/Rick&MortyImg.png';

const ProjectsData = [
  {
    title: 'Dream Series Searcher',
    description:
    [`App web desarrollada con JavaScript, que permite la búsqueda de series y el uso de favoritos.`,  `Maquetación con HTML y CSS3(SASS).`, 
    `Implementación de API y LocalStorage.`],
    githubLink: 'https://github.com/anamartinezfernandez/App-series-searcher',
    webLink: 'http://beta.adalab.es/App-series-searcher/',
    img: DreamSeriesImg,
    skills: ['HTML', 'SASS', 'JS'],
    id: 0,
  },
  {
    title: 'Rick and Morty Finder ',
    description:
      [`Página web responsive desarrollada con React, que permite la búsqueda y filtrado de personajes de la serie Rick y Morty.`, `Maquetación con HTML y CSS3(SASS).`],
    githubLink: 'https://github.com/anamartinezfernandez/Rick-and-Morty-React-App',
    webLink: 'http://beta.adalab.es/Rick-and-Morty-React-App',
    img: RickMortyImg,
    skills: ['HTML', 'SASS', 'REACT'],
    id: 1,
  },
  {
    title: 'Las Chicas del Coding',
    description:
      ['Página web colaborativa de presentación y contacto.', 'Cuenta con una landing page y un formulario de contacto.', 'Diseño responsive.', 'Maquetación con HTML5 y CSS3 (SASS).'],
    githubLink: 'https://github.com/anamartinezfernandez/My-first-collaborative-webpage',
    webLink: 'http://beta.adalab.es/project-promo-k-modulo-1-team-3/',
    img: ChicasDelCodingImg,
    skills: ['HTML', 'CSS', 'SASS'],
    id: 2,
  },
  {
    title: 'Awesome profile cards',
    description:
      ['Web App interactiva, con la que generar tarjetas de visita personalizadas.', 'Maquetación con HTML5, CSS3 (SASS).', 'Implementada interactividad con JavaScript.'],
    githubLink:
      'https://github.com/anamartinezfernandez/Web-App-Awesome-profile-cards',
    webLink: 'http://beta.adalab.es/project-promo-k-module-2-team-4/',
    img: MontgomeryCardsImg,
    skills: ['HTML', 'SASS', 'JS'],
    id: 3,
  },
  // {
  //   title: 'React web app',
  //   description:
  //     'Proyecto colaborativo, consistente en la refactorización a través de React de código heredado: una aplicación web desarrollada con JavaScript.',
  //   githubLink:
  //     'https://github.com/anamartinezfernandez/React-web-app',
  //   webLink: 'http://beta.adalab.es/project-promo-k-module-3-team-1/',
  //   img: RickMortyImg,
  //   skills: ['HTML', 'SASS', 'REACT', 'JS' ],
  //   id: 4,
  //},
];

export default ProjectsData;