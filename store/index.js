import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

const createStore = () => {
  return new Vuex.Store({
    state: {
      imageCDN: 'https://static.91chengzhong.cn',
      authUser: null,
      user: null,
      token: null,
      payments: []
    },
    getters,
    actions,
    mutations
  })
}

export default createStore
