export const showFormVaraints = {
  initial: { scaleY: 0, opacity: 0, x: 400 },
  animate: { scaleY: 1, opacity: 1, x: 0 },
  exit: { scaleY: 0 },
};

export const showDoneTaskVariants = {
  animate: { y: 0, opacity: 1 },
  initial: { y: -100, opacity: 0 },
  exit: { scaleY: 0 },
};

export const expandVariants = {
  animate: { height: "auto", opacity: 1 },
  initial: { height: 0, opacity: 0 },
  exit: { height: 0, opacity: 0 },
};

export const successVaraints = {
  animate: { y: 0 },
  initial: { y: -100, x: "-50%" },
  exit: { x: 100, opacity: 0 },
};

export const errorVariants = {
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 40 },
  exit: { rotate: 40, opacity: 0, scale: 0 },
};

export const yourTaskVariants = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1 },
  exit: { scaleY: 0 },
};

export const staggerBtnVariantsConteiner = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const btnVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export const editVariants = {
  visible: { opacity: 1, rotateX: 0 },
  hidden: { opacity: 0, rotateX: 180 },
  left: { opacity: 0.3, scale: 0 },
};
