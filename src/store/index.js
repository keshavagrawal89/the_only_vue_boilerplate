import { createStore } from 'vuex';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { sessionService } from '../services/session';
// import router from '../router';

const store = createStore ({
  state: {
    user: null,
    fakeData: {
      'msg': 'I m yet to be fetched',
      'ts': Date.now()
    }
  },
  mutations: {
    setUser(state, userData) {
      state.user = userData
    },

    setData(state, data) {
      state.fakeData = data;
    },
  },
  actions: {
    async signUp({ commit }, { email, password }) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        commit('setUser', userCredential.user);
      } catch (error) {
        console.error(error);
      }
    },
    async signIn({ commit }, { email, password }) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        commit('setUser', userCredential.user);

      } catch (error) {
        console.error(error);
      }
    },
    async logOut({ commit }) {
      try {
        await signOut(auth);
        commit('setUser', null);
      } catch (error) {
        console.error(error);
      }
    },

    setUser({ commit }, user) {
        commit('setUser', user);
    },

    testAction() {
        sessionService.getPosts().then((response) => {
            response.data['data']['ts'] = Date.now();
            this.commit('setData', response.data['data'])
        });
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.user !== null
    },
    user(state) {
      return state.user ? state.user : null;
    },
    fakeData(state) {
      return state.fakeData;
    },    
  },
});

export default store;