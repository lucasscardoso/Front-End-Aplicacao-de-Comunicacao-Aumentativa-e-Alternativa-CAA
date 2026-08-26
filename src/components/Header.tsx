import '../css/header.css';
import '../App.css';

export function Header() {

  
  const abc = [
    { char: 'A', color: 'linear-gradient(180deg, #71c3f7 0%, #3a82e4 100%)', arc: 4 },
    { char: 'B', color: 'linear-gradient(180deg, #ff9b7d 0%, #e04b2b 100%)', arc: 1 },
    { char: 'C', color: 'linear-gradient(180deg, #ffda73 0%, #f0951d 100%)', arc: 0 },
  ];

  const aprender = [
    { char: 'A', color: 'linear-gradient(180deg, #9ae66e 0%, #51b22e 100%)', arc: 0 },
    { char: 'P', color: 'linear-gradient(180deg, #ff9b7d 0%, #e04b2b 100%)', arc: -2 },
    { char: 'R', color: 'linear-gradient(180deg, #ffda73 0%, #f0951d 100%)', arc: -3 },
    { char: 'E', color: 'linear-gradient(180deg, #9ae66e 0%, #51b22e 100%)', arc: -2 },
    { char: 'N', color: 'linear-gradient(180deg, #71c3f7 0%, #3a82e4 100%)', arc: 0 },
    { char: 'D', color: 'linear-gradient(180deg, #9ae66e 0%, #51b22e 100%)', arc: 0 },
    { char: 'E', color: 'linear-gradient(180deg, #ff9b7d 0%, #e04b2b 100%)', arc: 1 },
    { char: 'R', color: 'linear-gradient(180deg, #9ae66e 0%, #51b22e 100%)', arc: 4 },
  ];

  return (
    <header className="header-container">
      <h1 className="curved-title">
        <div className="title-word">
          {abc.map((item, index) => (
            <span
              key={index}
              style={{
                backgroundImage: item.color,
                transform: `translateY(${item.arc}px)`,
              }}
            >
              {item.char}
            </span>
          ))}
        </div>

        <div className="title-word">
          {aprender.map((item, index) => (
            <span
              key={index}
              style={{
                backgroundImage: item.color,
                transform: `translateY(${item.arc}px)`,
              }}
            >
              {item.char}
            </span>
          ))}
        </div>
      </h1>
      <br />
    </header>
  );
}