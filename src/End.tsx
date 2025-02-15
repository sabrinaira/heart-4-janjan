import React from 'react';
import { motion } from 'framer-motion';

function End({ onRestart }) {
  return (
    <motion.div
      className='ending-container'
      initial={{ opacity: 0, y: 50 }} // Start off-screen and invisible
      animate={{ opacity: 1, y: 0 }} // Animate to visible and in place
      transition={{ duration: 1 }} // Animation duration
    >
      <h1>💖 Happy Valentine's Day! 💖</h1>
      <h2>That's all for now!</h2>
      <p>Thank you for being the best boyfriend ever.</p>
      <motion.button
        onClick={onRestart}
        whileHover={{ scale: 1.1 }} // Scale up on hover
        whileTap={{ scale: 0.9 }} // Scale down on click
      >
        Start Over
      </motion.button>
    </motion.div>
  );
}

export default End;
