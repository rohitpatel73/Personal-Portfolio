import profile from '../assets/profile.jpg'

const About = () => (
  <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-stone-100 to-stone-200" id="about">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">


      <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden">
        <img src={profile} alt="Profile" className="w-full h-full object-cover" />
      </div>


      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-3">About Me</h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl">
          I'm a passionate <span className="font-medium text-blue-600">Full-Stack Developer</span> with a strong focus on building scalable web applications using the
          <span className="text-sky-600 font-medium"> MERN stack</span> (MongoDB, Express.js, React.js, Node.js). I specialize in crafting responsive, user-centric interfaces with
          <span className="text-sky-600 font-medium"> React.js & Next.js</span> and modern UI libraries like <span className="text-sky-600 font-medium">Tailwind CSS</span>.
          Currently pursuing a <span className="text-emerald-600 font-medium">B.Tech in Computer Science</span>, I have a strong interest in solving real-world problems through clean, maintainable, and efficient code.
        </p>
      </div>

    </div>
  </section>
)

export default About
