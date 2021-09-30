<template>
  <div class="l-wrapper">
    <header class="c-Board__header">
      <span class="c-Board__header--title">Trello</span>
    </header>
    <main class="c-Board__main">
      <p class="c-Board__infoLine">All: <span class="c-Board__infoLine-color">{{ totalCardCount }}</span> tasks</p>
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
import Vue from "vue";
import ListAdd from "./ListAdd";
import { mapState } from 'vuex'
import List from "./List.vue";
import draggable from "vuedraggable";

export default Vue.extend({
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
});
</script>

<style lang="scss" scoped>
.c-Board {

  &__header {
    height: 70px;
    font-style: italic;
    font-size: 55px;
    text-align: left;
    padding: 20px;

    &--title {
      color: #09ee74;
      text-shadow: 2px 2px 5px #04bd7c;
    }
  }

  &__main {
    padding: 0 10px;
    width: calc(100% - 40px);
    height: 100%;
  }

  &__infoLine {
    margin: 20px;
    font-size: 20px;
    color: white;

    &-color {
      color: #00FF77;
    }
  }

}

.list-index {
  display: flex;
}


</style>