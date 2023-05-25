import React from "react";
import { useEffect } from "react";
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
        "Welcome to UNDERTALE. In this RPG, you control a human who falls underground into the world of monsters. Now you must find your way out... or stay trapped forever.",
    },
    {
      name: "Path of Exile",
      imageUrl: "/game3.jpeg",
      description:
        "You are an Exile, struggling to survive on the dark continent of Wraeclast, as you fight to earn power that will allow you to exact your revenge against those who wronged you. Created by hardcore gamers, Path of Exile is an online Action RPG set in a dark fantasy world.",
    },
    {
      name: "PUBG: Battlegrounds",
      imageUrl: "/game4.png",
      description:
        "Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds. Squad up and join the Battlegrounds for the original Battle Royale experience that only PUBG: BATTLEGROUNDS can offer.",
    },
    {
      name: "DOTA 2",
      imageUrl: "/game5.jpg",
      description:
        "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.",
    },
    {
      name: "World of Warcraft",
      imageUrl: "/game6.webp",
      description:
        "Set in the fictional world of Azeroth, WoW allows players to create avatar-style characters and explore a sprawling universe while interacting with nonreal players—called nonplayer characters (NPCs)—and other real-world players (PCs)",
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
    autoplaySpeed: 6000,
    swipe: true,
    // adaptiveHeight: true,
  };

  useEffect(() => {
    const smoothScrollLinks = document.querySelectorAll(
      'a[href^="#"]:not([href="#"])'
    );
    smoothScrollLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <style>{`
        .slick-prev:before,
        .slick-next:before {
          font-size: 30px; 
        }
        .slick-prev {
          left: -2.4rem; 
        }
        .slick-next {
          right: -1.8rem; 
        }
      `}</style>
      <Carousel {...settings} className="">
        {games.map((game) => (
          <div className="game-container 2xl:px-12">
            <div key={game.name} className="px-2 md:px-4 lg:px-8 2xl:px-0 ">
              <h3 className="text-center mb-5 2xl:my-5 lg:text-2xl 2xl:text-3xl font-medium">
                {game.name}
              </h3>
              <a href={`#${game.name}`}>
                <img
                  src={game.imageUrl}
                  alt={game.name}
                  className="mx-auto transform hover:brightness-105 hover:scale-105 transition-all duration-300"
                />
              </a>
              <p className="text-justify tracking-wide my-5 lg:text-sm 2xl:text-xl">
                {game.description}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default GameCarousel;
