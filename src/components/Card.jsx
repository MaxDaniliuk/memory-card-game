import { useState, useEffect } from 'react';

export default function Card({ link, onClick }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    let isActive = true;
    async function fetchPokemon() {
      try {
        const response = await fetch(link);
        const data = await response.json();
        const img = data.sprites.other['official-artwork'].front_default;
        if (isActive) {
          setImageUrl(img);
        }
      } catch (error) {
        console.log('Error fetching Pokemon', error);
        setImageUrl('');
      }
    }

    fetchPokemon();

    return () => {
      isActive = false;
    };
  }, [link]);

  return (
    <div
      className="card-size bg-yellow-800 cursor-pointer rounded-[10px] shadow-[0_0_15px_8px_#efb100] hover:scale-125"
      onClick={onClick}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Pokemon"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
