import React from "react";


const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-black flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/1cd1154c-7b29-4927-8719-7f777f313344"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 text-center m-6">
          <p className="text-5xl font-bold inline sm:text-6xl text-cyan-500 border-b-4">
            Contact
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded-md"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded-md"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded-md"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
