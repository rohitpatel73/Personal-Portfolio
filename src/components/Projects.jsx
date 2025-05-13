import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    
    {
      title: "Personal Notebook",
      description: "A simple and responsive MERN stack personal notebook app.",
      github: "https://github.com/rohitpatel73/Personal-Notebook"
    },
    {
      title: "Gemini Clone",
      description: "Clone of the Google Gemini AI UI using Reactjs, API integration and Tailwind CSS.",
      github: "https://github.com/rohitpatel73/Gemini-Clone"
    },
    {
      title: "City Weather Forcast",
      description: "Weather forcasting app with their map. Using Next.js with Weather API, ",
      github: "https://github.com/rohitpatel73/City-Weather-Forcast"
    },
    {
      title: "Real Time Chat Application",
      description: "Real time chat application using socket.io.",
      github: "https://github.com/rohitpatel73/Real-time-chat-application"
    },
    {
      title: "E-Commerce Rest API ",
      description: "Rest API for an e-commerce web application.",
      github: "https://github.com/rohitpatel73/Rest-Api-E-Commerce"
    },
    {
      title: "Advanced Password Generator",
      description: "Password generator with some dynamic & advanced feature.",
      github: "https://github.com/rohitpatel73/Advanced-Password-Generator"
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      className="py-12 px-6 md:px-16 bg-gradient-to-b from-stone-100 to-stone-300"
      id="projects"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-emerald-950 mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-stone-100 p-6 rounded-xl border-l-4 border-stone-600 shadow hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-semibold text-emerald-900">
                  {project.title}
                </h3>
                {project.github && (
                  <a
                    href={project.github}
                    className="text-stone-900 hover:text-gray-600 ml-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on GitHub"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                )}
              </div>

              <p className="text-blue-800 mt-2">
                {project.description.split(' ').slice(0, 20).join(' ')}{project.description.split(' ').length > 50 ? '...' : ''}
              </p>

            </div>
          ))}
        </div>

        {projects.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 text-white bg-stone-600 rounded hover:bg-stone-400 transition"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
