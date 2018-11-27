import React from 'react';
import { object } from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

const StatsContainer = ({ player }) => (
  <div className="stats-container slef-align-center">
    <div>
      <span>Level </span>
      <span>{player.champLevel}</span>
    </div>
    <div>
      <Tooltip title={`CS per minute is ${player.CSM}`}>
        <span>{`${player.totalCS} (${player.CSM}) CS`}</span>
      </Tooltip>
    </div>
  </div>
);

StatsContainer.propTypes = {
  player: object.isRequired,
};

export default StatsContainer;
