import { useState } from 'react';
import Welcome from './Welcome';
import Ending from './End';
import './App.css';

function App() {
  // State to track whether the app has started
  const [started, setStarted] = useState(false);

  // State to track whether the app has ended
  const [ended, setEnded] = useState(false);

  // List of reasons
  const reasons = [
    'You know I love you, right?',
    'very very much!',
    'Pero gimingaw ko nimo...',
    'You always know how to make me laugh',
    '...and sometimes cry haha!',
    "I'm kidding... maybe.",
    'I also miss your hugs.',
    'I miss the long night rides we had together.',
    'I always reminisce on our adventures together.',
    'You inspire me to be a better person.',
    'You’re also my best friend and my soulmate.',
    'You still need to teach me some Yu-Gi-Oh hehehe',
    'And maybe some more Pokémon lore too haha',
    'I also love how you always support my dreams.',
    'Your cheeks are also so very cute! hehe',
    'You make me feel loved every single day,',
    "Even if you're only online once a week.",
    'Anyway...',
    'I know both of us have been busy,',
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
        <div className='container'>
          <h1>💖</h1>
          <p id='reason'>{reasons[currentIndex]}</p>
          <button id='generate-btn' onClick={showNextReason}>
            Tell Me More
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
