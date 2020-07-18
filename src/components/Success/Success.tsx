import React from "react";
import { successVaraints } from "../../parameters/variants";
import { motion } from "framer-motion";
import "./Success.scss";

export default function Success() {
  return (
    <motion.section
      className="success-alert"
      variants={successVaraints}
      animate="animate"
      initial="initial"
      exit="exit"
    >
      <h5>Task has added!</h5>
    </motion.section>
  );
}
