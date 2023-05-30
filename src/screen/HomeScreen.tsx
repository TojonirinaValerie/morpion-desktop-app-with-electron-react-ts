import MenuItem from '../components/MenuItem';
import {
  faGamepad,
  faGear,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import routes from '../constants/routes.json';
import { HomeContainer, MenuContainer, Title, TitleContainer } from '../styles/homeStyle';
import { useState } from 'react';
// import { ipcRenderer } from 'electron';

const HomeScreen = () => {
  // const closeApp = (e: any)=>{
  //   e.preventDefault()
  //   ipcRenderer.send('close');
  // }
  return (
    <HomeContainer>
      <TitleContainer>
        <Title>Morpion</Title>
        <Title>Game</Title>
      </TitleContainer>
      <MenuContainer>
        <MenuItem link={routes.NEW_GAME} label="Single Player" icon={faGamepad} />
        <MenuItem
          link={routes.MULTIPLAYER}
          label="Multiplayer"
          icon={faUserGroup}
        />
        <MenuItem link='' label="Settings" icon={faGear} />
        <MenuItem link="" label="Quitter" icon={faRightFromBracket} />
      </MenuContainer>
    </HomeContainer>
  );
};

export default HomeScreen;
