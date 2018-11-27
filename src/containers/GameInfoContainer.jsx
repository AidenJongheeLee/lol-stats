import React from 'react';
import { object } from 'prop-types';

const GameInfoContainer = ({ game }) => (
  <div>
    <p>{game.gameCreation}</p>
    <p className={game.win ? 'victory-text' : 'defeat-text'}>
      {game.win ? 'Victory' : 'Defeat'}
    </p>
    <p>Duration</p>
    <p>{game.gameDuration}</p>
  </div>
);

GameInfoContainer.propTypes = {
  game: object.isRequired,
};

export default GameInfoContainer;
