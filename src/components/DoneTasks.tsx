import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { uniqueId } from "../helpers/uniqueId";
import {
  showDoneTaskVariants,
  expandVariants,
  staggerBtnVariantsConteiner,
  btnVariants,
} from "../parameters/variants";

import { TaskContext } from "../contexts/TaskContext";
import { DoneTasksContext } from "../contexts/AddToDone";

import { ExpandMore, DeleteForever, Cached } from "@material-ui/icons";

const DoneTasks: React.FC = () => {
  const { doneTaskState, deleteDoneTask } = useContext(DoneTasksContext);
  const { state, addTask } = useContext(TaskContext);
  const [expand, setExpand] = useState<null | number>(null);

  if (!doneTaskState.length)
    return (
      <motion.p
        className="no-match"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        No Task Done
      </motion.p>
    );

  return (
    <motion.section
      initial="initial"
      variants={showDoneTaskVariants}
      animate="animate"
      exit="exit"
      className="done-tasks"
    >
      {doneTaskState.map((task, index: number) => (
        <motion.article
          className="done-tasks__box"
          key={task.id}
          positionTransition
        >
          <div className="done-tasks__title">
            <div className="title__heading-set">
              <span className="heading-set__index">{index + 1}.</span>
              <p className="heading-set__title">{task.title}</p>
            </div>
            <motion.div
              className="title__btn-set"
              variants={staggerBtnVariantsConteiner}
              initial="initial"
              animate="animate"
            >
              <motion.button
                className="btn-set__btn "
                onClick={() => deleteDoneTask(task.id)}
                variants={btnVariants}
              >
                <DeleteForever />
              </motion.button>
              <motion.button
                className="btn-set__btn"
                onClick={async () => {
                  await deleteDoneTask(task.id);
                  delete task.doneDate;
                  task.id = uniqueId(state);
                  addTask(task);
                }}
                variants={btnVariants}
              >
                <Cached />
              </motion.button>
            </motion.div>
          </div>
          <div className="done-task__more-info">
            <AnimatePresence>
              {expand === task.id && (
                <motion.div
                  className="more-info__details"
                  variants={expandVariants}
                  animate="animate"
                  initial="initial"
                  exit="exit"
                  transition={{ duration: 0.2, ease: "linear", type: "tween" }}
                >
                  <p className="details__description">{task.description}</p>
                  <div className="details__date">
                    <span>Should Have Done: {task.date}</span>
                    <span>Finised at: {task.doneDate}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              className={
                expand === task.id
                  ? "more-info__expand-more more-info__expand-more--rotate "
                  : "more-info__expand-more "
              }
              onClick={() => {
                if (task.id === expand) return setExpand(null);
                setExpand(task.id);
              }}
            >
              <ExpandMore />
            </button>
          </div>
        </motion.article>
      ))}
    </motion.section>
  );
};

export default DoneTasks;
