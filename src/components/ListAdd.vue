<template>
  <form :class="classList" @submit.prevent="addList">
  <input v-model="title"
      type="text"
      class="c-textInput"
      placeholder="Add new list"
      @focusin="startEditing"
      @focusout="finishEditing"
  >
  <button type="submit" class="c-addButton" v-if="isEditing || titleExists">Add</button>
  </form>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      title: '',
      isEditing: false,
    };
  },
  computed: {
    classList() {
      const classList = ['addlist']
      if (this.isEditing) {
        classList.push('active')
      }
      if (this.titleExists) {
        classList.push('addable')
      }
      return classList
    },
    titleExists() {
      return this.title.length > 0
    },
  },
  methods: {
    addList() {
      this.$store.dispatch('addlist', { title: this.title })
      this.title = ''
    },
    startEditing() {
      this.isEditing = true
    },
    finishEditing() {
      this.isEditing = false
    }
  }
});
</script>

<style lang="scss" scoped>

</style>