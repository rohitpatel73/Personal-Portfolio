import Tilt from "react-parallax-tilt";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiCplusplus,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const skills = [
  { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "ReactJS", icon: <FaReact className="text-cyan-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-black" /> },
  { name: "Vercel", icon: <SiVercel className="text-black" /> },
];

const Skills = () => (
  <section className="py-12 px-4 md:px-16 bg-gradient-to-b from-stone-100 to-stone-300" id="skills">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-stone-700 mb-10">
        My <span className="text-emerald-950">Skills</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={500}
            className="relative group rounded-xl border border-stone-200 bg-zinc-100 shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.08]"
          >

            <div className="absolute inset-0 bg-neutral-200 opacity-0 group-hover:opacity-90 blur-xl transition-all duration-500 z-0"></div>

            <div className="relative z-10 flex items-center gap-3 px-4 py-5">
              <span className="text-4xl">{skill.icon}</span>
              <span className="text-stone-700 text-2xl font-semibold">
                {skill.name}
              </span>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
