import { useEffect, useState } from 'react';
import {
  ButtonAction,
  EnterPlayerTitle,
  InputContainer,
  InputMark,
  InputName,
} from '../styles/MultiplayerStyles';
import { color } from '../styles/variables';
import ModalContainer from './Modal';

interface AddPlayersNameProps {
  startGame: Function;
  playerNumber: number,
  isShow: boolean
}

const AddPlayersName = ({ startGame, playerNumber, isShow }: AddPlayersNameProps) => {
  const [player1Name, setPlayer1Name] = useState<string>('');
  const [player2Name, setPlayer2Name] = useState<string>('');

  const handleStartGame = () => {
    startGame(player1Name, player2Name);
  };

  return (
    <ModalContainer isShow={isShow}>
      <EnterPlayerTitle>Enter Players Names</EnterPlayerTitle>
      <InputContainer>
        <InputMark clr={color.player1}>x</InputMark>
        <InputName
          type="text"
          placeholder="Player 1"
          onChange={(e) => setPlayer1Name(e.target.value)}
        />
      </InputContainer>
      {
        playerNumber===2 &&
        <InputContainer>
          <InputMark clr={color.player2}>o</InputMark>
          <InputName
            type="text"
            placeholder="Player 2"
            onChange={(e) => setPlayer2Name(e.target.value)}
          />
        </InputContainer>
      }
      <ButtonAction
        isDisabled={false}
        className="btn-start-game"
        onClick={handleStartGame}
      >
        <h2 className="btn-label">Start Game</h2>
      </ButtonAction>
    </ModalContainer>
  );
};

export default AddPlayersName;
