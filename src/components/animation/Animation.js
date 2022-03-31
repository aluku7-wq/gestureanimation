/** @format */
export const sidebarVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, when: "beforeChildren" },
  },
};

export const sidebarchildrenVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: [0, 0.5, 1],
    x: [100, -100, 0],
    transition: { duration: 1 },
  },
};
