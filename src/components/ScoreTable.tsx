import { Mark, PlayerName, PlayerScore, ScoreTableContainer } from '../styles/MultiplayerStyles';

interface ScoreTableProps {
  playerName: string;
  score: number;
  playerNumber: 1 | 2;
  isMain: boolean
}

const ScoreTable = ({playerName, score, playerNumber, isMain}: ScoreTableProps) => {
  
  return (
    <ScoreTableContainer isMain={isMain}>
      <PlayerName>{playerName}</PlayerName>
      <PlayerScore>{score === 0 ? '-' : score}</PlayerScore>
      <Mark markColor={playerNumber}>{playerNumber===1 ? 'x' : 'o'}</Mark>
    </ScoreTableContainer>
  );
};

export default ScoreTable;
