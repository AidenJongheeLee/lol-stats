import axios from 'axios';

import { matchTypes } from 'types';
import config from 'config';

const getMatches = name => async (dispatch) => {
  try {
    dispatch({ type: matchTypes.GETTING_MATCHES });
    const matches = await axios.get(`${config.API}/matches/${name}?endIndex=5`);
    dispatch({
      type: matchTypes.GET_MATCHES,
      payload: {
        matches: matches.data.matches,
        totalGames: matches.data.totalGames,
        summonerName: matches.data.summonerName,
      },
    });
  } catch (error) {
    dispatch({ type: matchTypes.FAILED_TO_FETCH, payload: error });
  }
};

const loadMore = (name, page) => async (dispatch) => {
  dispatch({ type: matchTypes.GETTING_MATCHES });
  const startIndex = page * 5;
  const endIndex = startIndex + 5;

  const matches = await axios.get(
    `${config.API}/matches/${name}?beginIndex=${startIndex}&endIndex=${endIndex}`,
  );
  dispatch({
    type: matchTypes.LOAD_MORE,
    payload: {
      matches: matches.data.matches,
      totalGames: matches.data.totalGames,
      page: page + 1,
    },
  });
};

const matchActions = {
  getMatches,
  loadMore,
};

export { matchActions };
