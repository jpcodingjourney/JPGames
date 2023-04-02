import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-slick";

function GameCarousel() {
  const games = [
    {
      name: "Game 1",
      imageUrl: "/genshin1.jpg",
      description: "Description of Game 1",
    },
    {
      name: "Game 2",
      imageUrl: "/genshin1.jpg",
      description: "Description of Game 2",
    },
    {
      name: "Game 3",
      imageUrl: "/genshin1.jpg",
      description: "Description of Game 3",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Carousel {...settings}>
      {games.map((game) => (
        <div key={game.name}>
          <h3>{game.name}</h3>
          <img src={game.imageUrl} alt={game.name} />
          <p>{game.description}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default GameCarousel;
