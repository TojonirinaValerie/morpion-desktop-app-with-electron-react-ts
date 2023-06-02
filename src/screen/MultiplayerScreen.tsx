import { useEffect, useState } from 'react';
import Noeud from '../utils/Noeud';
import { ScoreGame } from '../interfaces/interface';
import { GameViewContainer } from '../styles/MultiplayerStyles';
import AddPlayersName from '../modals/AddPlayersName';
import Games from '../components/Games';
const MultiplayerScreen = () => {

  // ------------------------------------------------------------------------------
  const [node, setNode] = useState<Noeud>(Noeud.createNewNode());

  const [scoreGame, setScoreGame] = useState<ScoreGame>({
    game: 1,
    player1Name: 'Player 1',
    player1: 0,
    player2Name: 'Player 2',
    player2: 0,
    lastWon: 0,
  });

  const [showNameEntry, setShowNameEntry] = useState<boolean>(false);

  useEffect(() => {
    setShowNameEntry(true);
  }, []);
  // ------------------------------------------------------------------------------

  useEffect(() => {
    if (node.isTerminal()) {
      const result = node.eval(1);

      if (result === 0) {
        let newScore: ScoreGame = {
          ...scoreGame,
          lastWon: 0,
        };
        setScoreGame(newScore);
      } else {
        const isPlayer1Won = result === 100 ? true : false;

        if (isPlayer1Won) {
          let newScore: ScoreGame = {
            ...scoreGame,
            player1: scoreGame.player1 + 1,
            lastWon: 1,
          };
          setScoreGame(newScore);
        } else {
          let newScore: ScoreGame = {
            ...scoreGame,
            player2: scoreGame.player2 + 1,
            lastWon: -1,
          };
          setScoreGame(newScore);
        }
      }
    }
  }, [node]);

  // ***********************************************
  const handleAddMark = (index: number) => {
    if (node.isTerminal()) return;
    if (node.case[index] !== 0) return;

    let newNode = new Noeud([...node.case], node.tour);
    newNode.case[index] = newNode.tour;

    if (newNode.tour === 1) newNode.tour = -1;
    else {
      if (newNode.tour === -1) newNode.tour = 1;
    }
    setNode(newNode);
  };

  const handleStartGame = (player1Name: string, player2Name: string) => {
    let newScore: ScoreGame = { ...scoreGame };
    if (player1Name !== '')
      newScore = { ...newScore, player1Name: player1Name };
    if (player2Name !== '')
      newScore = { ...newScore, player2Name: player2Name };
    setScoreGame(newScore);

    setShowNameEntry(false);
  };
  // ***********************************************

  return (
    <GameViewContainer>
      <AddPlayersName
        isShow={showNameEntry}
        playerNumber={2}
        startGame={(p1Name: string, p2Name: string) =>
          handleStartGame(p1Name, p2Name)
        }
      />

      <Games
        node={node}
        setNode={setNode}
        scoreGame={scoreGame}
        handleAddMark={handleAddMark}
        setScoreGame={setScoreGame}
      />
    </GameViewContainer>
  );
};

export default MultiplayerScreen;