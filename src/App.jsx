import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useRef } from "react";
import { useRef, useState, useEffect } from "react";

export default function App() {
  const gamesRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const games = [
    {
      title: "Snake Game",
      desc: "Classic snake with a modern twist.",
      img: `${import.meta.env.BASE_URL}snakeGame.png`,
      link: "https://coursesellerbd25-commits.github.io/snake-game/",
    },
    {
      title: "Tic-Tac-Toe",
      desc: "Win in 3… if you can.",
      img: `${import.meta.env.BASE_URL}ticTacToe.png`,
      link: "https://coursesellerbd25-commits.github.io/TICTACTOEAPP/",
    },
  ];
  

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 2;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []); 

  if (loading) {
  return (
    <div className="loader-screen">
      <h1 className="loader-title">MOZITO25</h1>

      <div className="loader-bar">
        <div
          className="loader-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="loader-text">{progress}%</p>
    </div>
  );
}

  return (
    <div className="h-screen w-full">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1200} // Slightly slower for smoother fade
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {/* 🎮 Slide 1 — MOZITO25 */}
        <SwiperSlide>
          <div 
            className="slide slide-main"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}banner.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: 'multiply', // Makes background darker
            }}
          >
            <div className="content overlay-content main-box" 
            style={{
              height: '50%',
            }}>
              <h1 className="title gaming-title">MOZITO25</h1>
              <p className="subtitle">Gaming Platform</p>
              <button
                className="btn"
                onClick={() =>
                  gamesRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
              EXPLORE
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* 🎮 Slide 2 — Game 1 */}
        <SwiperSlide>
          <div 
            className="slide slide-game"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}snakeGame.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: 'multiply', // Makes background darker
            }}
          >
            <div className="content overlay-content">
              <h2 className="gaming-title">Snake Game</h2>
              <p>Classic snake with a modern twist.</p>
              <button
                className="btn"
                onClick={() =>
                  window.open("https://coursesellerbd25-commits.github.io/snake-game/", "_blank")
                }
              >
              PLAY NOW
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* 🎮 Slide 3 — Game 2 */}
        <SwiperSlide>
          <div 
            className="slide slide-game"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}ticTacToe.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: 'multiply', // Makes background darker
            }}
          >
            <div className="content overlay-content">
              <h2 className="gaming-title">Tic-Tac-Toe</h2>
              <p>Mind games start here.</p>
              <button
                className="btn"
                onClick={() =>
                  window.open("https://coursesellerbd25-commits.github.io/TICTACTOEAPP/", "_blank")
                }
              >
              PLAY NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* 🎮 Game Grid Section */}
<div className="games-section" ref={gamesRef}>
  <h2 className="section-title">Explore Games</h2>

  <div className="games-grid">
    {games.map((game, index) => (
      <div className="game-card" key={index}>
        <img src={game.img} alt={game.title} />
        <div className="card-content">
          <h3>{game.title}</h3>
          <p>{game.desc}</p>
            <button
              className="btn"
              onClick={() => window.open(game.link, "_blank")}
            >
              Play Now
            </button>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
  );
}