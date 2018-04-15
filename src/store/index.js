import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      count: 0
    },
    mutations:{//在这里做事件操作
      increment(state){
        state.count++
      }
    },
    actions:{//要处理mutations事件的时候 要经过这里，承上启下的作用(可以略去) 触发是将commit 改为dispatch即可
        // 这里可以处理异步、
      increment(context){
         context.commit('increment')
      }
    },
    getters:{
      getState(state){
        return state.count > 10 ? 10 : state.count
      }
    }
  })
  
  