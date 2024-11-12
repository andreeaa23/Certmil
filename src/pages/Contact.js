import React from 'react'
import styled, { keyframes } from 'styled-components'
import Heraldica from '../images/Heraldica_AAC.png'

// Animație de apariție pentru secțiune
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Animație pentru imaginea care alunecă pe ecran
const slideIn = keyframes`
  from {
    transform: translateX(30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Containerul principal
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: auto;
  width: auto;
 // margin-top: 5vh;
  padding: 2vh 10vw;
  background-color: #f4f4f9;
  animation: ${fadeIn} 1s ease-in-out;
  //background-color: red;
`;

// Containerul pentru text
const TextContainer = styled.div`
  width: 45%;
  padding: 3vw;
  animation: ${fadeIn} 1s ease-in-out;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2vh;
  animation: ${fadeIn} 1s ease-in-out;
`;

// Container pentru imagine
const ImageContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center; /* Centrează imaginea orizontal */
  align-items: center; /* Centrează imaginea pe verticală */
  animation: ${slideIn} 1s ease-out;
   margin-top: -6vh; 
  //background-color: blue;
`;

// Titlu principal
const Title = styled.h1`
  font-weight: bold;
  font-size: 2.2rem;
  color: #003366;
  text-align: center;
  margin-bottom: 1vh;
  text-transform: uppercase;
  animation: ${fadeIn} 0.8s ease-in-out;
`;

// Subtitlu
const SubTitle = styled.h2`
  font-weight: bold;
  font-size: 1.7rem;
  color: #009A0F;
  text-align: center;
  margin-bottom: 3vh;
  animation: ${fadeIn} 1s ease-in-out;
`;

// Text general
const Text = styled.p`
  font-size: 1.3rem;
  color: #333;
  line-height: 1.5;
  margin: 1vh 0;
  //padding-left: 10vw;
  animation: ${fadeIn} 1.2s ease-in-out;
`;

// Componenta de contact
const Contact = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Contact</Title> 
        <SubTitle>Agenția de Apărare Cibernetică</SubTitle>
        <Text>
          Pentru orice incident de securitate cibernetică ne puteți contacta la:
        </Text>

        <Text>
          <b>📍 Adresă:</b> Drumul Taberei, nr. 7-9, Sector 6, Cod poștal 061418, București
        </Text>

        <Text>
          <b>📧 E-mail:</b> cyber@milnet.local
        </Text>

        <Text>
          <b>📧 E-mail public:</b> cyber@mapn.ro
        </Text>

        <Text>
          <b>📞 STAR:</b> 1080 - 333
        </Text>
      </TextContainer>

      <ImageContainer>
        <img src={Heraldica} alt="Contact" style={{ width: '80%', height: 'auto' }} />
      </ImageContainer>
    </Container>
  );
};

export default Contact;
