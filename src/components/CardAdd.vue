<template>
  <form :class="classList" @submit.prevent="addCardToList">
    <input
      v-model="body"
      type="text"
      class="c-textInput"
      placeholder="Add new card"
      @focusin="startEditing"
      @focusout="finishEditing"
    />
    <button type="submit" class="c-addButton" v-if="isEditing || bodyExists">
      Add
    </button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    listIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      body: '',
      isEditing: false
    }
  },
  computed: {
    classList() {
      const classList = ['addcard']
      if (this.isEditing) {
        classList.push('active')
      }
      if (this.bodyExists) {
        classList.push('addable')
      }
      return classList;
    },
    bodyExists():boolean {
      return this.body.length > 0
    }
  },

  methods: {
    startEditing() {
      this.isEditing = true
    },
    finishEditing() {
      this.isEditing = false
    },
    addCardToList() {
      this.$store.dispatch('addcardtolist', {body: this.body, listIndex: this.listIndex})
      this.body = ''
    }
  }
});
</script>