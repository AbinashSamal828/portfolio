import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen bg-black text-white ">
      <div className="flex flex-col justify-center text-center max-w-[1000px] mx-auto px-8 md:px-24 h-full">
        <div className="text-5xl font-bold sm:text-6xl mt-2 text-cyan-500 mb-10">
          <span className="border-b-4">About</span>
        </div>
        <p className="mt-4 sm:text-xl">
          My name is Abinash Samal and I am a full stack web developer with a
          passion for problem-solving. I am currently pursuing a Bachelor of
          Technology in Computer Science and Engineering and am in my third year
          of studies. My interest in web development began during my first year
          of college, and since then, I have been continuously working to
          improve my skills in this field. I have experience working with
          various web development technologies such as HTML, CSS, JavaScript,
          React, Node.js, and more. Apart from web development, I also enjoy
          practicing Data Structures and Algorithms (DSA) problem-solving, which
          has helped me develop strong analytical and problem-solving skills.
          Through this website, I aim to showcase my work as a full stack web
          developer and share my knowledge and experiences in web development
          and DSA problem-solving. Please feel free to explore my projects, and don't hesitate to reach out to me for any inquiries or
          collaborations. Thank you for visiting my website, and I hope you find
          it informative and helpful!
        </p>
      </div>
    </div>
  );
};

export default About;
