/* eslint-disable react/no-danger */
import React from 'react';
import { object } from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

import config from 'config';

const keys = ['item0', 'item1', 'item2', 'item3', 'item4', 'item5', 'item6'];

const ItemsContainer = ({ player }) => {
  const { items } = player;
  return (
    <div className="slef-align-center">
      {keys.map((key) => {
        if (items[key]) {
          return (
            <Tooltip
              key={key}
              title={(
                <div>
                  <p className="image-title">{items[key].name}</p>
                  <div dangerouslySetInnerHTML={{ __html: items[key].description }} />
                </div>
            )}
            >
              <img
                alt={`item-${key}`}
                src={`${config.DATA_DRAGON}/8.20.1/img/item/${items[key].image.full}`}
                width="30px"
                height="30px"
              />
            </Tooltip>);
        }
        return <span key={key} />;
      })}


    </div>
  );
};

ItemsContainer.propTypes = {
  player: object.isRequired,
};

export default ItemsContainer;
