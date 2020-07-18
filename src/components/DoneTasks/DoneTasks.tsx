import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { showDoneTaskVariants } from "../../parameters/variants";

import "./DoneTask.scss";

import { DoneTasksContext } from "../../contexts/AddToDone";

import ButtonSet from "./ButtonSet";
import MoreInfo from "./MoreInfo";

const DoneTasks: React.FC = () => {
  const { doneTaskState, dispatch } = useContext(DoneTasksContext);
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
            <ButtonSet task={task} dispatch={dispatch} />
          </div>
          <MoreInfo task={task} expand={expand} setExpand={setExpand} />
        </motion.article>
      ))}
    </motion.section>
  );
};

export default DoneTasks;
