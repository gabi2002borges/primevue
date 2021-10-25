import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      name: 'Gabriela',
      email: 'gb54081profissional@gmail.com'
    }
  },
  mutations: {

    registerUser(state, payload){
      state.user.name = payload;
      console.log("Nome alterado!");
    }
  },
  actions: {
  },
  modules: {
  }
})
