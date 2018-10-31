

const state = {
    loading: {}
}

const getters = {
    LOADING : state => {
        return state.loading
    }
}

const mutations = {
    SET_LOADING: (state, payload) => {
        state.loading = payload
    }
}

const actions = {
    SET_LOADING: (context, payload ) => {
        context.commit("SET_LOADING", payload)
    }
}



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
