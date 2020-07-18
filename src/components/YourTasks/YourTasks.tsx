import React, { useContext } from "react";
import EditTask from "../EditTask/EditTask";
import ButtonSet from "./ButtonSet";

import "./YourTask.scss";

import { motion, AnimatePresence } from "framer-motion";
import { yourTaskVariants } from "../../parameters/variants";

import { TaskContext } from "../../contexts/TaskContext";
import { EditTaskContext } from "../../contexts/EditTaskContext";

const YourTasks: React.FC = () => {
  const { state, dispatch } = useContext(TaskContext);
  const { editedState, dispatch: editDispatch } = useContext(EditTaskContext);

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
              <ButtonSet
                task={task}
                editDispatch={editDispatch}
                dispatch={dispatch}
                editedState={editedState}
              />
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
