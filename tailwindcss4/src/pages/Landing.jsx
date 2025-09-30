import { FileText, Calendar, Users, PlayCircle } from "lucide-react";
import ghImg from '../assets/gh.jpg';
import Jo from '../assets/jo.jpg';
import Ho from '../assets/hos.jpg';
import Nvs from '../assets/nvs.webp'
import Header from "../components/Header";
export default function Landin() {
  const items = [
    {
      title: "Mission",
      text: "To improve the quality and standards of education through competitive school leadership and management",
      icon: <FileText className="" size={28} />,
      color: "bg-blue-500",
    },
    {
      title: "Goals",
      text: "A Rwanda where every school is led by empowered, competent, and innovative leaders.",
      icon: <Calendar size={28} />,
      color: "bg-teal-500",
    },
    {
      title: "Values",
      text: "Leadership • Integrity • Excellence • Collaboration • Innovation",
      icon: <Users size={28} />,
      color: "bg-cyan-500",
    },
  ];
return(
    <>
    <Header />
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Mission, Goals, <span className="text-teal-500">Values.</span>
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-gray-600">
        We bring together head teachers and school leaders to strengthen
        education standards, share knowledge, and inspire the next generation.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-xl transition relative"
          >
            <div
              className={`w-14 h-14 mx-auto flex items-center justify-center rounded-full text-white ${item.color} absolute  top-[-13px]`}
            >
              {item.icon}
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              {item.title}
            </h3>

            <p className="mt-4 text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
     <section className="py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-6">
        What is <span className="text-cyan-400">HOSO?</span>
      </h2>
      <p className="text-center text-lg  max-w-4xl mx-auto mb-12">
        The Head of Schools Organization (HOSO) is a professional umbrella body that unites head teachers, school directors, and education leaders across Rwanda. Founded with the belief that strong leadership is the backbone of quality education, HOSO exists to strengthen the capacity of school leaders, promote collaboration, and ensure that every school in Rwanda is guided by competent and visionary leadership.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative rounded-lg overflow-hidden group h-[300px]">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${Nvs})` }}></div>
          <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-6">
            <h3 className="text-xl font-semibold mb-2">FOR INSTRUCTORS</h3>
            <button className="mt-2 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">Get Involved</button>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden group h-[300px]">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${ghImg})` }}></div>
          <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-6">
            <h3 className="text-xl font-semibold mb-2">FOR STUDENTS</h3>
            <button className="mt-2 px-6 py-2 bg-cyan-400  font-semibold rounded-full hover:bg-cyan-500 transition">Become a Member</button>
          </div>
        </div>
      </div>
    </section>
<section className="py-16 px-6 md:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="inline-block w-4 h-4 bg-green-400 rounded-full mr-2 align-middle"></span>
            <span className="text-blue-900">About</span> <span className="text-cyan-400">HOSO</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are delighted to have you here. HOSO is a community of dedicated school leaders working together to improve the quality of education across Rwanda.
            Our organization brings together head teachers, school directors, and education officers who share a common vision: to build strong schools through effective leadership, collaboration, and innovation.
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <div className="absolute top-0 left-0 w-5 h-40 bg-cyan-400 rounded-br-xl z-10"></div>
          <div className="absolute bottom-0 right-0 w-5 h-40 bg-green-400 rounded-tl-xl z-10"></div>

     
          <img src={Jo} alt="HOSO Meeting" className="w-full h-80 object-cover rounded-xl"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-cyan-500 w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition">
              <PlayCircle size={40} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="inline-block w-4 h-4 bg-green-400 rounded-full mr-2 align-middle"></span>
            <span className="text-blue-900">Explore</span> <span className="text-cyan-400">HOSO</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At the Head of Schools Organization, we bring together Rwanda’s school leaders to share knowledge, build leadership skills, and strengthen the education system. Explore our programs, initiatives, and the impact we are making across the country, and see how you can be part of a movement that is transforming schools and communities.
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <div className="absolute top-0 left-0 w-5 h-40 bg-cyan-400 rounded-br-xl z-10"></div>
          <div className="absolute bottom-0 right-0 w-5 h-40 bg-green-400 rounded-tl-xl z-10"></div>

     
          <img src={Ho} alt="HOSO Meeting" className="w-full h-80 object-cover rounded-xl"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-cyan-500 w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition">
              <PlayCircle size={40} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
 ); 
}
