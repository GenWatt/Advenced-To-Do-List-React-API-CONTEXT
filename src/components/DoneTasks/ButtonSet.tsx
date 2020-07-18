import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  staggerBtnVariantsConteiner,
  btnVariants,
} from "../../parameters/variants";
import { DeleteForever, Cached } from "@material-ui/icons";
import { uniqueId } from "../../helpers/uniqueId";
import { ADD_TASK, DELETE_TASK } from "../../contexts/Types/types";
import { TaskContext } from "../../contexts/TaskContext";
import { AddToDoneActions } from "../../contexts/Types/addToDoneTypes";
import { ITask } from "../../parameters/interfaces";

interface IProps {
  task: ITask;
  dispatch: React.Dispatch<AddToDoneActions>;
}

export default function ButtonSet(props: IProps) {
  const { task, dispatch: doneDispatch } = props;
  const { state, dispatch } = useContext(TaskContext);

  const moveBackToTask = () => {
    doneDispatch({ type: DELETE_TASK, payload: task.id });

    delete task.doneDate;
    task.id = uniqueId(state);
    dispatch({ type: ADD_TASK, payload: task });
  };

  return (
    <motion.div
      className="title__btn-set"
      variants={staggerBtnVariantsConteiner}
      initial="initial"
      animate="animate"
    >
      <motion.button
        className="btn-set__btn "
        onClick={() => doneDispatch({ type: DELETE_TASK, payload: task.id })}
        variants={btnVariants}
      >
        <DeleteForever />
      </motion.button>
      <motion.button
        className="btn-set__btn"
        onClick={moveBackToTask}
        variants={btnVariants}
      >
        <Cached />
      </motion.button>
    </motion.div>
  );
}
