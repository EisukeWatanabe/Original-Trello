<template>
  <div class="c-List">
    <div class="c-List__header">
      <p class="c-List__title">{{ title }}</p>
      <p class="c-List__counter">Total:<span class="c-List__counter--color">{{ totalCardList }}</span></p>
      <div class="c-List__delete" @click="removeList">×</div>
    </div>
    <draggable group="cards" :list="cards" @end="$emit('change')">
      <card v-for="(item, index) in cards"
          :body="item.body"
          :key="item.id"
          :cardIndex="index"
          :listIndex="listIndex" />
      <card-add :list-index="listIndex"/>
    </draggable>
  </div>
</template>

<script>
import Vue from "vue";
import CardAdd from "@/components/CardAdd";
import Card from "@/components/Card";
import draggable from 'vuedraggable'

export default Vue.extend({
  components: {
    CardAdd,
    Card,
    draggable
  },
  props: {
    title: {
      type: String,
      required: true
    },
    cards: {
      type: Array,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
    totalCardList() {
      return this.cards.length
    }
  },
  methods: {
    removeList() {
      if(confirm('本当にこのリストを削除しますか？')) {
        this.$store.dispatch('removelist', { listIndex: this.listIndex })
      }
    },
  }
});
</script>

<style lang="scss" scoped>

.c-List {
  margin: 0 10px 20px;
  position: relative;
  display: inline-block;
  flex-direction: column;
  align-items: flex-start;
  min-width: 290px;
  width: 290px;
  background-color: #013543;
  -webkit-box-shadow: 1px 1px 10px 1px #04bdba;
  box-shadow: 1px 1px 10px 1px #04bdba;
  border-radius: 8px;
  padding: 15px;
  border: solid #013543 1px;
  color: gray;
  vertical-align: top;

  &__header {
    width: 290px;
    display: inline-flex;
    justify-content: space-between;
  }

  &__title {
    font-size: 20px;
    font-weight: bold;
    padding: 15px;
    color: white;
  }

  &__counter {
    font-weight: bold;
    color: white;
    padding: 15px;
    display: flex;
    align-items: center;

    &--color {
      color: #00d724;
    }
  }

  &__index {
    display: flex;
  }

  &__delete {
    position: absolute;
    top: 6px;
    right: 14px;
    font-size: 28px;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
}


</style>