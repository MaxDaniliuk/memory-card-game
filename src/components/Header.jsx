import { useEffect, useRef, useState } from 'react';

export default function Header({ clickedCardIds, cardsNum, onChange }) {
  const [bestScore, setBestScore] = useState(0);
  const prevScoreRef = useRef(0);

  useEffect(() => {
    if (clickedCardIds.size === 0) {
      if (prevScoreRef.current > bestScore) {
        setBestScore(prevScoreRef.current);
      }
      prevScoreRef.current = 0;
    } else {
      prevScoreRef.current = clickedCardIds.size;
    }
  }, [clickedCardIds, bestScore]);

  return (
    <header>
      <div>
        <h1>Memory Card Game</h1>
        <p>
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      </div>
      <div className="score-info-block">
        <span className="sc">Score: {clickedCardIds.size} </span>
        <span className="sc">Best score: {bestScore}</span>
        <input
          type="range"
          min="5"
          max="12"
          onChange={e => onChange(e)}
          value={cardsNum}
        />
      </div>
    </header>
  );
}
