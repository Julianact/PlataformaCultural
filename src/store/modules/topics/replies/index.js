import STATE from './state';
import ACTIONS from './actions';
import MUTATIONS from './mutations';
import GETTERS from './getters';
import LIKES from './likes';
import REJOINDERS from './rejoinders';

export default {
  namespaced: true,
  state: STATE,
  actions: ACTIONS,
  mutations: MUTATIONS,
  getters: GETTERS,
  modules: {
    rejoinders: REJOINDERS,
    likes: LIKES,
  },
};
