import { ITask } from "../../parameters/interfaces";
import { ADD_TO_EDIT } from "./types";

export interface ActionAddTaskToEdit {
  type: typeof ADD_TO_EDIT;
  payload: { isEdited: boolean; taskToEdit: ITask | null };
}

export type EditActions = ActionAddTaskToEdit;
