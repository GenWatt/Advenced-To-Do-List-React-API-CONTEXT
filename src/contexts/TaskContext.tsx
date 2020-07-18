import React, { createContext, useReducer, useEffect } from "react";
import TaskReducer from "./TaskReducer";
import { ITask } from "../parameters/interfaces";
import { AddActions } from "./Types/actionTypes";

interface ITaskContext {
  state: ITask[];
  dispatch: React.Dispatch<AddActions>;
}

let initialState: ITaskContext = localStorage.getItem("task")
  ? JSON.parse(localStorage.getItem("task") || "")
  : [];

export const TaskContext = createContext<ITaskContext>(initialState);

const TaskContextProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch]: [ITask[], any] = useReducer(
    TaskReducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(state));
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
