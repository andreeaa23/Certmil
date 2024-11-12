import React from 'react'
import styled from 'styled-components'
import Prezentare from '../pages/Prezentare'
import Contact from '../pages/Contact'
import Postere from '../pages/Postere'
import CursCyber from '../pages/CursCyber'

const Container = styled.div`
  margin-top: 31vh;
  // height: 96vh;
  height: auto;
  width: 100vw;
  background-color: #F5F5F5;
  padding: 2vh; 
  overflow-y: auto; 
`;


const ContainerP = ({ activeComponent }) => {
  return (
    
    <Container>
      {activeComponent === 'prezentare' && <Prezentare />}
      {activeComponent === 'contact' && <Contact />}
      {activeComponent === 'postere' && <Postere />}
      {activeComponent === 'cursCyber' && <CursCyber />}
    </Container>
  )
}

export default ContainerP