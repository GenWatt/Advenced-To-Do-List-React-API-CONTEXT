import React, { createContext, useReducer, useEffect } from "react";
import TaskReducer from "./TaskReducer";
import { ITask } from "../parameters/interfaces";

interface ITaskContext {
  state: ITask[];
  addTask: (task: ITask) => void;
  deleteTask: (id: number) => void;
  editTask: (task: ITask) => void;
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

  function addTask(task: ITask) {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  }

  function deleteTask(id: number) {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  }

  function editTask({ title, description, id, date }: ITask) {
    const newTask = state.map((task) =>
      task.id === id ? { title, description, id, date } : task
    );

    dispatch({
      type: "EDIT_TASK",
      payload: newTask,
    });
  }

  return (
    <TaskContext.Provider value={{ state, addTask, deleteTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
