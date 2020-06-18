import { ITask, IDoneTask } from "../parameters/interfaces";

export default (state: ITask[] | IDoneTask[], action: any) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];

    case "ADD_TO_DONE":
      return [...state, action.payload];

    case "DELETE_TASK":
      return state.filter((state) => state.id !== action.payload);

    case "ADD_TASK_TO_EDIT":
      if (action.payload === null) return { ...state, task: [] };
      return { ...state, task: [action.payload] };

    case "IS_EDITED":
      return { ...state, isEdited: action.payload };

    case "EDIT_TASK":
      return action.payload;

    default:
      return state;
  }
};
