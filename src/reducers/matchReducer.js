import { matchTypes } from 'types';

const initialState = {
  isLoading: false,
  matches: [],
  page: 0,
  totalGames: 0,
  summonerName: '',
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case matchTypes.GET_MATCHES: {
      return {
        ...state,
        isLoading: false,
        matches: payload.matches,
        totalGames: payload.totalGames,
        summonerName: payload.summonerName,
        page: state.page + 1,
        error: null,
      };
    }

    case matchTypes.LOAD_MORE: {
      const matches = [...state.matches, ...payload.matches];
      return {
        ...state,
        isLoading: false,
        page: payload.page,
        matches,
      };
    }

    case matchTypes.FAILED_TO_FETCH: {
      return { ...state, isLoading: false, error: payload };
    }

    case matchTypes.GETTING_MATCHES: {
      return { ...state, isLoading: true, error: null };
    }

    default:
      return state;
  }
};
