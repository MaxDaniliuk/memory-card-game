import { useEffect, useRef, useState } from 'react';

export default function Header({ clickedCardIds, onChange }) {
  const [bestScore, setBestScore] = useState(0);
  const prevScoreRef = useRef(0);
  const [cardsNumber, setCardsNumber] = useState(5);

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
    <header className="p-[1em] flex flex-col justify-between mb-[clamp(3em,5vw,5em)] md:flex-row gap-[3vw]">
      <div>
        <h1 className="font-x">Memory Card Game</h1>
        <p className="pt-[1em] max-w-[35ch]">
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      </div>
      <div className="*:block *:mb-[0.5em] flex flex-col self-center justify-center md:shrink-0">
        <p>Score: {clickedCardIds.size} </p>
        <p>Best score: {bestScore}</p>
        <input
          className="last:mb-[0em] last:mt-[0.5em] appearance-none cursor-pointer bg-[#efb100] rounded-lg h-1 md:h-2 2xl:h-3 "
          type="range"
          min="5"
          max="12"
          value={cardsNumber}
          onChange={e => {
            setCardsNumber(e.target.value);
          }}
          onMouseUp={() => {
            const changed = onChange(cardsNumber);
            if (changed) {
              prevScoreRef.current = 0;
              setBestScore(0);
            }
          }}
        />
      </div>
    </header>
  );
}
