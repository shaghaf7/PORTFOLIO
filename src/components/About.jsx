import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hi, I’m Shaghaf Kashif, a full stack web developer who loves turning ideas into interactive web apps. My strengths lie in building robust MERN stack applications, and I’m currently exploring the power of Next.js and AI integration in web projects.
        </p>

        <br />

        <p className="text-xl">
        I’ve developed projects like FitFusion and TextLens, and I'm passionate about creating smooth user experiences and clean, maintainable code. Whether it's crafting frontends or architecting backends, I enjoy solving real-world problems through code.
        </p>
        <br/>
        <p className="text-xl">I’m open to internships, freelance gigs, or collaborative projects, especially those that push the boundaries of creativity and innovation.</p>
        <br/>
        <p className="text-xl">
        Outside of tech, I’m a late-night snack connoisseur and someone who’s always curious about how things work under the hood.

        </p>
      </div>
    </div>
  );
};

export default About;