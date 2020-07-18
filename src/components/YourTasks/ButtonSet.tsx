import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  staggerBtnVariantsConteiner,
  btnVariants,
} from "../../parameters/variants";
import {
  DELETE_TASK,
  ADD_TO_EDIT,
  ADD_TO_DONE,
} from "../../contexts/Types/types";
import { uniqueId } from "../../helpers/uniqueId";
import { Done, Edit, DeleteForever } from "@material-ui/icons";
import { ITask } from "../../parameters/interfaces";
import { AddActions } from "../../contexts/Types/actionTypes";
import { DoneTasksContext } from "../../contexts/AddToDone";
import { IEditState } from "../../contexts/EditTaskContext";
import { EditActions } from "../../contexts/Types/editActionTypes";

interface ButtonSetProps {
  task: ITask;
  dispatch: React.Dispatch<AddActions>;
  editedState: IEditState;
  editDispatch: React.Dispatch<EditActions>;
}

export default function ButtonSet(props: ButtonSetProps) {
  const { dispatch, task, editDispatch, editedState } = props;
  const { dispatch: addToDoneDispatch, doneTaskState } = useContext(
    DoneTasksContext
  );

  const displayEditForm = (task: ITask) => {
    if (!editedState.task.length)
      editDispatch({
        type: ADD_TO_EDIT,
        payload: { isEdited: true, taskToEdit: task },
      });
    else if (editedState.task[0].id === task.id)
      editDispatch({
        type: ADD_TO_EDIT,
        payload: { isEdited: false, taskToEdit: null },
      });
  };

  return (
    <motion.div
      className="title-box__btn-set"
      variants={staggerBtnVariantsConteiner}
      initial="initial"
      animate="animate"
    >
      <motion.button
        className="btn-set__btn"
        variants={btnVariants}
        onClick={() => {
          const doneDate: string = new Date().toLocaleString();
          dispatch({ type: DELETE_TASK, payload: task.id });

          task.id = uniqueId(doneTaskState);
          task.doneDate = doneDate;
          addToDoneDispatch({ type: ADD_TO_DONE, payload: task });
        }}
      >
        <Done />
      </motion.button>
      <motion.button
        className={
          editedState.task.length && editedState.task[0].id === task.id
            ? "btn-set__btn btn-set__btn--active"
            : "btn-set__btn"
        }
        variants={btnVariants}
        onClick={() => displayEditForm(task)}
      >
        <Edit />
      </motion.button>
      <motion.button
        variants={btnVariants}
        className="btn-set__btn"
        onClick={() => dispatch({ type: DELETE_TASK, payload: task.id })}
      >
        <DeleteForever />
      </motion.button>
    </motion.div>
  );
}
