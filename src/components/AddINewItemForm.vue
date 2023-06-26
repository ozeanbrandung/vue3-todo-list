<template>
  <div class="form">
    <CustomInput
      class="input title"
      :value="newTitle"
      @change="handleNewTitleChange"
    />

    <CustomTextarea
      class="input text"
      :value="newText"
      @change="handleNewTextChange"
    />

    <div>
      `<CustomButton class="button" @click="closeForm">Отмена</CustomButton>
      <CustomButton class="button" @click="handleAddNewItem"
        >Добавить</CustomButton
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomTextarea from "@/components/ui/CustomTextarea.vue";
import CustomInput from "@/components/ui/CustomInput.vue";
import { ChangeEvent } from "@/types/types";
import CustomButton from "@/components/ui/CustomButton.vue";
import { MutationTypes } from "@/types/types";

export default defineComponent({
  name: "AddNewItemForm",
  components: { CustomButton, CustomTextarea, CustomInput },
  data() {
    return {
      newTitle: "",
      newText: "",
    };
  },
  methods: {
    handleNewTitleChange(e: ChangeEvent) {
      this.newTitle = e.target.value;
    },
    handleNewTextChange(e: ChangeEvent) {
      this.newText = e.target.value;
    },
    handleAddNewItem() {
      this.$store.commit(MutationTypes.ADD_TODO, {
        id: new Date().toUTCString(),
        title: this.newTitle,
        text: this.newText,
        titleInputValue: "",
        textInputValue: "",
        isCompleted: false,
        isEditing: false,
      });
      this.$emit("closeForm", false);
    },
    closeForm() {
      this.$emit("closeForm", false);
    },
  },
  emits: ["closeForm"],
});
</script>

<style lang="scss" scoped>
.form {
  width: 60%;
  margin: 0 auto;
}
.button:not(:last-child) {
  margin-right: 20px;
}
.input {
  margin-bottom: 20px;
}
</style>
