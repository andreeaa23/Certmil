import React, { useState } from 'react';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';

const Container = styled.div`
  position: fixed;
  height: 6vh;
  background-color: #041226;
  width: 100vw;
  border-bottom: solid 0.1vh #045b1e;
  align-items: center;
  margin-top: 25vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const IconWrapper = styled.div`
  margin: 0 0.6vw;
  color: #ffffff;
  cursor: pointer;
  font-size: 5vh;
  transition: color 0.3s, font-size 0.3s;

  &:hover {
    color: #00F700;
    font-size: 6vh;
  }
`;

const TextWrapper = styled.div`
  margin: 0 0.9vw;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
`;

const Text = styled.p`
  font-size: 2vh;
  color: #ffffff;
  margin: 0;
  cursor: pointer;
  transition: color 0.3s, transform 0.3s;

  &:hover {
   // color: #00F700;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #00F700;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 4vh;
  background-color: #041226;
  padding: 0.4vh 1vw;
  border: 0.1vh solid #045b1e;
  border-radius: 5px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  z-index: 1;
  width: 20vw;
`;

const DropdownItem = styled.p`
  font-size: 1.8vh;
  color: #ffffff;
  margin: 0;
  padding: 0.8vh 0;
  cursor: pointer;
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    color: #00F700;
    background-color: #041226;
  }
`;

const NavbarButtons = ({ setActiveComponent }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  let hideTimeout;

  const showDropdown = () => {
    clearTimeout(hideTimeout);
    setIsDropdownVisible(true);
  };

  const hideDropdown = () => {
    hideTimeout = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 200); // mică întârziere înainte de a închide meniul
  };

  return (
    <Container>
      <IconWrapper onClick={() => setActiveComponent('prezentare')}>
        <HomeIcon style={{ fontSize: "5vh", marginTop: "1vh" }} />
      </IconWrapper>

      <TextWrapper>
        <Text>Baza de cunoștințe</Text>
      </TextWrapper>

      <TextWrapper>
        <Text>Alerte și Buletine</Text>
      </TextWrapper>

      <DropdownContainer
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        <Text>Awareness</Text>
        
        <Dropdown isVisible={isDropdownVisible}>
          <DropdownItem onClick={() => setActiveComponent('cursCyber')}>
            Curs Cyber Security Awareness
          </DropdownItem>
          <DropdownItem onClick={() => setActiveComponent('postere')}>
            Postere
          </DropdownItem>
        </Dropdown>
      </DropdownContainer>

      <TextWrapper>
        <Text>Raportare incidente</Text>
      </TextWrapper>

      <TextWrapper>
        <Text>Articole informative</Text>
      </TextWrapper>

      <TextWrapper onClick={() => setActiveComponent('contact')}>
        <Text>Contact</Text>
      </TextWrapper>
    </Container>
  );
};

export default NavbarButtons;
