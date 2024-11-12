import React from 'react';
import Poster2FA from '../images/Poster2FA.jpg';
import PosterEmail from '../images/PosterEmail.jpg';
import PosterPhishingSpam from '../images/PosterPhishingSpam.jpg'
import styled from 'styled-components';

// Container pentru galeria de postere, cu grid layout
const GalleryContainer = styled.div`
  display: grid;               
  grid-template-columns: repeat(3, 1fr);  
  gap: 20px;                    
  padding: 20px;
  justify-items: center;        
  overflow-x: auto;            
  //scroll-snap-type: x mandatory; 
  -webkit-overflow-scrolling: touch; 
   height: auto;                
  //overflow-y: auto;             
`;

// Stil pentru fiecare imagine
const PosterImage = styled.img`
  width: 100%;             
  height: auto;               
  object-fit: contain;      
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
      </GalleryContainer>
    </div>
  );
};

export default Postere;
