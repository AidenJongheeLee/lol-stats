import React from 'react';
import { object } from 'prop-types';

const KDAContainer = ({ player }) => (
  <div className="KDA slef-align-center">
    <span className="victory-text">{player.kills}</span>
    /
    <span className="defeat-text">
      {player.deaths}
    </span>
    /
    <span>{player.assists}</span>
  </div>
);

KDAContainer.propTypes = {
  player: object.isRequired,
};

export default KDAContainer;
