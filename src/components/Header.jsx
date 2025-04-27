export default function Header() {
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
        <span className="sc">Score: </span>
        <span className="sc">Best score: </span>
      </div>
    </header>
  );
}
