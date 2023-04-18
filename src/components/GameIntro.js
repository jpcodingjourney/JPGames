import React, { useState, useEffect } from "react";
import Image from "next/image";

const GameIntro = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div>
        <div id="Genshin Impact" className="pt-20 pb-52">
          <div className="">
            <div className="text-center text-3xl font-medium">
              Genshin Impact - Official Trailer
            </div>
            <div className="flex justify-center items-center pt-8 pb-52">
              <iframe
                width="800"
                height="600"
                src="https://www.youtube.com/embed/HLUY1nICQRY?vq=hd1080"
                title="Genshin Impact Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="mx-auto"
              />
            </div>

            <div className="text-center text-3xl font-medium">Gameplays</div>
            <div className="my-20 flex flex-col lg:flex-row">
              <div>
                <Image
                  src="/game1.jpg"
                  alt="Image 1"
                  width={700}
                  height={700}
                  className="ml-36 shadow-lg"
                />
              </div>
              <div className="relative my-auto ml-36 max-w-lg break-words">
                testing text testing text testing text testing text testing text
                testing text testing text testing text testing text testing text
                testing text testing text
              </div>
            </div>
            <div className="my-40 flex flex-col lg:flex-row">
              <div className="my-auto ml-60 max-w-lg break-words">
                testing text testing text testing text testing text testing text
                testing text testing text testing text testing text testing text
                testing text testing text testing text
              </div>
              <Image
                src="/game1.jpg"
                alt="Image 2"
                width={700}
                height={700}
                className="m-auto shadow-lg relative"
              />
            </div>
            <div className="my-36 flex flex-col lg:flex-row">
              <div>
                <Image
                  src="/game1.jpg"
                  alt="Image 3"
                  width={700}
                  height={700}
                  className="ml-36 shadow-lg"
                />
              </div>
              <div className="relative my-auto ml-36 max-w-lg break-words">
                testing text testing text testing text testing text testing text
                testing text testing text testing text testing text testing text
                testing text testing text
              </div>
            </div>
            <div className="flex justify-center items-center text-2xl pb-16">
              Available on: GeForce Now, PlayStation 4, PlayStation 5, Android,
              Microsoft Windows, iOS
            </div>
            <div className="flex justify-center items-center text-3xl underline">
              <a
                href="https://genshin.hoyoverse.com/en/home"
                className="text-center"
              >
                Click here to play now!
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="Undertale" className="pt-20 pb-52">
          <div className="">
            <div className="text-center text-3xl font-medium">
              Undertale - Official Trailer
            </div>
            <div className="flex justify-center items-center pt-8 pb-52">
              <iframe
                width="800"
                height="600"
                src="https://www.youtube.com/embed/1Hojv0m3TqA?vq=hd1080"
                title="Undertale Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="mx-auto"
              />
            </div>

            <div className="text-center text-3xl font-medium">Gameplays</div>
            <div className="my-20 flex flex-col lg:flex-row">
              <div>
                <Image
                  src="/game2.jpg"
                  alt="Image 1"
                  width={700}
                  height={700}
                  className="ml-36 shadow-lg"
                />
              </div>
              <div className="relative my-auto ml-36 max-w-lg break-words">
                testing text testing text testing text testing text testing text
                testing text testing text testing text testing text testing text
                testing text testing text
              </div>
            </div>
            <div className="my-40 flex flex-col lg:flex-row">
              <div className="my-auto ml-60 max-w-lg break-words">
                testing text testing text testing text testing text testing text
                testing text testing text testing text testing text testing text
                testing text testing text testing text
              </div>
              <Image
                src="/game2.jpg"
                alt="Image 2"
                width={700}
                height={700}
                className="m-auto shadow-lg relative"
              />
            </div>
            <div className="my-36 flex flex-col lg:flex-row">
              <div>
                <Image
                  src="/game2.jpg"
                  alt="Image 3"
                  width={700}
                  height={700}
                  className="ml-36 shadow-lg"
                />
              </div>
              <div className="relative my-auto ml-36 max-w-lg break-words">
                testing text testing text testing text testing text testing text
                testing text testing text testing text testing text testing text
                testing text testing text
              </div>
            </div>
            <div className="flex justify-center items-center text-2xl pb-16">
              Available on: GeForce Now, PlayStation 4, PlayStation 5, Android,
              Microsoft Windows, iOS
            </div>
            <div className="flex justify-center items-center text-3xl underline">
              <a href="https://undertale.com/" className="text-center">
                Click here to play now!
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="Path of Exile" className="pt-20 pb-52">
          <div className="">
            <div className="text-center text-3xl font-medium">
              Path of Exile - Official Trailer
            </div>
            <div className="flex justify-center items-center pt-8 pb-52">
              <iframe
                width="800"
                height="600"
                src="https://www.youtube.com/embed/TGn5NzGwqKw?vq=hd1080"
                title="Dota 2 Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="mx-auto"
              />
            </div>

            <div className="text-center text-3xl font-medium">Gameplays</div>
            <div className="my-20 flex flex-col lg:flex-row">
              <div>
                <Image
                  src="/game3.jpeg"
                  alt="Image 1"
                  width={700}
                  height={700}
                  className="ml-36 shadow-lg"
                />
              </div>
              <div className="relative my-auto ml-36 max-w-lg break-words">
                testing text testing text testing text testing text testing text
                testing text testing text testing text testing text testing text
                testing text testing text
              </div>
            </div>
            <div className="my-40 flex flex-col lg:flex-row">
              <div className="my-auto ml-60 max-w-lg break-words">
                testing text testing text testing text testing text testing text
                testing text testing text testing text testing text testing text
                testing text testing text testing text
              </div>
              <Image
                src="/game3.jpeg"
                alt="Image 2"
                width={700}
                height={700}
                className="m-auto shadow-lg relative"
              />
            </div>
            <div className="my-36 flex flex-col lg:flex-row">
              <div>
                <Image
                  src="/game3.jpeg"
                  alt="Image 3"
                  width={700}
                  height={700}
                  className="ml-36 shadow-lg"
                />
              </div>
              <div className="relative my-auto ml-36 max-w-lg break-words">
                testing text testing text testing text testing text testing text
                testing text testing text testing text testing text testing text
                testing text testing text
              </div>
            </div>
            <div className="flex justify-center items-center text-2xl pb-16">
              Available on: PlayStation 4, macOS, GeForce Now, Xbox One,
              Microsoft Windows, Mac operating systems
            </div>
            <div className="flex justify-center items-center text-3xl underline">
              <a href="https://www.pathofexile.com/" className="text-center">
                Click here to play now!
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="PUBG: Battlegrounds" className="pt-20 pb-52">
          <div className="">
            <div className="text-center text-3xl font-medium">
              PUBG: Battlegrounds - Official Trailer
            </div>
            <div className="flex justify-center items-center pt-8 pb-52">
              <iframe
                width="800"
                height="600"
                src="https://www.youtube.com/embed/u1oqfdh4xBY?vq=hd1080"
                title="PUBG: Battlegrounds Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="mx-auto"
              />
            </div>

            <div className="text-center text-3xl font-medium">Gameplays</div>
            <div className="my-20 flex flex-col lg:flex-row">
              <div>
                <Image
                  src="/game4.png"
                  alt="Image 4"
                  width={700}
                  height={700}
                  className="ml-36 shadow-lg"
                />
              </div>
              <div className="relative my-auto ml-36 max-w-lg break-words">
                testing text testing text testing text testing text testing text
                testing text testing text testing text testing text testing text
                testing text testing text
              </div>
            </div>
            <div className="my-40 flex flex-col lg:flex-row">
              <div className="my-auto ml-60 max-w-lg break-words">
                testing text testing text testing text testing text testing text
                testing text testing text testing text testing text testing text
                testing text testing text testing text
              </div>
              <Image
                src="/game4.png"
                alt="Image 2"
                width={700}
                height={700}
                className="m-auto shadow-lg relative"
              />
            </div>
            <div className="my-36 flex flex-col lg:flex-row">
              <div>
                <Image
                  src="/game4.png"
                  alt="Image 3"
                  width={700}
                  height={700}
                  className="ml-36 shadow-lg"
                />
              </div>
              <div className="relative my-auto ml-36 max-w-lg break-words">
                testing text testing text testing text testing text testing text
                testing text testing text testing text testing text testing text
                testing text testing text
              </div>
            </div>
            <div className="flex justify-center items-center text-2xl pb-16">
              Available on: Windows, Android, iOS, Xbox One, PlayStation 4,
              Stadia, Xbox Series X/S, PlayStation 5
            </div>
            <div className="flex justify-center items-center text-3xl underline">
              <a href="https://pubg.com/" className="text-center">
                Click here to play now!
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="Dota 2" className="pt-20 pb-52">
          <div className="">
            <div className="text-center text-3xl font-medium">
              Dota 2 - Official Trailer
            </div>
            <div className="flex justify-center items-center pt-8 pb-52">
              <iframe
                width="800"
                height="600"
                src="https://www.youtube.com/embed/38ZwPC3xO78?vq=hd1080"
                title="Dota 2 Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="mx-auto"
              />
            </div>

            <div className="text-center text-3xl font-medium">Gameplays</div>
            <div className="my-20 flex flex-col lg:flex-row">
              <div>
                <Image
                  src="/game5.jpg"
                  alt="Image 1"
                  width={700}
                  height={700}
                  className="ml-36 shadow-lg"
                />
              </div>
              <div className="relative my-auto ml-36 max-w-lg break-words">
                testing text testing text testing text testing text testing text
                testing text testing text testing text testing text testing text
                testing text testing text
              </div>
            </div>
            <div className="my-40 flex flex-col lg:flex-row">
              <div className="my-auto ml-60 max-w-lg break-words">
                testing text testing text testing text testing text testing text
                testing text testing text testing text testing text testing text
                testing text testing text testing text
              </div>
              <Image
                src="/game5.jpg"
                alt="Image 2"
                width={700}
                height={700}
                className="m-auto shadow-lg relative"
              />
            </div>
            <div className="my-36 flex flex-col lg:flex-row">
              <div>
                <Image
                  src="/game5.jpg"
                  alt="Image 3"
                  width={700}
                  height={700}
                  className="ml-36 shadow-lg"
                />
              </div>
              <div className="relative my-auto ml-36 max-w-lg break-words">
                testing text testing text testing text testing text testing text
                testing text testing text testing text testing text testing text
                testing text testing text
              </div>
            </div>
            <div className="flex justify-center items-center text-2xl pb-16">
              Available on: Microsoft Windows, macOS, GeForce Now, Linux,
              Classic Mac OS
            </div>
            <div className="flex justify-center items-center text-3xl underline">
              <a href="https://www.dota2.com/home" className="text-center">
                Click here to play now!
              </a>
            </div>
          </div>
        </div>
      </div>

      {showButton && (
        <button
          onClick={handleClick}
          className="fixed bottom-12 right-16 text-4xl hover:scale-105"
        >
          ⬆️
        </button>
      )}
    </div>
  );
};

export default GameIntro;
