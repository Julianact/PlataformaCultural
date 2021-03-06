const mutations = {
  SET_NEXT_ROUTE(state, { route }) {
    state.nextRoute = route;
  },
  SET_AUTHENTICATION(state) {
    state.authenticated = true;
  },
  RESET_AUTHENTICATION(state) {
    state.authenticated = false;
  },
};

export default mutations;
