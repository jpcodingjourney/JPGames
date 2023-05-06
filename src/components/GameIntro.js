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
            <div className="flex justify-center items-center pt-8 pb-20 lg:pt-20">
              <div className="w-full md:max-w-2xl lg:max-w-4xl px-4">
                <div className="relative" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/HLUY1nICQRY?vq=hd1080"
                    title="Genshin Impact Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute w-full h-full top-0 left-0"
                  />
                </div>
              </div>
            </div>

            <div className="text-center text-3xl font-medium lg:pt-32">
              Gameplays
            </div>

            <div className="flex flex-wrap justify-center items-center py-12 lg:py-20">
              <div className="w-full lg:w-3/6 px-4">
                <Image
                  src="/game1.jpg"
                  alt="Image 1"
                  className="w-full md:w-auto md:max-w-full md:h-auto mx-auto shadow-lg"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-full lg:w-2/6 px-28 lg:my-0">
                <div className="text-xl break-words lg:block hidden">
                  testing text testing text testing text testing text testing
                  text testing text testing text testing text testing text
                  testing text testing text testing text
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center py-12 md:py-24">
              <div className="w-full lg:w-2/6 px-32 lg:my-0">
                <div className="text-xl break-words lg:block hidden">
                  testing text testing text testing text testing text testing
                  text testing text testing text testing text testing text
                  testing text testing text testing text testing text
                </div>
              </div>
              <div className="w-full lg:w-3/6 px-4">
                <Image
                  src="/game1.jpg"
                  alt="Image 2"
                  width={1000}
                  height={1000}
                  className="w-full md:w-auto md:max-w-full md:h-auto mx-auto shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center py-12 lg:py-20">
              <div className="w-full lg:w-3/6 px-4">
                <Image
                  src="/game1.jpg"
                  alt="Image 1"
                  className="w-full md:w-auto md:max-w-full md:h-auto mx-auto shadow-lg"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-full lg:w-2/6 px-28 lg:my-0">
                <div className="text-xl break-words lg:block hidden">
                  testing text testing text testing text testing text testing
                  text testing text testing text testing text testing text
                  testing text testing text testing text
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center text-2xl pb-16 lg:py-16 mx-4">
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
            <div className="flex justify-center items-center pt-8 pb-20 lg:pt-20">
              <div className="w-full md:max-w-2xl lg:max-w-4xl px-4">
                <div className="relative" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    width="800"
                    height="600"
                    src="https://www.youtube.com/embed/1Hojv0m3TqA?vq=hd1080"
                    title="Undertale Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute w-full h-full top-0 left-0"
                  />
                </div>
              </div>
            </div>

            <div className="text-center text-3xl font-medium lg:pt-32">
              Gameplays
            </div>

            <div className="flex flex-wrap justify-center items-center py-12 lg:py-20">
              <div className="w-full lg:w-3/6 px-4">
                <Image
                  src="/game2.jpg"
                  alt="Image 2"
                  className="w-full md:w-auto md:max-w-full md:h-auto mx-auto shadow-lg"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-full lg:w-2/6 px-28 lg:my-0">
                <div className="text-xl break-words lg:block hidden">
                  testing text testing text testing text testing text testing
                  text testing text testing text testing text testing text
                  testing text testing text testing text
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center py-12 md:py-24">
              <div className="w-full lg:w-2/6 px-32 lg:my-0">
                <div className="text-xl break-words lg:block hidden">
                  testing text testing text testing text testing text testing
                  text testing text testing text testing text testing text
                  testing text testing text testing text testing text
                </div>
              </div>
              <div className="w-full lg:w-3/6 px-4">
                <Image
                  src="/game2.jpg"
                  alt="Image 2"
                  width={1000}
                  height={1000}
                  className="w-full md:w-auto md:max-w-full md:h-auto mx-auto shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center py-12 lg:py-20">
              <div className="w-full lg:w-3/6 px-4">
                <Image
                  src="/game2.jpg"
                  alt="Image 2"
                  className="w-full md:w-auto md:max-w-full md:h-auto mx-auto shadow-lg"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-full lg:w-2/6 px-28 lg:my-0">
                <div className="text-xl break-words lg:block hidden">
                  testing text testing text testing text testing text testing
                  text testing text testing text testing text testing text
                  testing text testing text testing text
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center text-2xl pb-16 lg:py-16 mx-4">
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
            <div className="flex justify-center items-center pt-8 pb-20 lg:pt-20">
              <div className="w-full md:max-w-2xl lg:max-w-4xl px-4">
                <div className="relative" style={{ paddingBottom: "56.25%" }}>
                  {" "}
                  <iframe
                    width="800"
                    height="600"
                    src="https://www.youtube.com/embed/TGn5NzGwqKw?vq=hd1080"
                    title="Dota 2 Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute w-full h-full top-0 left-0"
                  />
                </div>
              </div>
            </div>

            <div className="text-center text-3xl font-medium lg:pt-32">
              Gameplays
            </div>

            <div className="flex flex-wrap justify-center items-center py-12 lg:py-20">
              <div className="w-full lg:w-3/6 px-4">
                <Image
                  src="/game3.jpeg"
                  alt="Image 1"
                  className="w-full md:w-auto md:max-w-full md:h-auto mx-auto shadow-lg"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-full lg:w-2/6 px-28 lg:my-0">
                <div className="text-xl break-words lg:block hidden">
                  testing text testing text testing text testing text testing
                  text testing text testing text testing text testing text
                  testing text testing text testing text
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center py-12 md:py-24">
              <div className="w-full lg:w-2/6 px-32 lg:my-0">
                <div className="text-xl break-words lg:block hidden">
                  testing text testing text testing text testing text testing
                  text testing text testing text testing text testing text
                  testing text testing text testing text testing text
                </div>
              </div>
              <div className="w-full lg:w-3/6 px-4">
                <Image
                  src="/game3.jpeg"
                  alt="Image 2"
                  width={1000}
                  height={1000}
                  className="w-full md:w-auto md:max-w-full md:h-auto mx-auto shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center py-12 lg:py-20">
              <div className="w-full lg:w-3/6 px-4">
                <Image
                  src="/game3.jpeg"
                  alt="Image 3"
                  className="w-full md:w-auto md:max-w-full md:h-auto mx-auto shadow-lg"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-full lg:w-2/6 px-28 lg:my-0">
                <div className="text-xl break-words lg:block hidden">
                  testing text testing text testing text testing text testing
                  text testing text testing text testing text testing text
                  testing text testing text testing text
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center text-2xl pb-16 lg:py-16 mx-4">
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
            <div className="flex justify-center items-center pt-8 pb-20 lg:pt-20">
              <div className="w-full md:max-w-2xl lg:max-w-4xl px-4">
                <div className="relative" style={{ paddingBottom: "56.25%" }}>
                  {" "}
                  <iframe
                    width="800"
                    height="600"
                    src="https://www.youtube.com/embed/u1oqfdh4xBY?vq=hd1080"
                    title="PUBG: Battlegrounds Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute w-full h-full top-0 left-0"
                  />
                </div>
              </div>
            </div>

            <div className="text-center text-3xl font-medium lg:pt-32">
              Gameplays
            </div>

            <div className="flex flex-wrap justify-center items-center py-12 lg:py-20">
              <div className="w-full lg:w-3/6 px-4">
                <Image
                  src="/game4.png"
                  alt="Image 1"
                  className="w-full md:w-auto md:max-w-full md:h-auto mx-auto shadow-lg"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-full lg:w-2/6 px-28 lg:my-0">
                <div className="text-xl break-words lg:block hidden">
                  testing text testing text testing text testing text testing
                  text testing text testing text testing text testing text
                  testing text testing text testing text
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center py-12 md:py-24">
              <div className="w-full lg:w-2/6 px-32 lg:my-0">
                <div className="text-xl break-words lg:block hidden">
                  testing text testing text testing text testing text testing
                  text testing text testing text testing text testing text
                  testing text testing text testing text testing text
                </div>
              </div>
              <div className="w-full lg:w-3/6 px-4">
                <Image
                  src="/game4.png"
                  alt="Image 2"
                  width={1000}
                  height={1000}
                  className="w-full md:w-auto md:max-w-full md:h-auto mx-auto shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center py-12 lg:py-20">
              <div className="w-full lg:w-3/6 px-4">
                <Image
                  src="/game4.png"
                  alt="Image 1"
                  className="w-full md:w-auto md:max-w-full md:h-auto mx-auto shadow-lg"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-full lg:w-2/6 px-28 lg:my-0">
                <div className="text-xl break-words lg:block hidden">
                  testing text testing text testing text testing text testing
                  text testing text testing text testing text testing text
                  testing text testing text testing text
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center text-2xl pb-16 lg:py-16 mx-4">
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
            <div className="flex justify-center items-center pt-8 pb-20 lg:pt-20">
              <div className="w-full md:max-w-2xl lg:max-w-4xl px-4">
                <div className="relative" style={{ paddingBottom: "56.25%" }}>
                  {" "}
                  <iframe
                    width="800"
                    height="600"
                    src="https://www.youtube.com/embed/38ZwPC3xO78?vq=hd1080"
                    title="Dota 2 Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute w-full h-full top-0 left-0"
                  />
                </div>
              </div>
            </div>

            <div className="text-center text-3xl font-medium lg:pt-32">
              Gameplays
            </div>

            <div className="flex flex-wrap justify-center items-center py-12 lg:py-20">
              <div className="w-full lg:w-3/6 px-4">
                <Image
                  src="/game5.jpg"
                  alt="Image 1"
                  className="w-full md:w-auto md:max-w-full md:h-auto mx-auto shadow-lg"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-full lg:w-2/6 px-28 lg:my-0">
                <div className="text-xl break-words lg:block hidden">
                  testing text testing text testing text testing text testing
                  text testing text testing text testing text testing text
                  testing text testing text testing text
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center py-12 md:py-24">
              <div className="w-full lg:w-2/6 px-32 lg:my-0">
                <div className="text-xl break-words lg:block hidden">
                  testing text testing text testing text testing text testing
                  text testing text testing text testing text testing text
                  testing text testing text testing text testing text
                </div>
              </div>
              <div className="w-full lg:w-3/6 px-4">
                <Image
                  src="/game5.jpg"
                  alt="Image 2"
                  width={1000}
                  height={1000}
                  className="w-full md:w-auto md:max-w-full md:h-auto mx-auto shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center py-12 lg:py-20">
              <div className="w-full lg:w-3/6 px-4">
                <Image
                  src="/game5.jpg"
                  alt="Image 1"
                  className="w-full md:w-auto md:max-w-full md:h-auto mx-auto shadow-lg"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-full lg:w-2/6 px-28 lg:my-0">
                <div className="text-xl break-words lg:block hidden">
                  testing text testing text testing text testing text testing
                  text testing text testing text testing text testing text
                  testing text testing text testing text
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center text-2xl pb-16 lg:py-16 mx-4">
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

      <div>
        <div id="World of Warcraft" className="pt-20 pb-52">
          <div className="">
            <div className="text-center text-3xl font-medium">
              Wolrd of Warcraft - Official Trailer
            </div>
            <div className="flex justify-center items-center pt-8 pb-20 lg:pt-20">
              <div className="w-full md:max-w-2xl lg:max-w-4xl px-4">
                <div className="relative" style={{ paddingBottom: "56.25%" }}>
                  {" "}
                  <iframe
                    width="800"
                    height="600"
                    src="https://www.youtube.com/embed/38ZwPC3xO78?vq=hd1080"
                    title="Wolrd of Warcraft Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute w-full h-full top-0 left-0"
                  />
                </div>
              </div>
            </div>

            <div className="text-center text-3xl font-medium lg:pt-32">
              Gameplays
            </div>

            <div className="flex flex-wrap justify-center items-center py-12 lg:py-20">
              <div className="w-full lg:w-3/6 px-4">
                <Image
                  src="/game6.webp"
                  alt="Image 1"
                  className="w-full md:w-auto md:max-w-full md:h-auto mx-auto shadow-lg"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-full lg:w-2/6 px-28 lg:my-0">
                <div className="text-xl break-words lg:block hidden">
                  testing text testing text testing text testing text testing
                  text testing text testing text testing text testing text
                  testing text testing text testing text
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center py-12 md:py-24">
              <div className="w-full lg:w-2/6 px-32 lg:my-0">
                <div className="text-xl break-words lg:block hidden">
                  testing text testing text testing text testing text testing
                  text testing text testing text testing text testing text
                  testing text testing text testing text testing text
                </div>
              </div>
              <div className="w-full lg:w-3/6 px-4">
                <Image
                  src="/game6.webp"
                  alt="Image 2"
                  width={1000}
                  height={1000}
                  className="w-full md:w-auto md:max-w-full md:h-auto mx-auto shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center py-12 lg:py-20">
              <div className="w-full lg:w-3/6 px-4">
                <Image
                  src="/game6.webp"
                  alt="Image 1"
                  className="w-full md:w-auto md:max-w-full md:h-auto mx-auto shadow-lg"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-full lg:w-2/6 px-28 lg:my-0">
                <div className="text-xl break-words lg:block hidden">
                  testing text testing text testing text testing text testing
                  text testing text testing text testing text testing text
                  testing text testing text testing text
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center text-2xl pb-16 lg:py-16 mx-4">
              Available on: Microsoft Windows, macOS, GeForce Now, Linux,
              Classic Mac OS
            </div>
            <div className="flex justify-center items-center text-3xl underline">
              <a
                href="https://worldofwarcraft.blizzard.com/"
                className="text-center"
              >
                Click here to play now!
              </a>
            </div>
          </div>
        </div>
      </div>

      {showButton && (
        <button
          onClick={handleClick}
          className={`fixed bottom-20 left-1/2 transform -translate-x-1/2 text-4xl hover:scale-105 ${
            showButton ? "block" : "hidden"
          }`}
        >
          ⬆️
        </button>
      )}
    </div>
  );
};

export default GameIntro;
