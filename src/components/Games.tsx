import { useEffect, useState } from "react";
import { ScoreGame } from "../interfaces/interface";
import ModalContainer from "../modals/Modal";
import { ButtonAction, ButtonContainer, FooterContainer, GameCase, GameSectionContainer, GameTable, GameTableRow, Mark } from "../styles/MultiplayerStyles";
import Noeud, { NodeValue } from "../utils/Noeud";
import ScoreTable from "./ScoreTable";
import routes from '../constants/routes.json';

interface GamesProps {
  node: Noeud,
  setNode: Function,
  scoreGame: ScoreGame,
  setScoreGame: Function,
  handleAddMark: Function
}

const Games = ({scoreGame, node, handleAddMark, setNode, setScoreGame}: GamesProps) => {

  const [showAlert, setShowAlert] = useState<boolean>(false);
  
  useEffect(() => {
    if(node.isTerminal()){
      setShowAlert(true);
    }
  }, [scoreGame]);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  
  const handleResetGame = () => {
    if (node.isTerminal()) {
      let newScore: ScoreGame = {
        ...scoreGame,
        game: scoreGame.game + 1,
        lastWon: 0,
      };
      setScoreGame(newScore);
      setNode(Noeud.createNewNode());
    }
  };

  return (
    <>
      <h1>Game : {scoreGame.game}</h1>
      <GameSectionContainer>
        <ScoreTable
          playerName={scoreGame.player1Name}
          score={scoreGame.player1}
          playerNumber={1}
          isMain={node.tour === 1 && true}
        />

        <GameTable>
          {[0, 1, 2].map((item: number, index: number) => (
            <GameTableRow key={`row-${index}-${item}`}>
              {node.case.map((value: NodeValue, index: number) => {
                let q: number = Math.floor(index / 3);
                if (q === item) {
                  return (
                    <GameCase
                      key={`cel-${index}`}
                      tour={node.tour}
                      isVide={value === 0 ? true : false}
                      isTerminal={node.isTerminal()}
                      onClick={() => handleAddMark(index)}
                    >
                      {value === 1 && <Mark markColor={1}>x</Mark>}
                      {value === -1 && <Mark markColor={2}>o</Mark>}
                    </GameCase>
                  );
                }
              })}
            </GameTableRow>
          ))}
        </GameTable>

        <ScoreTable
          playerName={scoreGame.player2Name}
          score={scoreGame.player2}
          playerNumber={2}
          isMain={node.tour === -1 && true}
        />
      </GameSectionContainer>
      

      <FooterContainer>
        <ButtonContainer to={routes.HOME}>
          <h2 className="btn-label">Back</h2>
        </ButtonContainer>
        <ButtonAction onClick={handleResetGame} isDisabled={!node.isTerminal()}>
          <h2 className="btn-label">Reset</h2>
        </ButtonAction>
      </FooterContainer>
      
      <ModalContainer isShow={showAlert}>
        <p>
          {scoreGame.lastWon === 0
            ? 'Partie nulle'
            : `${
                scoreGame.lastWon === 1
                  ? scoreGame.player1Name
                  : scoreGame.player2Name
              } a gagné`}
        </p>
        <button onClick={handleCloseAlert}> OK </button>
      </ModalContainer>
    </>
  );
};

export default Games;
