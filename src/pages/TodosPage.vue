<template>
  <h1>Список дел</h1>

  <div class="add-group">
    <CustomButton v-if="!isAddFormOpened" @click="handleFormVisibility(true)">
      Добавьте дело!
    </CustomButton>
    <AddNewItemForm v-if="isAddFormOpened" @closeForm="handleFormVisibility" />
  </div>

  <TodoList :todo-list="todoList" v-if="todoList.length > 0" />
  <div v-else-if="!isAddFormOpened" class="empty">Список пока что пуст</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "@/components/TodoList.vue";
import { State } from "@/store/state";
import { mapState } from "vuex";
import AddNewItemForm from "@/components/AddINewItemForm.vue";
import CustomButton from "@/components/ui/CustomButton.vue";

export default defineComponent({
  name: "TodosPage",
  components: { CustomButton, AddNewItemForm, TodoList },
  //components: {},
  data() {
    return {
      isAddFormOpened: false,
    };
  },
  methods: {
    handleFormVisibility(mode: boolean) {
      this.isAddFormOpened = mode;
    },
  },
  computed: {
    // todoList() {
    //   return this.$store.state.todos;
    // },
    ...mapState<State>({
      todoList: (state: State) => state.todos,
    }),
  },
});
</script>

<style scoped lang="scss">
.add-group {
  width: 60%;
  margin: 0 auto 20px;
}

.empty {
  margin-bottom: 20px;
}
</style>
