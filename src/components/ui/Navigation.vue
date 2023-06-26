<template>
  <nav class="nav">
    <router-link class="link" to="/">Home</router-link> |
    <router-link class="link" to="/todos">Todos</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navigation",
  components: {},
});
</script>

<style lang="scss" scoped>
.nav {
  padding: 30px;

  .link {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
