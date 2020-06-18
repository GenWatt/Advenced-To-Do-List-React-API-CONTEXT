import React, { createContext, useReducer, useEffect } from "react";
import TaskReducer from "./TaskReducer";
import { uniqueId } from "../helpers/uniqueId";
import { IDoneTask } from "../parameters/interfaces";

interface IdoneContext {
  doneTaskState: IDoneTask[];
  addToDone: (task: IDoneTask) => void;
  deleteDoneTask: (id: number) => void;
}

const initialState: IdoneContext = localStorage.getItem("doneTask")
  ? JSON.parse(localStorage.getItem("doneTask") || "")
  : [];

export const DoneTasksContext = createContext<IdoneContext>(initialState);

const DoneTaskProvider: React.FC = ({ children }): JSX.Element => {
  const [doneTaskState, dispatch]: [IDoneTask[], any] = useReducer(
    TaskReducer,
    initialState
  );

  useEffect(
    () => localStorage.setItem("doneTask", JSON.stringify(doneTaskState)),
    [doneTaskState]
  );

  function addToDone(task: IDoneTask) {
    const doneDate: string = new Date().toLocaleString();

    task.id = uniqueId(doneTaskState);
    task.doneDate = doneDate;

    dispatch({
      type: "ADD_TO_DONE",
      payload: task,
    });
  }

  function deleteDoneTask(id: number) {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  }

  return (
    <DoneTasksContext.Provider
      value={{ doneTaskState, addToDone, deleteDoneTask }}
    >
      {children}
    </DoneTasksContext.Provider>
  );
};

export default DoneTaskProvider;
