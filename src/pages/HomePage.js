import React, {useState} from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import NavbarButtons from '../components/NavbarButtons'
import BaraJos from '../components/BaraJos'
import ContainerP from '../components/ContainerP'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;             

`;

const HomePage = () => {
    const [activeComponent, setActiveComponent] = useState('prezentare'); // prezentare va fi componenta implicita

  return (
    <Container>
        <Navbar/>
        <NavbarButtons setActiveComponent={setActiveComponent} /> {/* Transmitem functia */}
        <ContainerP activeComponent={activeComponent} />
        <BaraJos/>

    </Container>
    
  )
}

export default HomePage