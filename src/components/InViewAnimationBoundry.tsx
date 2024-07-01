import React from "react";
import { delay, motion } from "framer-motion";

const InViewAnimationBoundry = ({
  children,
  ref,
  className,
}: {
  children: React.ReactNode;
  ref?: any;
  className: string;
}) => {
  const scrollAnimationVarients = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.06, 0.61, 0.25, 0.99],
        delay: 0.3,
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
    >
      {children}
    </motion.div>
  );
};

export default InViewAnimationBoundry;
