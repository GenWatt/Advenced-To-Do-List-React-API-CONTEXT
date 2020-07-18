import { ITask } from "../../parameters/interfaces";
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./types";

export interface ActionAddTask {
  type: typeof ADD_TASK;
  payload: ITask;
}

export interface ActionDeleteTask {
  type: typeof DELETE_TASK;
  payload: number;
}

export interface ActionEditTask {
  type: typeof EDIT_TASK;
  payload: ITask[];
}

export type AddActions = ActionAddTask | ActionDeleteTask | ActionEditTask;
