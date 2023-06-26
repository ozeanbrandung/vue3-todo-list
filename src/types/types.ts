export interface ITodo {
  id: string;
  title: string;
  text: string;
  isCompleted: boolean;
  isEditing: boolean;
  titleInputValue: string;
  textInputValue: string;
}

export enum MutationTypes {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  //EDIT_TODO = "EDIT_TODO",
  TOGGLE_COMPLETED = "TOGGLE_COMPLETED",
  TOGGLE_EDITING = "TOGGLE_EDITING",
  CHANGE_TITLE_VALUE = "CHANGE_TITLE_VALUE",
  CHANGE_TEXT_VALUE = "CHANGE_TEXT_VALUE",
  SAVE_CHANGES = "SAVE_CHANGES",
  INITIALIZE_LOCAL_STORAGE = "INITIALIZE_LOCAL_STORAGE",
}

export type ChangeInputValuePayload = {
  id: string;
  value: string;
};

export interface ChangeEvent extends Event {
  target: HTMLInputElement;
}

export enum ActionTypes {
  INITIALIZE_LOCAL_STORAGE = "INITIALIZE_LOCAL_STORAGE",
}
