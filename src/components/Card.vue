<template>
  <div class="c-Card">
    <button class="c-Card__closeButton" @click="removeCardFromList">
      ×
    </button>
    <div class="c-Card__body">
      {{ body }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    body: {
      type: String,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    },
    cardIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeCardFromList() {
      if(confirm('本当にこのカードを削除しますか')) {
        this.$store.dispatch('removecardfromlist', { cardIndex: this.cardIndex, listIndex: this.listIndex })
      }
    }
  },
});
</script>

<style lang="scss" scoped>

.c-Card {
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  padding: 30px 15px 40px;
  background-color: #05e6b9;
  -webkit-box-shadow: 1px 1px 10px 1px #04bdba;
  box-shadow: 1px 1px 10px 1px #04bdba;
  border-radius: 8px;
  width: 260px;
  cursor: pointer;

  &__closeButton {
    position: absolute;
    top: 6px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 8px;
    border-color: #013543;
    border-style: solid;
    background-color: #013543;
    color: white;
    margin: 5px;
  }

  &__body {
    font-size: 20px;
    width: 100%;
    word-wrap: break-word;
    color: black;
    font-weight: bold;
  }
}

</style>