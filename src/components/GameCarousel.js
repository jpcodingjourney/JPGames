import React from "react";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./GameCarousel.module.css";

function GameCarousel() {
  const games = [
    {
      name: "Genshin Impact",
      imageUrl: "/game1.jpg",
      description:
        "Step into Teyvat with your trusty companion Paimon and you'll discover a spectacular land of puzzles, challenges and combat. Genshim Impact is known for its expansive world, but fans also love the constantly unravelling story and intriguing characters.",
    },
    {
      name: "Undertale",
      imageUrl: "/game2.jpg",
      description:
        "Undertale is a 2D role-playing video game created by American indie developer Toby Fox. The player controls a child who has fallen into the Underground: a large, secluded region under the surface of the Earth, separated by a magical barrier.",
    },
    {
      name: "Path of Exile",
      imageUrl: "/game3.jpeg",
      description:
        "Path of Exile is a free-to-play action role-playing video game developed and published by Grinding Gear Games. Following an open beta phase, the game was released for Microsoft Windows in October 2013. A version for Xbox One was released in August 2017, and a PlayStation 4 version was released in March 2019.",
    },
    {
      name: "PUBG: Battlegrounds",
      imageUrl: "/game4.png",
      description:
        "PUBG: BATTLEGROUNDS is a battle royale that pits 100 players against each other. Outplay your opponents to become the lone survivor.",
    },
    {
      name: "DOTA 2",
      imageUrl: "/game5.jpg",
      description:
        "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000,
    swipe: true,
    // adaptiveHeight: true,
  };

  return (
    <div className={styles.carouselContainer}>
      <style>{`
        .slick-prev:before,
        .slick-next:before {
          font-size: 30px; 
        }
        .slick-prev {
          left: -3rem; 
        }
        .slick-next {
          right: -2.4rem; 
        }
      `}</style>
      <Carousel {...settings}>
        {games.map((game) => (
          <div key={game.name}>
            <h3 className="text-center my-5 text-3xl font-medium">
              {game.name}
            </h3>
            <a href={`#${game.name}`}>
              <img src={game.imageUrl} alt={game.name} />
            </a>
            <p className="text-center my-5">{game.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default GameCarousel;
