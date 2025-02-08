import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Welcome from './Welcome';
import Ending from './End';
import './App.css';

function App() {
  // State to track whether the app has started
  const [started, setStarted] = useState(false);
  // State to track whether the app has ended
  const [ended, setEnded] = useState(false);

  const reasons = [
    'You know I love you, right?',
    'very very much!',
    'Pero gimingaw ko nimo...',
    'You always know how to make me laugh',
    '...and sometimes cry haha!',
    "I'm kidding... maybe.",
    'I also miss your hugs.',
    'I always reminisce on our adventures together.',
    'I miss the long night rides,',
    "The dates we've had,",
    "and the movies we've watched together!",
    'Alfie...',
    'You’re also my best friend and my soulmate.',
    'You inspire me to be a better person.',
    'Besides your wisdom,',
    'Your cheeks are also so very cute!',
    'hehehehehehehe',
    'You still need to teach me some Yu-Gi-Oh hehehe',
    'and maybe some more Pokémon lore too lol.',
    'I also love how you always support my dreams.',
    'You make me feel loved every single day,',
    "Even if you're only online once a week.",
    'Anyway...',
    'I know both of us have been busy with our lives,',
    'Especially while being far apart',
    'But I hope this gift is enough to show my love for you,',
    "for this Valentine's Day.",
    'I love you so so much! 💖',
  ];

  // State to track the current reason index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to show the next reason
  const showNextReason = () => {
    if (currentIndex < reasons.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // If all reasons have been shown, end the app
      setEnded(true);
    }
  };

  // Function to restart the app
  const restartApp = () => {
    setStarted(false);
    setEnded(false);
    setCurrentIndex(0);
  };

  return (
    <div className='App'>
      {!started ? (
        <Welcome onStart={() => setStarted(true)} />
      ) : ended ? (
        <Ending onRestart={restartApp} />
      ) : (
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex} // Unique key for each reason to trigger animation
            className='container'
            initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
            animate={{ opacity: 1, x: 0 }} // Animate to visible and in place
            exit={{ opacity: 0, x: -100 }} // Exit off-screen to the left
            transition={{ duration: 0.5 }} // Animation duration
          >
            {/* <h1>💖</h1> */}
            <p id='reason'>{reasons[currentIndex]}</p>
            <motion.button
              id='generate-btn'
              onClick={showNextReason}
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on click
            >
              Tell Me More
            </motion.button>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
