<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

export default {
  data() {
    return {
      count: 1
    }
  },

  mounted() {

  }
}
</script>

<template>
  <button @click="count++">Count is {{ count }}</button>
</template>

<style scoped>

</style>
