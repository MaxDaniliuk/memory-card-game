import Header from './components/Header';
import CardsContainer from './components/CardsContainer';
import './App.css';

function App() {
  const cardsList = [
    {
      id: 1,
      title: 'One',
      clicked: false,
    },
    {
      id: 2,
      title: 'Two',
      clicked: false,
    },
    {
      id: 3,
      title: 'Three',
      clicked: false,
    },
    {
      id: 4,
      title: 'Four',
      clicked: false,
    },
  ];
  return (
    <div className="app">
      <Header />
      <CardsContainer cardsList={cardsList} />
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
