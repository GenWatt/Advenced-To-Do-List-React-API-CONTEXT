import React from "react";
import { ITask } from "../../parameters/interfaces";

export interface TaskFormProps {
  newTask: ITask;
  changeInputHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function TaskTitle({
  newTask,
  changeInputHandler,
}: TaskFormProps) {
  return (
    <>
      <label htmlFor="add-task-title" className="form__add-task-label">
        Task Title
      </label>
      <input
        type="text"
        className="form__add-task-input"
        name="title"
        value={newTask.title}
        id="add-task-title"
        autoComplete="off"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          changeInputHandler(e)
        }
      />
    </>
  );
}
