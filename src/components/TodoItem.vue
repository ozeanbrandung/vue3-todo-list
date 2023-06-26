<template>
  <div class="todo-item" :class="{ completed: todoItem.isCompleted }">
    <CustomInput
      class="input title"
      :value="todoItem.isEditing ? todoItem.titleInputValue : todoItem.title"
      @change="handleTitleValueChange"
      :readonly="!todoItem.isEditing"
    />

    <CustomTextarea
      class="input text"
      :value="todoItem.isEditing ? todoItem.textInputValue : todoItem.text"
      @change="handleTextValueChange"
      :readonly="!todoItem.isEditing"
    />

    <label class="checkbox-group">
      <span>Готово? </span>
      <input
        class="input checkbox"
        type="checkbox"
        :checked="todoItem.isCompleted"
        @change="toggleCompleted"
      />
    </label>

    <div class="buttons-group">
      <CustomButton class="button" @click="toggleEditing">
        {{ todoItem.isEditing ? "Отменить" : "Редактировать" }}
      </CustomButton>

      <CustomButton
        class="button delete"
        @click="deleteItem"
        v-if="!todoItem.isEditing"
      >
        Удалить
      </CustomButton>

      <CustomButton
        class="button"
        v-if="todoItem.isEditing"
        @click="saveChanges"
      >
        Сохранить изменения
      </CustomButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ChangeEvent, ITodo, MutationTypes } from "@/types/types";
import CustomButton from "@/components/ui/CustomButton.vue";
import CustomInput from "@/components/ui/CustomInput.vue";
import CustomTextarea from "@/components/ui/CustomTextarea.vue";

export default defineComponent({
  name: "TodoItem",
  components: { CustomTextarea, CustomInput, CustomButton },
  //components: {},
  props: {
    todoItem: {
      type: Object as PropType<ITodo>,
      required: true,
    },
  },
  methods: {
    // toggleCompleted() {
    //   this.$emit("toggleCompleted", this.todoItem.id);
    // },
    toggleCompleted() {
      this.$store.commit(MutationTypes.TOGGLE_COMPLETED, this.todoItem.id);
    },
    toggleEditing() {
      this.$store.commit(MutationTypes.TOGGLE_EDITING, this.todoItem.id);
    },
    handleTitleValueChange(e: ChangeEvent) {
      this.$store.commit(MutationTypes.CHANGE_TITLE_VALUE, {
        id: this.todoItem.id,
        value: e.target.value,
      });
    },
    handleTextValueChange(e: ChangeEvent) {
      this.$store.commit(MutationTypes.CHANGE_TEXT_VALUE, {
        id: this.todoItem.id,
        value: e.target.value,
      });
    },
    saveChanges() {
      this.$store.commit(MutationTypes.SAVE_CHANGES, this.todoItem.id);
    },
    deleteItem() {
      this.$store.commit(MutationTypes.REMOVE_TODO, this.todoItem.id);
    },
  },
  //emits: ["toggleCompleted"],
});
</script>

<style lang="scss" scoped>
.todo-item {
  padding: 20px;
  border: 2px solid crimson;
  width: 60%;
  margin: 0 auto;

  &.completed {
    border: 2px solid #42b983;
  }

  .input {
    margin-bottom: 20px;
  }

  .text {
    height: 80px;
  }

  .checkbox-group {
    display: block;
    font-size: 14px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  .button:not(:last-child) {
    margin-right: 20px;
  }

  .button.delete {
    background-color: crimson;
  }
}
</style>
