<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<!--<script lang="ts">-->
<!--import { defineComponent } from "vue";-->

<!--export default defineComponent({-->
<!--  name: "Template",-->
<!--  components: {},-->
<!--});-->
<!--</script>-->

<style lang="scss" scoped>
.btn {
  padding: 10px 20px;
  min-width: 200px;
  background-color: #42b983;
  color: white;
  height: 40px;
  cursor: pointer;
  box-shadow: 0 0 0 #42b983;
  transition: box-shadow 0.3s ease;
  border: none;
  font-size: 14px;
  font-family: Avenir, Helvetica, Arial, sans-serif;

  &:hover {
    box-shadow: 2px 2px 4px #42b983;
  }
}
</style>
