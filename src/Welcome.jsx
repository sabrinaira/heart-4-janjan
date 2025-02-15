import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function Welcome({ onStart }) {
  return (
    <motion.div
      className='welcome-container'
      initial={{ opacity: 0, y: -50 }} // Start off-screen and invisible
      animate={{ opacity: 1, y: 0 }} // Animate to visible and in place
      transition={{ duration: 1 }} // Animation duration
    >
      <h1>Hi Alfie! 💖</h1>
      <motion.button
        onClick={onStart}
        whileHover={{ scale: 1.1 }} // Scale up on hover
        whileTap={{ scale: 0.9 }} // Scale down on click
      >
        Click Me!
      </motion.button>
    </motion.div>
  );
}

// Add propTypes validation
Welcome.propTypes = {
  onStart: PropTypes.func.isRequired, // onStart is a required function
};


export default Welcome;
