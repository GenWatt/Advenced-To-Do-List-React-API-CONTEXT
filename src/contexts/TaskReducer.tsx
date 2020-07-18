import { ITask } from "../parameters/interfaces";
import {
  ADD_TO_EDIT,
  DELETE_TASK,
  ADD_TO_DONE,
  ADD_TASK,
  EDIT_TASK,
} from "./Types/types";

export default (state: ITask[], action: any) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];

    case ADD_TO_DONE:
      return [...state, action.payload];

    case DELETE_TASK:
      return state.filter((state) => state.id !== action.payload);

    case ADD_TO_EDIT:
      if (action.payload.taskToEdit === null) return { ...state, task: [] };
      return {
        isEdited: action.payload.isEdited,
        task: [action.payload.taskToEdit],
      };

    case EDIT_TASK:
      return action.payload;

    default:
      return state;
  }
};
