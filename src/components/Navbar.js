import React from 'react'
import styled from 'styled-components'
import Heraldica from '../images/Heraldica_AAC.png'
import LogoCertmil from '../images/LogoCertmil.png'
import Cyber from '../images/Site8.jpg'

const Container = styled.div`
    position: fixed;
    height: 25vh;
    // background-color: #227066;
    background-image: url(${Cyber});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100vw;
    z-index: 1000;
    border-bottom: solid 0.1vh #045b1e;
    display: flex;
    align-items: center;

`;


const LeftSection = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    align-items: center;
    // gap: 10px;
    
`;

const HeraldicaContainer = styled.div`
     width: 10vw;
    height: 23vh;
   // background-color: red;
    margin-left: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; 
`;


const ImgHeraldica = styled.img`
    width: 100%;
    height: 100%;
    //object-fit: cover; // Ajustează imaginea pentru a acoperi întregul container
`;

const RightSection = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    margin-left: 0vw;
    text-align: center;
    height: 100%;

`;

const ContainerLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30vw;
    height: 10vh;
    margin-left: 10vw;

`;

const ImgLogo = styled.img`
    height: 40vh;
    width: 100%;
`;

const ContainerText = styled.div`
    //background-color: pink;
    width: 40vw;
    height: auto;
    padding: 2%;
    text-align: left;
    margin-left: 12%;
`;

const Text1 = styled.p`
    color: white; 
    font-weight: bold;
    font-size: 3vh;
    margin: 0; 
`;

const Text2 = styled.p`
    color: white; 
    font-size: 2.2vh;
    margin: 0; 
`;

const Navbar = () => {
  return (
    <Container>

      <LeftSection>
        <HeraldicaContainer>
            <ImgHeraldica src={Heraldica} alt="Heraldica" />
        </HeraldicaContainer>
      </LeftSection>

      <RightSection>
        <ContainerLogo>
            <ImgLogo src={LogoCertmil} alt="LogoCertmil" />
        </ContainerLogo>
         <ContainerText>
            <Text1>Agenția de Apărare Cibernetică</Text1>
            <Text2>Centrul de Răspuns la Incidente de Securitate Cibernetică Principal</Text2>
         </ContainerText>
      </RightSection>

    </Container>
  )
}

export default Navbar
