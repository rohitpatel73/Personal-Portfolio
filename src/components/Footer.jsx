import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => (
  <footer className="bg-gradient-to-b from-slate-100 to-gray-400 border-t py-6">
    <div className="flex justify-center space-x-6 mb-3">
      <a
        href="https://github.com/rohitpatel73"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900  transition"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://linkedin.com/in/rohitpatel73"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 transition"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-600 transition"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="https://instagram.com/rohitpatel7.3"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 transition"
      >
        <FaInstagram size={24} />
      </a>
    </div>
    <p className="text-sm text-gray-800  text-center">
      &copy; {new Date().getFullYear()} Rohit Patel. All rights reserved.
    </p>
  </footer>
)

export default Footer
