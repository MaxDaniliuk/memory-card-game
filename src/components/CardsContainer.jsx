import Card from './Card';

export default function CardsContainer({ cardsList, handleCardClick }) {
  return (
    <main className="cards-container">
      {cardsList.map(card => (
        <Card key={card.id} {...card} onClick={() => handleCardClick(card)} />
      ))}
    </main>
  );
}
