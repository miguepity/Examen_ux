<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import login from './components/login.vue'
import principal from './components/principal.vue'

export default {
  name: 'app',
  components: {
    login,
    principal
  }
}
</script>
