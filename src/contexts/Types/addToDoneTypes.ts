import { ADD_TO_DONE, DELETE_TASK } from "./types";
import { ITask } from "../../parameters/interfaces";

export interface AddToDoneAction {
  type: typeof ADD_TO_DONE;
  payload: ITask;
}

export interface ActionDeleteDoneTask {
  type: typeof DELETE_TASK;
  payload: number;
}

export type AddToDoneActions = AddToDoneAction | ActionDeleteDoneTask;
