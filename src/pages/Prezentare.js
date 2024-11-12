import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animație pentru secțiuni
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Animație de slide-in pentru itemii din listă
const slideIn = keyframes`
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Animație de scale-up pentru titluri
const scaleUp = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

// Styling pentru întreaga pagină
const Container = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  padding: 3vh 10vw;
  animation: ${fadeIn} 1s ease-in-out;
`;

// Titlu principal cu stil modern
const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  color: #003366;
  margin-bottom: 2vh;
  border-bottom: 2px solid #003366;
  padding-bottom: 10px;
  text-transform: uppercase;
  animation: ${scaleUp} 0.8s ease-in-out;
`;

// Text general cu font mai ușor de citit
const Text = styled.p`
  font-size: 1.3rem;
  color: #333;
  line-height: 1.15;
  margin: 10px 0;
  padding-left: 2vw;
  padding-right: 2vw;
  text-align: justify;
  animation: ${fadeIn} 1.2s ease-in-out;
`;

// Lista cu bullet points personalizată
const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 1vh 0;
`;

// Componente pentru elementele de listă cu animație de slide
const ListItem = styled.li`
  font-size: 1.2rem;
  color: #333;
  padding-left: 1.5vw;
  position: relative;
  animation: ${slideIn} 0.6s ease-out forwards;
  opacity: 0; /* Ascundem elementul până la terminarea animației */

  &:nth-child(1) {
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
  &:nth-child(4) {
    animation-delay: 0.8s;
  }
  &:nth-child(5) {
    animation-delay: 1s;
  }
`;

// Secțiune de container cu stiluri pentru secțiuni de obiective și misiuni
const Section = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2vh;
  animation: ${fadeIn} 1s ease-in-out;
`;

// Secțiune cu titlu mic
const SubTitle = styled.h2`
  font-size: 2rem;
  color: #003366;
  margin-bottom: 1vh;
  border-bottom: 1px solid #003366;
  padding-bottom: 8px;
  animation: ${scaleUp} 0.8s ease-in-out;
`;

const Prezentare = () => {
  return (
    <Container>
      <Title>Despre noi</Title>
      <Section>
        <Text>
          <b>Centrul de răspuns la incidente de securitate cibernetică (CRISC-P)</b> a fost înființat în anul 2007 în cadrul Ministerului Apărării Naționale, iar din 2020 este asigurat de către Agenția de Apărare Cibernetică/Comandamentul Apărării Cibernetice.
        </Text>
        <Text>
          <b>Centrul de răspuns la incidente de securitate cibernetică</b> gestionează incidentele de securitate cibernetică din infrastructurile cibernetice aflate sub responsabilitate, asigurând detectarea, investigarea și reacția în conformitate cu reglementările Ministerului Apărării Naționale.
        </Text>
      </Section>

      <SubTitle>Obiective</SubTitle>
      <Section>
        <List>
          <ListItem>✔️ Minimizarea impactului incidentelor de securitate cibernetică asupra personalului, informațiilor și infrastructurii.</ListItem>
          <ListItem>✔️ Răspuns rapid și eficient pentru recuperarea sistemelor și echipamentelor compromise.</ListItem>
          <ListItem>✔️ Pregătirea personalului pentru reacții corecte în fața incidentelor cibernetice.</ListItem>
          <ListItem>✔️ Prevenirea efectelor negative ale atacurilor cibernetice repetate.</ListItem>
        </List>
      </Section>

      <SubTitle>Misiuni</SubTitle>
      <Section>
        <List>
          <ListItem>⭐ Asigurarea condițiilor de răspuns la incidentele de securitate cibernetică.</ListItem>
          <ListItem>⭐ Detectarea și analiza evenimentelor de securitate cibernetică.</ListItem>
          <ListItem>⭐ Sprijinirea structurilor specializate pentru reacția la incidentele de securitate cibernetică.</ListItem>
          <ListItem>⭐ Investigare și izolarea incidentelor cibernetice pentru prevenirea extinderii lor.</ListItem>
          <ListItem>⭐ Restaurarea echipamentelor și sistemelor afectate de atacuri cibernetice.</ListItem>
        </List>
      </Section>

      <SubTitle>Responsabilități ale Comandamentului Apărării Cibernetice</SubTitle>
      <Section>
        <List>
          <ListItem>📌 Managementul incidentelor cibernetice.</ListItem>
          <ListItem>📌 Protecția și reziliența infrastructurilor cibernetice militare.</ListItem>
          <ListItem>📌 Evaluarea riscurilor și amenințărilor cibernetice.</ListItem>
          <ListItem>📌 Cooperarea interinstituțională și internațională.</ListItem>
          <ListItem>📌 Contribuția la dezvoltarea reglementărilor și capabilităților de apărare cibernetică.</ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default Prezentare;
