import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "react-hot-toast" 

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!")
          form.current.reset()
        },
        (error) => {
          toast.error("Something went wrong. Please try again.")
          console.error(error)
        }
      )
  }

  return (
    <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-stone-100 to-stone-300" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-emerald-950 mb-8">
          <span className="text-stone-700">Contact</span> Me
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-8 rounded-xl shadow-md space-y-6 border-t-4 border-stone-600"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-stone-400 transition"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-stone-400 transition"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-stone-400 transition"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-stone-600 hover:bg-stone-500 text-white font-semibold px-8 py-3 rounded-md transition duration-300 shadow-md"
            >
              Send Message ✉️
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact;
