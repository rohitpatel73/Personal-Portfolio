import { useState } from 'react'

const Projects = () => {
  const [showAll, setShowAll] = useState(false)

  const projects = [
    { title: "Portfolio Website", description: "A personal portfolio built with Reactjs and Tailwind CSS.", link: "#" },
    { title: "Personal Notebook", description: "A simple and responsive MERN stack personal notebook app.", link: "#" },
    { title: "Gemini Clone", description: "Clone of the google gemini.", link: "#" },
    { title: "Youtube Backend", description: "Backend for youtube like platform.", link: "#" },
    { title: "Chat App", description: "Real time chat application.", link: "#" },
    { title: "Rest API", description: "A rest API for E-commerce web application.", link: "#" },
    { title: "Advanced Password Generator", description: "A simple and very useful password generator app.", link: "#" },
    { title: "TextUtiles", description: "A web app where we add richness in our text.", link: "#" },
    { title: "Bubble Game", description: "A web app bubble game.", link: "#" },
    { title: "Tic Tac Toe", description: "A web app game.", link: "#" },
    { title: "Quizzer Buzzer", description: "An online quiz app.", link: "#" },
    { title: "Rock Paper Scissor", description: "A web app game.", link: "#" },
    { title: "Cursor", description: "Dynamic cursor.", link: "#" },
  ]

  const displayedProjects = showAll ? projects : projects.slice(0, 6)

  return (
    <section className="py-12 px-6 md:px-16 bg-gradient-to-b from-stone-100 to-stone-300" id="projects">
    {/* <section className="py-12 px-6 md:px-16 bg-gradient-to-b from-gray-50 to-gray-100" id="projects"> */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-stone-100 p-6 rounded-xl border-l-4 border-stone-600 shadow hover:shadow-lg transition"
            >
              <h3 className="text-3xl font-semibold text-emerald-900">{project.title}</h3>
              <p className="text-blue-800 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="inline-block mt-4 text-stone-900 hover:underline"
                target="_blank" rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {projects.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 transition"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects;
