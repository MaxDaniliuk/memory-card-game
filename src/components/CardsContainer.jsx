import Card from './Card';

export default function CardsContainer({ cardsList }) {
  return (
    <main className="cards-container">
      {cardsList.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </main>
  );
}
