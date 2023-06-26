import { ITodo } from "@/types/types";

export type State = {
  todos: ITodo[];
};

export const state: State = {
  todos: [
    // {
    //   id: "1",
    //   title: "LSkfjlaejflwekf",
    //   text: "sdfqwefwef",
    //   titleInputValue: "",
    //   textInputValue: "",
    //   isEditing: false,
    //   isCompleted: false,
    // },
  ],
};

//export type State = typeof state;
