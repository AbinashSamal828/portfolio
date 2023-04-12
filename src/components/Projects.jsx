import React from 'react'
import ProjectCard from './ProjectCard';
import ping from '../assets/ping.png'
import qlib from '../assets/qlib.png'
import extracker from '../assets/extracker.png'
import fosc from '../assets/fosc.png'
const projects = [
    {
      title: 'Ping',
      description: 'A fully functional chat app made with react.js and socket.io',
      image: ping,
      url: 'https://heypingme.netlify.app/',
      gurl: 'https://github.com/AbinashSamal828/ping'
    },
    {
      title: 'Quote Library',
      description: 'A web app made with react.js and firebase where users can post quotes and compliment other qoutes.',
      image: qlib,
      url: 'https://quote-app-a5c53.web.app/quotes',
      gurl: 'https://github.com/AbinashSamal828/Quote-Library'
    },
    {
        title: 'Expense Tracker',
        description: 'web app to keep the record of the monthly expenses',
        image: extracker,
        url: 'https://trackexpense123.netlify.app/',
        gurl: 'https://github.com/AbinashSamal828/ExpenseTracker'

      }
      ,{
        title: 'FoSC',
        description: 'Project on food shortage assumption.Which predicts the chances of food shortage in different states.',
        image: fosc,
        gurl: 'https://github.com/AbinashSamal828/FoSC'
      }
  ];

const Projects = () => {
  return (
    <div className="p-8 px-14 bg-black ">
      <div className="text-3xl font-bold sm:text-6xl mt-2 text-cyan-500 mb-10 text-center">
          <span className="border-b-4">My Projects</span>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(project => (
          <div key={project.title}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects