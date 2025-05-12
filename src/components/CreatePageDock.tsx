"use client";
import { Button } from "@nextui-org/react";
import { FileText, LucideSettings2, Menu, PenBox } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CreatePageDock({
  activeSection,
  setActiveSection,
}: {
  activeSection: number;
  setActiveSection: any;
}) {
  const [showItems, setShowItems] = useState(true);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children animations
        delayChildren: 0.1, // Delay before children start animating
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1, // Reverse stagger on exit
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20, // Start from below
      scale: 0.8, // Start smaller
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      y: -20, // Exit towards top
      scale: 0.8,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
      },
    },
  };

  const menuButtonVariants = {
    initial: { rotate: 0 },
    active: {
      rotate: 45,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <AnimatePresence mode="wait">
        {showItems && (
          <motion.div
            className="flex flex-col items-center gap-2"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.div variants={itemVariants}>
              <Button
                onClick={() => setActiveSection(0)}
                variant="faded"
                size="sm"
                isIconOnly
                className={`${
                  activeSection == 0 ? "bg-primary-100 text-primary" : ""
                } `}
              >
                <PenBox size={16} />
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button
                onClick={() => setActiveSection(1)}
                className={`${
                  activeSection == 1 ? "bg-primary-100 text-primary" : ""
                } `}
                variant="faded"
                size="sm"
                isIconOnly
              >
                <LucideSettings2 size={16} />
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button
                className={`${
                  activeSection == 2 ? "bg-primary-100 text-primary" : ""
                } `}
                onClick={() => setActiveSection(2)}
                variant="faded"
                size="sm"
                isIconOnly
              >
                <FileText size={16} />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        variants={menuButtonVariants}
        animate={showItems ? "active" : "initial"}
      >
        <Button
          onClick={() => setShowItems(!showItems)}
          className="text-secondary-700"
          color="secondary"
          isIconOnly
        >
          <Menu size={24} />
        </Button>
      </motion.div>
    </div>
  );
}

export default CreatePageDock;
