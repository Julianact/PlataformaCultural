const state = {
  url: 'http://localhost:4000/',
  response: {},
  error: {},
  waiting: false,
  httpConfigs: {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  },
};

export default state;
