import React from "react";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./GameCarousel.module.css";
import Head from "next/head";

function GameCarousel() {
  const games = [
    {
      name: "Genshin Impact",
      imageUrl: "/genshin1.jpg",
      description: "Description of Game 1",
    },
    {
      name: "Path of Exile",
      imageUrl: "/genshin1.jpg",
      description: "Description of Game 2",
    },
    {
      name: "Undertale",
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
    arrows: true,
  };

  return (
    <div className={styles.carouselContainer}>
      <Head>
        <link rel="stylesheet" type="text/css" href="/slick-theme.css" />
      </Head>
      <Carousel {...settings}>
        {games.map((game) => (
          <div key={game.name}>
            <h3>{game.name}</h3>
            <img src={game.imageUrl} alt={game.name} />
            <p>{game.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default GameCarousel;
