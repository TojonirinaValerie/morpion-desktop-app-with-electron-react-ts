import { useEffect, useState } from 'react';
import Games from '../components/Games';
import { GameViewContainer } from '../styles/MultiplayerStyles';
import Noeud from '../utils/Noeud';
import { ScoreGame } from '../interfaces/interface';

const SinglePlayerScreen = () => {
  const [node, setNode] = useState<Noeud>(Noeud.createNewNode());
  // const [node, setNode] = useState<Noeud>(
  //   new Noeud([1, -1, 0, 0, 1, 0, 0, 0, 0], -1)
  // );

  const [scoreGame, setScoreGame] = useState<ScoreGame>({
    game: 1,
    player1Name: 'Player 1',
    player1: 0,
    player2Name: 'IA',
    player2: 0,
    lastWon: 0,
  });

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
    else{
      if(node.tour===-1){
        // Noeud.minimax(node, 4);
        let newNoeud: Noeud = Noeud.findBestMove(node, 2);
        setNode(newNoeud);
      }
    }

  }, [node]);

  const handleAddMark = (index: number) => {
    if (node.tour === -1) return;
    if (node.isTerminal()) return;
    if (node.case[index] !== 0) return;

    let newNode = node.addMarkAt(index);
    setNode(newNode);
  };
  return (
    <GameViewContainer>
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

export default SinglePlayerScreen;
