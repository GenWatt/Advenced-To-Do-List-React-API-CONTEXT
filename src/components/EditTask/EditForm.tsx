import React from "react";
import { ITask } from "../../parameters/interfaces";

interface EditFormProps {
  newValue: ITask;
  setNewValue: React.Dispatch<React.SetStateAction<ITask>>;
}

export default function EditForm({ newValue, setNewValue }: EditFormProps) {
  return (
    <>
      <label htmlFor="edit-title" className="edit-form__label">
        Edit Title
      </label>
      <input
        type="text"
        id="edit-title"
        name="edit-title"
        value={newValue.title}
        onChange={(e) => setNewValue({ ...newValue, title: e.target.value })}
        className="edit-form__input"
      />

      <label htmlFor="edit-desc" className="edit-form__label">
        Edit Description
      </label>
      <input
        type="text"
        id="edit-desc"
        name="edit-desc"
        value={newValue.description}
        onChange={(e) =>
          setNewValue({ ...newValue, description: e.target.value })
        }
        className="edit-form__input"
      />

      <label htmlFor="edit-date" className="edit-form__label">
        Edit Date
      </label>
      <input
        type="date"
        id="edit-date"
        name="edit-date"
        value={newValue.date}
        onChange={(e) => setNewValue({ ...newValue, date: e.target.value })}
        className="edit-form__input"
      />

      <button className="edit-form__edit-btn" type="submit">
        Edit
      </button>
    </>
  );
}
