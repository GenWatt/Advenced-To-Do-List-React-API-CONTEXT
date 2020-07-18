import React, { createContext, useReducer, useEffect } from "react";
import TaskReducer from "./TaskReducer";
import { AddToDoneActions } from "./Types/addToDoneTypes";
import { ITask } from "../parameters/interfaces";

interface IDoneContext {
  doneTaskState: ITask[];
  dispatch: React.Dispatch<AddToDoneActions>;
}

const initialState: IDoneContext = localStorage.getItem("doneTask")
  ? JSON.parse(localStorage.getItem("doneTask") || "")
  : [];

export const DoneTasksContext = createContext(initialState);

const DoneTaskProvider: React.FC = ({ children }): JSX.Element => {
  const [doneTaskState, dispatch]: [ITask[], any] = useReducer(
    TaskReducer,
    initialState
  );

  useEffect(
    () => localStorage.setItem("doneTask", JSON.stringify(doneTaskState)),
    [doneTaskState]
  );

  return (
    <DoneTasksContext.Provider value={{ doneTaskState, dispatch }}>
      {children}
    </DoneTasksContext.Provider>
  );
};

export default DoneTaskProvider;
