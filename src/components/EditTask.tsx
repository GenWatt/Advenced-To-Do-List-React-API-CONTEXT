import React, { useContext, useState, useEffect } from "react";
import { ITask } from "../parameters/interfaces";
import { motion } from "framer-motion";
import { editVariants } from "../parameters/variants";

import { EditTaskContext } from "../contexts/EditTaskContext";
import { TaskContext } from "../contexts/TaskContext";

const EditTask = () => {
  const { editedState, setEditMode } = useContext(EditTaskContext);
  const { editTask } = useContext(TaskContext);
  const [newValue, setNewValue]: [ITask, any] = useState({
    title: "",
    description: "",
    date: "",
    id: 0,
  });

  useEffect(() => {
    if (editedState.task.length) {
      const [{ title, description, date, id }] = editedState.task;
      setNewValue({
        title: title,
        description: description,
        date: date,
        id: id,
      });
    }
  }, [editedState]);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit="left"
      variants={editVariants}
      className="edit-section"
    >
      <form
        action="#"
        className="edit-section__edit-form"
        onSubmit={(e) => {
          e.preventDefault();
          editTask(newValue);
          setEditMode(false);
        }}
      >
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
      </form>
    </motion.section>
  );
};

export default EditTask;
