const configuration = {
  production: {
    API: 'https://lol-stat-api.herokuapp.com',
    DATA_DRAGON: 'http://ddragon.leagueoflegends.com/cdn',
  },
  development: {
    API: 'https://lol-stat-api.herokuapp.com',
    DATA_DRAGON: 'http://ddragon.leagueoflegends.com/cdn',
  },
};

const config = configuration[process.env.REACT_APP_ENV || process.env.NODE_ENV];
window.config = config;
export default config;
