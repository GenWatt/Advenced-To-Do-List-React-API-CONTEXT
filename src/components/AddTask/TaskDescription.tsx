import React from "react";
import { TaskFormProps } from "./TaskTitle";

export default function TaskDescription({
  newTask,
  changeInputHandler,
}: TaskFormProps) {
  return (
    <>
      <label htmlFor="add-task-desc" className="form__add-task-label">
        Task Description
      </label>
      <textarea
        name="description"
        value={newTask.description}
        id="add-task-desc"
        className="form__add-task-input form__add-task-input--description"
        autoComplete="off"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          changeInputHandler(e)
        }
      ></textarea>
    </>
  );
}
