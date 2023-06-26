import { ChangeInputValuePayload, ITodo, MutationTypes } from "@/types/types";
import { State } from "./state";
import { MutationTree } from "vuex";
import { LOCAL_STORAGE_KEY } from "@/consts";

export type Mutations<S = State> = {
  [MutationTypes.ADD_TODO](state: S, payload: ITodo): void;
  [MutationTypes.REMOVE_TODO](state: S, payload: string): void;
  // [MutationTypes.EDIT_TODO](state: S, payload: ITodo): void;
  [MutationTypes.TOGGLE_COMPLETED](state: S, payload: string): void;
  [MutationTypes.TOGGLE_EDITING](state: S, payload: string): void;
  [MutationTypes.CHANGE_TITLE_VALUE](
    state: S,
    payload: ChangeInputValuePayload
  ): void;
  [MutationTypes.CHANGE_TEXT_VALUE](
    state: S,
    payload: ChangeInputValuePayload
  ): void;
  [MutationTypes.SAVE_CHANGES](state: S, payload: string): void;
  [MutationTypes.INITIALIZE_LOCAL_STORAGE](state: S): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.ADD_TODO](state, payload: ITodo) {
    state.todos.push(payload);
  },
  [MutationTypes.REMOVE_TODO](state, payload: string) {
    state.todos = state.todos.filter((todoItem) => todoItem.id !== payload);
  },
  // [MutationTypes.EDIT_TODO](state, payload: ITodo) {
  //   state.todos.map((todoItem) => {
  //     if (todoItem.id === payload.id) {
  //       return payload;
  //     }
  //     return todoItem;
  //   });
  // },
  [MutationTypes.TOGGLE_COMPLETED](state, payload: string) {
    state.todos = state.todos.map((todoItem) => {
      if (todoItem.id === payload) {
        return { ...todoItem, isCompleted: !todoItem.isCompleted };
      }
      return todoItem;
    });
  },
  [MutationTypes.TOGGLE_EDITING](state, payload: string) {
    state.todos = state.todos.map((todoItem) => {
      if (todoItem.id === payload) {
        return {
          ...todoItem,
          isEditing: !todoItem.isEditing,
          titleInputValue: todoItem.title,
          textInputValue: todoItem.text,
        };
      }
      return todoItem;
    });
  },
  [MutationTypes.CHANGE_TEXT_VALUE](state, payload: ChangeInputValuePayload) {
    state.todos = state.todos.map((todoItem) => {
      if (todoItem.id === payload.id) {
        return { ...todoItem, textInputValue: payload.value };
      }
      return todoItem;
    });
  },
  [MutationTypes.CHANGE_TITLE_VALUE](state, payload: ChangeInputValuePayload) {
    state.todos = state.todos.map((todoItem) => {
      if (todoItem.id === payload.id) {
        return { ...todoItem, titleInputValue: payload.value };
      }
      return todoItem;
    });
  },
  [MutationTypes.SAVE_CHANGES](state, payload: string) {
    state.todos = state.todos.map((todoItem) => {
      if (todoItem.id === payload) {
        return {
          ...todoItem,
          title: todoItem.titleInputValue,
          text: todoItem.textInputValue,
          isEditing: false,
        };
      }
      return todoItem;
    });
  },
  [MutationTypes.INITIALIZE_LOCAL_STORAGE](state) {
    const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localStorageData) {
      state.todos = JSON.parse(localStorageData) as ITodo[];
    }
  },
};
