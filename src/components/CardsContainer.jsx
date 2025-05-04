import Card from './Card';

export default function CardsContainer({ cardsList, handleCardClick }) {
  return (
    <main className="max-w-[1100px] p-[3vw] flex flex-col justify-center self-center flex-wrap gap-[clamp(4rem,10vw,5.2rem)] sm:flex-row">
      {cardsList.map(card => (
        <Card key={card.id} {...card} onClick={() => handleCardClick(card)} />
      ))}
    </main>
  );
}
