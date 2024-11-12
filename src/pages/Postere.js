import React from 'react';
import Poster2FA from '../images/Poster2FA.jpg';
import PosterEmail from '../images/PosterEmail.jpg';
import PosterPhishingSpam from '../images/PosterPhishingSpam.jpg'
import styled from 'styled-components';

// Container pentru galeria de postere, cu grid layout
const GalleryContainer = styled.div`
  display: grid;               /* Folosim grid pentru a organiza imaginile pe coloane */
  grid-template-columns: repeat(3, 1fr);  /* 3 coloane egale */
  gap: 20px;                    /* Spațiu între imagini */
  padding: 20px;
  justify-items: center;        /* Aliniază imaginile la centru pe orizontală */
  overflow-x: auto;             /* Permite derularea orizontală dacă este necesar */
  //scroll-snap-type: x mandatory; /* Permite alinierea la fiecare imagine în derulare */
  -webkit-overflow-scrolling: touch; /* Permite derularea lină pe mobile */
   height: 80vh;                 /* Setează înălțimea maximă a containerului la 80% din înălțimea vizibilă */
  //overflow-y: auto;             /* Permite derularea verticală dacă conținutul depășește înălțimea containerului */
`;

// Stil pentru fiecare imagine
const PosterImage = styled.img`
  width: 100%;                /* Se va adapta lățimii coloanei */
  height: auto;               /* Păstrează proporțiile imaginii originale */
  object-fit: contain;        /* Asigură că imaginea nu se distorsionează */
`;

const Title = styled.h1`
  font-size: 4vh;
  color: black;
  font-weight: bold;
  text-align: center;
  margin: 0;
  margin-top: 1vh;
`;

const Postere = () => {
  return (
    <div>
      <Title>Postere</Title>
      <GalleryContainer>
        <PosterImage src={Poster2FA} alt="Poster 2FA" />
        <PosterImage src={PosterEmail} alt="Poster Email" />
        <PosterImage src={PosterPhishingSpam} alt="Poster 2FA" />
        <PosterImage src={PosterEmail} alt="Poster Email" />
        <PosterImage src={Poster2FA} alt="Poster 2FA" />
        <PosterImage src={PosterEmail} alt="Poster Email" />
        <PosterImage src={Poster2FA} alt="Poster 2FA" />
        <PosterImage src={PosterEmail} alt="Poster Email" />
        <PosterImage src={Poster2FA} alt="Poster 2FA" />
        {/* Poți adăuga mai multe imagini dacă este necesar */}
      </GalleryContainer>
    </div>
  );
};

export default Postere;
