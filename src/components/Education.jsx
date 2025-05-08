import { FaGraduationCap } from 'react-icons/fa'

const Education = () => (
  <section className="py-12 px-6 md:px-16 bg-gradient-to-b from-stone-100 to-stone-300" id="education">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
      <FaGraduationCap className="inline-block text-purple-600 mr-2" />
      Education
    </h2>


    
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Class 10th */}
      <div className="bg-stone-200 rounded-xl shadow-md p-6 border-l-4 border-stone-600 hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-gray-800">Class 10th</h3>
        <div className='flex justify-between'>
        <p className="text-gray-600">Govt. Excellence HSS Chhatarpur, 2017 – 2018</p>
        <p className="text-gray-600">Percentage - 92%</p>

        </div>
      </div>

      {/* Class 12th */}
      <div className="bg-stone-200 rounded-xl shadow-md p-6 border-l-4 border-stone-600 hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-gray-800">Class 12th</h3>

        <div className='flex justify-between'>
        <p className="text-gray-600">Govt. Subhash Excellence HSS Bhopal, 2019 – 2020</p>
        <p className="text-gray-600">Percentage - 85.2%</p>

        </div>
      </div>

      {/* B.Tech */}
      <div className="bg-stone-200 rounded-xl shadow-md p-6 border-l-4 border-stone-600 hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-gray-800">B.Tech in Computer Science</h3>

        <div className='flex justify-between'>
        <p className="text-gray-600">Madhav Institute of Technology & Science, Gwalior, 2021 – 2025</p>
        <p className="text-gray-600">CGPA - 7.12</p>

        </div>

      </div>
    </div>
    
  </section>
)

export default Education;
