import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen bg-black text-white ">
      <div className="flex flex-col justify-center max-w-[1000px] mx-auto px-8 md:px-24 h-full">
        <div className="text-cyan-300 text-2xl">Hello I am,</div>
        <div className="text-4xl font-bold sm:text-7xl mt-2">Abinash Samal</div>
        <div className="text-xl sm:text-3xl mt-3 text-cyan-800">
          I'm a full stack web developer and a problem-solving enthusiast.
        </div>
        <p className="mt-4 sm:text-xl">
          Here you'll find my projects, and experiences in web
          development and data structures and algorithms. Explore my work, and
          don't hesitate to contact me for any inquiries or collaborations.
        </p>
        <button className="text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 w-fit  flex items-center">
          view works
        </button>
      </div>
    </div>
  );
};

export default Home;
