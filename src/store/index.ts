import { createStore } from 'vuex'
import { GithubApi } from '../services/github/GithubApi';

interface RootState {
  githubApiService: GithubApi | undefined,
}

export default createStore<RootState>({
  state: {
    githubApiService: undefined,
  },
  getters: {
    getGithubApiService (state) {
      return state.githubApiService;
    }
  },
  mutations: {
    setGithubApiService (state, service: GithubApi) {
      state.githubApiService = service;
    }
  },
  actions: {
    login (context, token: string) {
      context.commit('setGithubApiService', new GithubApi(token));
    }
  },
  modules: {
  }
})
