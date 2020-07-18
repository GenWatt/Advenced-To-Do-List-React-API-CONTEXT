import React, { useContext, useState, useEffect, FormEvent } from "react";
import { ITask } from "../../parameters/interfaces";
import { motion } from "framer-motion";
import { editVariants } from "../../parameters/variants";

import "./EditTask.scss";

import { EditTaskContext } from "../../contexts/EditTaskContext";
import { TaskContext } from "../../contexts/TaskContext";
import { EDIT_TASK, ADD_TO_EDIT } from "../../contexts/Types/types";
import EditForm from "./EditForm";

const EditTask = () => {
  const { editedState, dispatch: editDispatch } = useContext(EditTaskContext);
  const { state, dispatch } = useContext(TaskContext);
  const [newValue, setNewValue] = useState<ITask>({
    title: "",
    description: "",
    date: "",
    id: 0,
  });

  const editTaskByID = (e: FormEvent) => {
    e.preventDefault();
    const { title, description, date, id } = newValue;
    const newTask = state.map((task) =>
      task.id === id ? { title, description, id, date } : task
    );
    dispatch({ type: EDIT_TASK, payload: newTask });

    editDispatch({
      type: ADD_TO_EDIT,
      payload: { isEdited: false, taskToEdit: null },
    });
  };

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
        onSubmit={(e) => editTaskByID(e)}
      >
        <EditForm setNewValue={setNewValue} newValue={newValue} />
      </form>
    </motion.section>
  );
};

export default EditTask;
