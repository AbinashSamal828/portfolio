import React from 'react';

const ProjectCard = ({ project }) => {
  console.log(project.image)
  return (
    <div className=" bg-cyan-700 bg-opacity-50 m-5 p-3 rounded-md shadow-lg overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover object-center" />
      <div className="p-6">
        <h5 className="text-gray-100 font-bold text-xl mb-2">{project.title}</h5>
        <p className="text-gray-200 text-base mb-4">{project.description}</p>
        <div className='flex justify-between mt-2'>
        {project.url&&<a href={project.url} target="_blank" rel="noopener noreferrer" className="text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-5 py-2 ">Live</a>}
        <a href={project.gurl} target="_blank" rel="noopener noreferrer" className="text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-5 py-2 ">Code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
