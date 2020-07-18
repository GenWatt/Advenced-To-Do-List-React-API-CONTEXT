import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { expandVariants } from "../../parameters/variants";
import { ExpandMore } from "@material-ui/icons";
import { ITask } from "../../parameters/interfaces";

interface MoreInfoProps {
  task: ITask;
  expand: null | number;
  setExpand: React.Dispatch<React.SetStateAction<null | number>>;
}

export default function MoreInfo({ task, expand, setExpand }: MoreInfoProps) {
  return (
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
  );
}
