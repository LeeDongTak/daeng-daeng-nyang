import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const ModalContent = ({ id, className, children }: { id: string; className?: string; children: React.ReactNode }) => {
  return (
    <motion.div
      id={id}
      className={clsx(
        'flex justify-center items-center flex-col min-w-40 w-max bg-white rounded-2xl shadow-[0_0_10px_0_rgba(0,0,0,0.1)] col-[2] row-[2] z-[500]',
        className,
      )}
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default ModalContent;
