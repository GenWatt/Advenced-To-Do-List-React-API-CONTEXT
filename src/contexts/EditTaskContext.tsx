import React, { createContext, useReducer } from "react";
import TaskReducer from "./TaskReducer";
import { ITask } from "../parameters/interfaces";
import { EditActions } from "./Types/editActionTypes";

export interface IEditState {
  task: ITask[];
  isEdited: boolean;
}

interface IEditContext {
  editedState: IEditState;
  dispatch: React.Dispatch<EditActions>;
}

let initialState: any = {
  task: [],
  isEdited: false,
};

export const EditTaskContext = createContext<IEditContext>(initialState);

const EditTaskContextProvider: React.FC = ({ children }): JSX.Element => {
  const [editedState, dispatch]: [IEditState, any] = useReducer(
    TaskReducer,
    initialState
  );

  return (
    <EditTaskContext.Provider value={{ editedState, dispatch }}>
      {children}
    </EditTaskContext.Provider>
  );
};

export default EditTaskContextProvider;
