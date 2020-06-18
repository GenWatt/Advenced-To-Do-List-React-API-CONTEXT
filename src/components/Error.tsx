import React from "react";
import { errorVariants } from "../parameters/variants";
import { uniqueId } from "../helpers/uniqueId";
import { motion } from "framer-motion";
import { ITask } from "../parameters/interfaces";

interface Imessage {
  message: string;
  id: number;
}

const Error = ({ newTask }: { newTask: ITask }) => {
  const messages: Imessage[] = [];

  if (!newTask.title)
    messages.push({
      message: "Title should be filled",
      id: uniqueId(messages),
    });

  if (!newTask.date) {
    messages.push({
      message: "Date should be seted",
      id: uniqueId(messages),
    });
  }

  return (
    <motion.section
      variants={errorVariants}
      animate="animate"
      initial="initial"
      exit="exit"
    >
      <ul className="error-box">
        {messages.map(({ id, message }) => (
          <motion.li
            key={id}
            className="error-box__error-name"
            positionTransition
          >
            {message}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Error;
