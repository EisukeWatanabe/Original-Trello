<template>
  <div>
    <header class="Board__header">
      Trello
    </header>
    <main class="Board__main">
      <p class="info-line">All: <span class="info-line-color">{{ totalCardCount }}</span> tasks</p>
      <draggable class="list-index" :list="lists" @end="movingList">
        <list v-for="(item, index) in lists"
          :key="item.id"
          :title="item.title"
          :cards="item.cards"
          @change="movingCard"
          :listIndex="index" />
        <list-add/>
      </draggable>
    </main>
  </div>
</template>

<script>
import ListAdd from "./ListAdd";
import { mapState } from 'vuex'
import List from "./List.vue";
import draggable from "vuedraggable";

export default {
  components: {
    ListAdd,
    List,
    draggable
  },
  computed: {
    ...mapState([
      'lists'
    ]),
    totalCardCount() {
      return this.$store.getters.totalcardcount
    }
  },
  methods: {
    movingCard() {
      this.$store.dispatch('updateList', { lists: this.lists })
    },
    movingList() {
      this.$store.dispatch('updateList', { lists: this.lists })
    }
  }
}
</script>

<style lang="scss" scoped>
.Board {

  &__header {
    background: #011E26;
    height: 70px;
    color: #00FF77;
    font-style: italic;
    font-size: 40px;
    text-align: left;
    padding: 20px;
  }

  &__main {
    padding: 0 10px;
    width: calc(100% - 40px);
    height: 100%;
  }

}
</style>