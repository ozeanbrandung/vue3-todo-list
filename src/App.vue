<template>
  <Navigation />
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}
</style>
<script>
import Navigation from "@/components/ui/Navigation";
import { defineComponent } from "vue";
import { ActionTypes, MutationTypes } from "@/types/types";

export default defineComponent({
  name: "App",
  components: { Navigation },
  beforeMount() {
    this.$store.commit(MutationTypes.INITIALIZE_LOCAL_STORAGE);
  },
});
// export default {
//   components: { Navigation },
// };
</script>
