import React from "react";
import fitfusion from "../assets/portfolio/fitfusion.png";
import notionx from "../assets/portfolio/notionx.png";
import TextLens from "../assets/portfolio/TextLens.jpeg";
import Weatherapp from "../assets/portfolio/Weatherapp.png";
import shrinkr from "../assets/portfolio/shrinkr.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: fitfusion,
      demoLink: "", // Add your live demo link here
      codeLink: "https://github.com/shaghaf7/fitfusion", // Add your GitHub/code link here
    },
    {
      id: 2,
      src: TextLens,
      demoLink: "",
      codeLink: "https://github.com/shaghaf7/TEXT-LENS",
    },
    {
      id: 3,
      src: notionx,
      demoLink: "https://notion-x-wheat.vercel.app/",
      codeLink: "https://github.com/shaghaf7/NotionX",
    },
    {
      id: 4,
      src: Weatherapp,
      demoLink: "https://weather-nest-tau.vercel.app/",
      codeLink: "https://github.com/shaghaf7/Weather-App",
    },
    {
      id: 5,
      src: shrinkr,
      demoLink: "https://shrinkr-neon.vercel.app/",
      codeLink: "https://github.com/shaghaf7/Shrinkr",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={`Project ${id}`}
                className="w-full h-48 object-cover rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
