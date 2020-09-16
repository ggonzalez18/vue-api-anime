import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mangas: [],
    manga: undefined,
    animes: [],
    anime: undefined,
  },
  mutations: {
    GET_MANGAS(state, series) {
      state.mangas = series
    },
    GET_MANGA(state, serie) {
      state.manga = serie
    },
    GET_ANIMES(state, series) {
      state.animes = series
    },
    GET_ANIME(state, serie) {
      state.anime = serie
    }
  },
  actions: {
    getMangas({ commit }) {
      Axios.get('https://api.jikan.moe/v3/search/manga?q=manga').then((response) => {
        commit('GET_MANGAS', response.data.results)
      })
    },
    getManga({ commit, }) {
      Axios.get('https://api.jikan.moe/v3/search/manga?q=manga').then((response) => {
        commit('GET_MANGA', response.data.results)
      })
    },
    getAnimes({ commit }) {
      Axios.get('https://api.jikan.moe/v3/search/anime?q=anime').then((response) => {
        commit('GET_ANIMES', response.data.results)
      })
    },
    getAnime({ commit, }) {
      Axios.get('https://api.jikan.moe/v3/search/manga?q=manga').then((response) => {
        commit('GET_ANIME', response.data.results)
      })
    }
  },
  modules: {
  }
})
