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
        "Genshin Impact is an action role-playing game developed and published by miHoYo. It was released for Android, iOS, PlayStation 4, and Windows in 2020, on PlayStation 5 in 2021, and is set for release on Nintendo Switch.",
    },
    {
      name: "Path of Exile",
      imageUrl: "/game2.jpg",
      description:
        "Path of Exile is a free-to-play action role-playing video game developed and published by Grinding Gear Games. Following an open beta phase, the game was released for Microsoft Windows in October 2013. A version for Xbox One was released in August 2017, and a PlayStation 4 version was released in March 2019.",
    },
    {
      name: "Undertale",
      imageUrl: "/game3.jpeg",
      description:
        "Undertale is a 2015 2D role-playing video game created by American indie developer Toby Fox. The player controls a child who has fallen into the Underground: a large, secluded region under the surface of the Earth, separated by a magical barrier",
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
    autoplaySpeed: 5000,
    swipe: true,
    // adaptiveHeight: true,
  };

  return (
    <div className={styles.carouselContainer}>
      <style>{`
        .slick-prev:before,
        .slick-next:before {
          font-size: 30px; /* set the font size of the arrows */
        }
        .slick-prev {
          left: -2.5rem; /* add more padding to the left arrow */
        }
        .slick-next {
          right: -2rem; /* add more padding to the right arrow */
        }
      `}</style>
      <Carousel {...settings}>
        {games.map((game) => (
          <div key={game.name}>
            <h3 className="text-center my-5 text-3xl font-medium">
              {game.name}
            </h3>
            <img src={game.imageUrl} alt={game.name} />
            <p className="text-center my-5">{game.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default GameCarousel;
