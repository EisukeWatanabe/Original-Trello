import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists')

const store =  new Vuex.Store({
  state: {
    lists: savedLists ? JSON.parse(savedLists): [
      {
        title: 'Todo',
        cards: [
          { body: 'Kotlin' }
        ]
      },
      {
        title: 'Doing',
        cards: [
          { body: 'Vue' },
          { body: 'Typescript' }
        ]
      },
      {
        title: 'Done',
        cards: []
      }
    ],
  },
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards:[] })
    },
    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    },
    addcardtolist(state, payload) {
      state.lists[payload.listIndex].cards.push({ body: payload.body })
    },
    removecardfromlist(state, payload) {
      state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1)
    },
    updateList(state, payload) {
      state.lists = payload.lists
    }
  },
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    },
    removelist(context, payload) {
      context.commit('removelist', payload)
    },
    addcardtolist(context, payload) {
      context.commit('addcardtolist', payload)
    },
    removecardfromlist(context, payload) {
      context.commit('removecardfromlist', payload)
    },
    updateList(context, payload) {
      context.commit('updateList', payload)
    }
  },
  getters: {
    totalcardcount(state) {
      let count = 0;
      state.lists.map((content: any) => count += content.cards.length)
      return count;
    }
  },
})

store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store