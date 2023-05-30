import styled from 'styled-components';
import { ButtonStyle, ButtonStyleHover, Container } from './GlobalStyle';
import { color, spacing } from './variables';
import { Link } from 'react-router-dom';

export const GameTableWidth = 350;
export const GameTableSpacing = 14;
export const CaseWidth = (GameTableWidth - GameTableSpacing * 4) / 3;

export const GameViewContainer = styled.div`
  ${Container}
  justify-content: space-evenly;
`;

export const GameSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;
export const GameTable = styled.div`
  background-color: ${color.accent};
  width: ${GameTableWidth}px;
  height: ${GameTableWidth}px;
  border-radius: ${GameTableSpacing}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const GameTableRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-evenly;
`;

export const ButtonContainer = styled(Link)`
  ${ButtonStyle}
  &:hover {
    ${ButtonStyleHover}
  }
`;

export const ButtonAction = styled.div<{ isDisabled: boolean }>`
  ${ButtonStyle}

  ${({ isDisabled }) =>
    isDisabled &&
    `
    background-color: ${color.buttonDisabled};
    color: ${color.textDisabled};
    cursor: default;
  `}
  
  ${({ isDisabled }) =>
    !isDisabled &&
    `
    &:hover {
      ${ButtonStyleHover}
      .btn-label{
      color: ${color.secondary}
    }
    }
  `}
`;

export const ScoreTableContainer = styled.div<{ isMain: boolean }>`
  width: 100px;
  background-color: ${color.secondary};
  padding: ${spacing.sm}px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${spacing.sm}px;
  text-align: center;
  overflow-wrap: break-word;
  border: solid 2px ${({ isMain }) => (isMain ? color.white : color.secondary)};
`;

export const PlayerName = styled.div`
  font-size: 1.1em;
  font-weight: 400;
  user-select: none;
`;

export const PlayerScore = styled.div`
  font-size: 3em;
  font-weight: 400;
  user-select: none;
`;


export const EnterPlayerTitle = styled.div`
  font-size: 1.8em;
  font-weight: 500;
  margin-bottom: ${spacing.sm}px;
`;
export const InputContainer = styled.div`
  background-color: ${color.secondary};
  margin: ${spacing.xxs}px ${spacing.md}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 ${spacing.sm}px;
`;

export const InputName = styled.input`
  background-color: #00000000;
  color: ${color.text};
  padding: ${spacing.xs}px;
  border: none;
  font-size: 1.2em;
  width: 30vw;

  &:focus {
    border: none;
    box-shadow: none;
    outline: none;
  }

  &::placeholder {
    color: ${color.textDisabled};
  }
`;

export const InputMark = styled.div<{ clr: string }>`
  font-size: 2em;
  margin-top: -7px;
  margin-right: ${spacing.xxs}px;
  color: ${({ clr }) => clr};
`;


export const AlertContainerStyle = styled.div`
position: absolute;
z-index: 3;
background-color: ${color.background};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: ${spacing.sm}px;
box-shadow: 0 0 5px ${color.grey};
padding: ${spacing.sm}px ${spacing.lg}px;
transition: all 300ms cubic-bezier(.58,.53,.15,1.4);
`;

export const ModalBack = styled.div`
position: absolute;
z-index: 2;
width: 100vw;
height: 100vh;
background-color: ${color.alertBackground};
`;



export const GameCase = styled.div<{
  tour: 1 | -1;
  isVide: boolean;
  isTerminal: boolean;
}>`
  background-color: ${color.secondary};
  width: ${CaseWidth}px;
  height: ${CaseWidth}px;
  border-radius: ${GameTableSpacing}px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    ${({ isVide, tour, isTerminal }) =>
      isVide &&
      !isTerminal &&
      `background-color: ${tour === 1 ? color.player1Dark : color.player2Dark}`}
  }
`;

export const Mark = styled.p<{ markColor: 1 | 2 }>`
  font-size: 7em;
  font-weight: 600;
  margin-top: -25px;
  color: ${({ markColor }) =>
    markColor === 1 ? color.player1 : color.player2};
  cursor: default;
  user-select: none;
`;