import Axios from "axios";

const state = {
    range: {}
}

const getters = {
    RANGE : state => {
        return state.range
    }
}

const mutations = {
    SET_RANGE: (state, payload) => {
        state.range = payload
    }
}

const actions = {
    GET_RANGE : async (context, payload) => {
        let { data } = await Axios.post( "/report/get-range", payload)
        context.commit("SET_RANGE", data)
    }
}



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
