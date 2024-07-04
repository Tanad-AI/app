import React from "react";
import { delay, motion } from "framer-motion";

const InViewAnimationBoundry = ({
  children,
  ref,
  className,
  dir,
  delay,
}: {
  children?: React.ReactNode;
  ref?: any;
  className: string;
  dir?: "ltr" | "rtl";
  delay?: number;
}) => {
  if (delay == undefined) delay = 0.3;
  const scrollAnimationVarients = {
    hidden: { opacity: 0, y: 150 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.06, 0.61, 0.25, 0.99],
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={scrollAnimationVarients}
      viewport={{ once: true }}
      ref={ref}
      className={className}
      dir={dir}
    >
      {children}
    </motion.div>
  );
};

export default InViewAnimationBoundry;
