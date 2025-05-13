import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import profile from '../assets/profile.jpg'
import { useEffect, useState } from 'react'
import './Hero.css' // 👈 for custom wave-animation
import { Typewriter } from 'react-simple-typewriter';


const roles = ["Software Developer", "Frontend Developer", "Full-Stack Developer", "Backend Developer", "Open Source Contributor"]
const name = "Rohit Patel".split("")

const Hero = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center px-6 md:px-20 bg-gradient-to-r from-emerald-50 via-gray-300 to-stone-200 
      text-slate-600"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-12">
        {/* 👈 Left Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-3xl md:text-5xl font-bold flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-1 mb-2 whitespace-nowrap"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Hi, I'm{" "}
            <span className="text-violet-600 text-shadow-2xs text-shadow-gray-800 font-extrabold ml-2 flex gap-1">
              {name.map((char, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* <motion.p
            className="text-lg text-sky-800 md:text-xl mt-2 h-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {roles[index]}
          </motion.p> */}

<motion.p
  className="text-lg text-sky-600 md:text-xl mt-2 h-10 font-semibold"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
>
  <Typewriter
    words={roles}
    loop={0} 
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</motion.p>


          <motion.div
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="/resume.pdf"
              download
              className="bg-stone-600 text-white px-5 py-2 rounded-md hover:bg-stone-500 transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="border border-stone-500 text-stone-800 px-5 py-2 rounded-md hover:bg-stone-600 hover:text-white transition"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex gap-6 text-2xl text-gray-700 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <a
              href="https://github.com/rohitpatel73"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/rohitpatel73"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:rohitpatelmankari@gmail.com" className="hover:text-zinc-500">
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        {/* 👉 Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profile}
            alt="Profile"
            className="rounded-xl w-72 md:w-[450px] aspect-[3/4] object-cover shadow-xl wave-animation"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
