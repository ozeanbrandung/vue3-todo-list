<template>
  <div class="todo-list">
    <!--    <div>-->
    <!--      <h4>{{ todoItem.title }}</h4>-->
    <!--      <div>{{ todoItem.text }}</div>-->
    <!--      <input type="checkbox" v-model="todoItem.isCompleted" />-->
    <!--    </div>-->
    <TodoItem
      v-for="todoItem in todoList"
      :key="todoItem.id"
      :todo-item="todoItem"
      class="todo-item"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ITodo } from "@/types/types";
import TodoItem from "@/components/TodoItem.vue";

export default defineComponent({
  name: "TodoList",
  components: { TodoItem },
  props: {
    todoList: {
      type: Array as PropType<ITodo[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.todo-list {
  width: 80%;
  margin: 0 auto;
}

.todo-item:not(:last-child) {
  margin-bottom: 20px;
}
</style>
