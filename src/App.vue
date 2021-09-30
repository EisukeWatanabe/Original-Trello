<template>
  <div id="app">
    <board/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Board from './components/Board.vue';

export default Vue.extend({
  name: 'app',
  components: {
    Board
  }
});

</script>
