import React, { createContext, useReducer } from "react";
import TaskReducer from "./TaskReducer";
import { ITask } from "../parameters/interfaces";

interface IeditState {
  task: ITask[];
  isEdited: boolean;
}

interface IeditContext {
  editedState: IeditState;
  setEditMode: (isEdited: boolean) => void;
  addTaskToEdit: (task: ITask | null) => void | null;
}

let initialState: any = {
  task: [],
  isEdited: false,
};

export const EditTaskContext = createContext<IeditContext>(initialState);

const EditTaskContextProvider: React.FC = ({ children }): JSX.Element => {
  const [editedState, dispatch]: [IeditState, any] = useReducer(
    TaskReducer,
    initialState
  );

  function addTaskToEdit(task: ITask | null) {
    if (task === null) return null;
    if (editedState.task.length && editedState.task[0].id === task.id) {
      task = null;
      setEditMode(false);
    }

    dispatch({
      type: "ADD_TASK_TO_EDIT",
      payload: task,
    });
  }

  function setEditMode(isEdited: boolean) {
    dispatch({
      type: "IS_EDITED",
      payload: isEdited,
    });
  }

  return (
    <EditTaskContext.Provider
      value={{ editedState, addTaskToEdit, setEditMode }}
    >
      {children}
    </EditTaskContext.Provider>
  );
};

export default EditTaskContextProvider;
