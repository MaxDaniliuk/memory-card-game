import { useState } from 'react';
import Header from './components/Header';
import CardsContainer from './components/CardsContainer';
import './App.css';

function App() {
  const [cardsList, setCardsList] = useState(createCardList());
  const [clickedCardIds, setClickedCardIds] = useState(new Set());

  function changeCardsNumber(targetValue) {
    if (cardsList.length !== Number(targetValue)) {
      setCardsList([...createCardList(targetValue)]);
      setClickedCardIds(new Set());
      return true;
    }
    return false;
  }

  function handleCardClick(card) {
    setCardsList(shuffleCards([...cardsList]));
    markClickedCard(card);
  }

  function markClickedCard(card) {
    if (clickedCardIds.has(card.id)) {
      setClickedCardIds(new Set());
    } else {
      const newSet = new Set(clickedCardIds);
      newSet.add(card.id);
      setClickedCardIds(newSet);
    }
  }
  return (
    <div className="app">
      <Header
        clickedCardIds={clickedCardIds}
        onChange={changeCardsNumber}
        // cardsNum={cardsNumber}
      />
      <CardsContainer cardsList={cardsList} handleCardClick={handleCardClick} />
      <footer>
        <>
          © {new Date().getFullYear()}{' '}
          <a
            href="https://github.com/MaxDaniliuk/memory-card-game"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </a>
        </>
      </footer>
    </div>
  );
}

export default App;

function createCardList(cardNum = 5) {
  const link = 'https://pokeapi.co/api/v2/pokemon/';
  const cardsList = [];

  for (let i = 0; i < cardNum; i++) {
    const pokemonId = Math.floor(Math.random() * 1025) + 1;
    cardsList.push({
      id: pokemonId,
      link: link + `${pokemonId}`,
      clicked: false,
    });
  }

  return cardsList;
}

function shuffleCards(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
