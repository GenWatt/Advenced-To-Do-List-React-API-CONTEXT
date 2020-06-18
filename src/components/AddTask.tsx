import React, { useState, useContext, useEffect } from "react";
import Error from "./Error";
import Success from "./Success";

import { TaskContext } from "../contexts/TaskContext";
import { uniqueId } from "../helpers/uniqueId";
import { showFormVaraints } from "../parameters/variants";

import { motion, AnimatePresence } from "framer-motion";
import { ITask } from "../parameters/interfaces";

const AddTask: React.FC = () => {
  const { state, addTask } = useContext(TaskContext);
  const [newTask, setNewTask] = useState<ITask>({
    title: "",
    description: "",
    date: "",
    id: 0,
  });
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [submited, setSubmit] = useState<boolean>(false);

  const createTaskHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (error) return;

    newTask.id = uniqueId(state);
    addTask(newTask);
    setNewTask({ title: "", description: "", date: "", id: 0 });
    successAlert();
    setSubmit(false);
  };

  const successAlert = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const changeInputHandler = (e: any) =>
    setNewTask({ ...newTask, [e.target.name]: e.target.value });

  useEffect(() => {
    if (!submited) return;
    if (!newTask.title || !newTask.date) setError(true);
    else setError(false);
  }, [submited, newTask]);

  useEffect(() => () => setSuccess(false), []);

  return (
    <section>
      <motion.form
        action="#"
        className="form"
        onSubmit={(e) => createTaskHandler(e)}
        variants={showFormVaraints}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: "tween" }}
      >
        <AnimatePresence> {success && <Success />}</AnimatePresence>
        <AnimatePresence>
          {error && <Error newTask={newTask} />}
        </AnimatePresence>
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
          onChange={(e) => changeInputHandler(e)}
        />
        <label htmlFor="add-task-desc" className="form__add-task-label">
          Task Description
        </label>
        <textarea
          name="description"
          value={newTask.description}
          id="add-task-desc"
          className="form__add-task-input form__add-task-input--description"
          autoComplete="off"
          onChange={(e) => changeInputHandler(e)}
        ></textarea>
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
          onChange={(e) => changeInputHandler(e)}
        />
        <button
          type="submit"
          className="form__add-btn"
          onClick={() => setSubmit(true)}
        >
          Add Task
        </button>
      </motion.form>
    </section>
  );
};

export default AddTask;
