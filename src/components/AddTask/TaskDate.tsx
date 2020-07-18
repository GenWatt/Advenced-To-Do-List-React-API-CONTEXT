import React from "react";
import { TaskFormProps } from "./TaskTitle";

export default function TaskDate({
  newTask,
  changeInputHandler,
}: TaskFormProps) {
  return (
    <>
      <label htmlFor="task-deadline" className="form__add-task-label">
        Select Deadline
      </label>
      <input
        type="date"
        name="date"
        value={newTask.date}
        id="task-deadline"
        className="form__add-task-input"
        autoComplete="off"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          changeInputHandler(e)
        }
      />
    </>
  );
}
