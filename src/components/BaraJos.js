import React from 'react'
import Heraldica from '../images/Heraldica_AAC.png'
import styled from 'styled-components'

const Container = styled.div`
    //height: 100%;
    height: 10vh;
    background-color: #041226;
    border-top: solid 0.1vh #045b1e;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 1.7vh;
`;

const FirstRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.15vh;
  margin-bottom: 0vh;
  margin-left: 7vw;
  border-bottom: solid 0.1vh gray;
  margin-right: 8vw;
  font-weight: bold;
`;

const Image = styled.img`
  height: 4vh;
  margin-right: 1vh;
    margin-top: 0.15vh;
`;

const SecondRow = styled.div`
  margin-bottom: 0vh;
//   margin-left: 5vw;

`;

const ThirdRow = styled.div`
  font-size: 1.7vh;
  margin-bottom: 0.3vh;
//   margin-left: 5vw;

`;

const BaraJos = () => {
  return (
    <Container>

      <FirstRow>
        <Image src={Heraldica} alt="Logo" />
        Agenția de Apărare Cibernetică
      </FirstRow>

      <SecondRow>
        Acest site poate conține informații NECLASIFICATE 
        {/* de modif cu SS */}
      </SecondRow>

      <ThirdRow>
         ©️ 2024 - Site realizat de Agenția de Apărare Cibernetică
      </ThirdRow>

    </Container>
  )
}

export default BaraJos