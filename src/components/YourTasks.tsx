import React, { useContext } from "react";
import EditTask from "./EditTask";

import { motion, AnimatePresence } from "framer-motion";
import { uniqueId } from "../helpers/uniqueId";
import { yourTaskVariants } from "../parameters/variants";
import {
  staggerBtnVariantsConteiner,
  btnVariants,
} from "../parameters/variants";

import { TaskContext } from "../contexts/TaskContext";
import { DoneTasksContext } from "../contexts/AddToDone";
import { EditTaskContext } from "../contexts/EditTaskContext";

import { Edit, DeleteForever, Done } from "@material-ui/icons";

const YourTasks: React.FC = () => {
  const { state, deleteTask } = useContext(TaskContext);
  const { addToDone, doneTaskState } = useContext(DoneTasksContext);
  const { editedState, addTaskToEdit, setEditMode } = useContext(
    EditTaskContext
  );

  if (!state.length)
    return (
      <motion.p
        className="no-match"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        No Tasks...
      </motion.p>
    );

  return (
    <motion.section
      className="current-tasks"
      variants={yourTaskVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {state.map((task, index: number) => {
        return (
          <motion.article
            key={task.id}
            className="current-tasks__box"
            positionTransition
          >
            <AnimatePresence>
              {editedState.task.length &&
                editedState.task[0].id === task.id && <EditTask />}
            </AnimatePresence>
            <div className="current-tasks__title-box">
              <span className="title-box__number-task">{index + 1}.</span>
              <h5 className="title-box__title">{task.title}</h5>
              <motion.div
                className="title-box__btn-set"
                variants={staggerBtnVariantsConteiner}
                initial="initial"
                animate="animate"
              >
                <motion.button
                  className="btn-set__btn"
                  variants={btnVariants}
                  onClick={async () => {
                    await deleteTask(task.id);
                    task.id = uniqueId(doneTaskState);
                    addToDone(task);
                  }}
                >
                  <Done />
                </motion.button>
                <motion.button
                  className={
                    editedState.task.length &&
                    editedState.task[0].id === task.id
                      ? "btn-set__btn btn-set__btn--active"
                      : "btn-set__btn"
                  }
                  variants={btnVariants}
                  onClick={() => {
                    setEditMode(true);
                    addTaskToEdit(task);
                  }}
                >
                  <Edit />
                </motion.button>
                <motion.button
                  variants={btnVariants}
                  className="btn-set__btn"
                  onClick={() => deleteTask(task.id)}
                >
                  <DeleteForever />
                </motion.button>
              </motion.div>
            </div>
            <div className="current-tasks__desc">
              <span className="desc__label">Description:</span>
              {task.description}
            </div>
            <div className="current-tasks__date">
              <span className="date__label">Deadline:</span>
              {task.date}
            </div>
          </motion.article>
        );
      })}
    </motion.section>
  );
};

export default YourTasks;
