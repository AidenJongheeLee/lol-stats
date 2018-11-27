import React from 'react';
import { object } from 'prop-types';
import config from 'config';
import Tooltip from '@material-ui/core/Tooltip';

const ImagesContainer = ({ player }) => (
  <div className="images-wrapper">
    <div className="image-container">
      <img
        alt="champion"
        src={`${config.DATA_DRAGON}/8.20.1/img/champion/${player.champion.image.full}`}
        width="70px"
        height="70px"
        style={{ borderRadius: '50%' }}
      />
      <p>{player.champion.name}</p>
    </div>
    <div className="image-container">
      <Tooltip
        title={(
          <div>
            <p className="image-title">{player.spell1.name}</p>
            {player.spell1.description}
          </div>
        )}
      >
        <img
          style={{ display: 'block' }}
          alt="skill-1"
          src={`${config.DATA_DRAGON}/8.20.1/img/spell/${player.spell1.image.full}`}
          width="30px"
          height="30px"
        />
      </Tooltip>

      <Tooltip
        title={(
          <div>
            <p className="image-title">{player.spell2.name}</p>
            {player.spell2.description}
          </div>
        )}
      >
        <img
          style={{ display: 'block' }}
          alt="skill-2"
          src={`${config.DATA_DRAGON}/8.20.1/img/spell/${player.spell2.image.full}`}
          width="30px"
          height="30px"
        />
      </Tooltip>
    </div>
    <div className="image-container">

      <Tooltip
        title={(
          <div>
            <p className="image-title">{player.primaryRune.name}</p>
            {player.primaryRune.shortDesc}
          </div>
      )}
      >
        <img
          style={{ display: 'block' }}
          alt="rune-1"
          src={`${config.DATA_DRAGON}/img/${player.primaryRune.icon}`}
          width="30px"
          height="30px"
        />
      </Tooltip>

      <Tooltip
        title={(
          <div>
            <p className="image-title">{player.secondaryRune.name}</p>
          </div>
        )}
      >
        <img
          style={{ display: 'block' }}
          alt="rune-2"
          src={`${config.DATA_DRAGON}/img/${player.secondaryRune.icon}`}
        />
      </Tooltip>
    </div>
  </div>
);

ImagesContainer.propTypes = {
  player: object.isRequired,
};

export default ImagesContainer;
