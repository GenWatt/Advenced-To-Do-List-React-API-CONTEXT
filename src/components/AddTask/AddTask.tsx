import React, { useState, useContext, useEffect } from "react";
import Error from "../Error/Error";
import Success from "../Success/Success";
import "./AddTask.scss";

import { TaskContext } from "../../contexts/TaskContext";
import { uniqueId } from "../../helpers/uniqueId";
import { showFormVaraints } from "../../parameters/variants";

import { motion, AnimatePresence } from "framer-motion";
import { ITask } from "../../parameters/interfaces";
import TaskTitle from "./TaskTitle";
import TaskDescription from "./TaskDescription";
import TaskDate from "./TaskDate";
import { ADD_TASK } from "../../contexts/Types/types";

const AddTask: React.FC = () => {
  const { state, dispatch } = useContext(TaskContext);
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
    dispatch({ type: ADD_TASK, payload: newTask });
    setNewTask({ title: "", description: "", date: "", id: 0 });
    setSuccess(true);
    setSubmit(false);
  };

  const changeInputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setNewTask({ ...newTask, [e.target.name]: e.target.value });

  useEffect(() => {
    if (!submited) return;
    if (!newTask.title || !newTask.date) setError(true);
    else setError(false);
  }, [submited, newTask]);

  useEffect(() => {
    if (!success) return;
    const timer = setTimeout(() => setSuccess(false), 3000);
    return () => clearTimeout(timer);
  }, [success]);

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
        <TaskTitle newTask={newTask} changeInputHandler={changeInputHandler} />
        <TaskDescription
          newTask={newTask}
          changeInputHandler={changeInputHandler}
        />
        <TaskDate newTask={newTask} changeInputHandler={changeInputHandler} />
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
