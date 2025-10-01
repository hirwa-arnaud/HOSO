import { FileText, Calendar, Users, PlayCircle } from "lucide-react";
import ghImg from '../assets/gh.jpg';
import UCI from '../assets/uci.jpg';
import Jo from '../assets/jo.jpg';
import Start from '../assets/rtb.jpg';
import Rca from '../assets/rca.jpg';
import School from '../assets/start.jpg';
import Ho from '../assets/hos.jpg';
import Nvs from '../assets/nvs.webp';
import Header from '../components/Header';
import Serena from "../assets/serena.jpg";
import Sale from "../assets/sale.jpg";
import Pande from "../assets/pande.jpg";
import All from "../assets/all.jpg";
import Begin from "../assets/begin.jpg";
import Board from "../assets/board.jpg";
import Footer from "../components/Footer"

export default function Landin() {
  const items = [
    {
      title: "Mission",
      text: "To improve the quality and standards of education through competitive school leadership and management",
      icon: <FileText size={28} />,
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
  
       const images = [Serena, Sale, Pande, All, Begin, Board];

  return (
    <>
      <Header />

      <section className="py-16 bg-white text-center px-4 sm:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Mission, Goals, <span className="text-teal-500">Values.</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
          We bring together head teachers and school leaders to strengthen
          education standards, share knowledge, and inspire the next generation.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-xl transition"
            >
              <div
                className={`w-14 h-14 mx-auto flex items-center justify-center rounded-full text-white ${item.color}`}
              >
                {item.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-600 text-sm sm:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          What is <span className="text-cyan-400">HOSO?</span>
        </h2>
        <p className="text-center text-base md:text-lg max-w-4xl mx-auto mb-12 text-gray-700">
          The Head of Schools Organization (HOSO) is a professional umbrella body that unites head teachers, school directors, and education leaders across Rwanda...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[{ title: "FOR INSTRUCTORS", img: Nvs }, { title: "FOR STUDENTS", img: ghImg }].map((card, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden group h-[250px] sm:h-[300px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${card.img})` }}
              />
              <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-6">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <button className={`mt-2 px-6 py-2 rounded-full transition ${index === 0 ? "border border-white hover:bg-white hover:text-black" : "bg-cyan-400 hover:bg-cyan-500 font-semibold"}`}>
                  {index === 0 ? "Get Involved" : "Become a Member"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 md:px-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="inline-block w-4 h-4 bg-green-400 rounded-full mr-2 align-middle"></span>
              <span className="text-blue-900">About</span> <span className="text-cyan-400">HOSO</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            We are delighted to have you here. HOSO is a community of dedicated school leaders working together to improve the quality of education across Rwanda. Our organization brings together head teachers, school directors, and education officers who share a common vision: to build strong schools through effective leadership, collaboration, and innovation.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 w-5 h-40 bg-cyan-400 rounded-br-xl z-10"></div>
            <div className="absolute bottom-0 right-0 w-5 h-40 bg-green-400 rounded-tl-xl z-10"></div>

            <img src={Jo} alt="HOSO Meeting" className="w-full h-64 sm:h-80 object-cover rounded-xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white text-cyan-500 w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition">
                <PlayCircle size={40} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 md:px-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="inline-block w-4 h-4 bg-green-400 rounded-full mr-2 align-middle"></span>
              <span className="text-blue-900">Explore</span> <span className="text-cyan-400">HOSO</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              At the Head of Schools Organization, we bring together Rwanda’s school leaders to share knowledge, build leadership skills, and strengthen the education system. Explore our programs, initiatives, and the impact we are making across the country, and see how you can be part of a movement that is transforming schools and communities.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 w-5 h-40 bg-cyan-400 rounded-br-xl z-10"></div>
            <div className="absolute bottom-0 right-0 w-5 h-40 bg-green-400 rounded-tl-xl z-10"></div>

            <img src={Ho} alt="HOSO Meeting" className="w-full h-64 sm:h-80 object-cover rounded-xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white text-cyan-500 w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition">
                <PlayCircle size={40} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase text-sm tracking-wide text-blue-600 mb-2">Testimonial</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What They Say?</h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              Being part of the Head of Schools Organization (HOSO) has been one of the most rewarding experiences of my career. As a head teacher, I often faced challenges in managing my school effectively, from staff development to student engagement and community involvement
            </p>
            <button className="inline-flex items-center border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-white transition duration-300">
              Write your testimonial <span className="ml-2">→</span>
            </button>
          </div>

          <div className="relative flex justify-center">
            <img src={Jo} alt="Speaker" className="rounded-2xl shadow-lg w-full max-w-md object-cover" />
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 w-11/12 md:w-4/5">
              <p className="text-gray-700 my-3 text-sm md:text-base">
                “Joining HOSO has completely changed the way I lead my school...”
              </p>
              <h4 className="font-semibold text-gray-900">Nsengimana Joseph</h4>
              <div className="flex items-center justify-between mt-3">
                <div className="flex space-x-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500">12 reviews at Yelp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white py-16 px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-300 mb-2">
          Latest News and Resources
        </h2>
        <p className="text-center text-gray-400 mb-12">
          See the developments that have occurred to TOTC in the world
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="relative rounded-xl overflow-hidden">
              <img src={UCI} alt="UCI" className="w-full h-[220px] sm:h-[300px] md:h-[360px] object-cover rounded-xl" />
              <span className="absolute top-4 left-4 bg-teal-500 px-3 py-1 text-sm rounded-full">NEWS</span>
            </div>
            <h3 className="text-2xl font-semibold text-black">
              Schools closed across the Kigali city while the UCI championship takes place
            </h3>
            <p className="text-gray-400">Rwanda hosted the 2025 UCI Road World Championships in Kigali from Sept 21 to 28.</p>
            <a href="#" className="text-indigo-400 underline">Read more</a>
          </div>

          <div className="space-y-8">
            {[{ img: Rca, title: "Rwanda’s Investment in Education Technology", desc: "The Rwanda Coding Academy celebrated a milestone with its new campus launch..." },
            { img: School, title: "Launch of the 2025/2026 Academic Year", desc: "The Ministry of Education officially opened the academic year across Rwanda..." },
            { img: Start, title: "Expansion of TVET Centres of Excellence", desc: "The Rwanda Technical and Vocational Education and Training Board (RTB) has announced plans to establish modern model technical schools in every district" }].map((news, index) => (
              <div key={index} className="flex gap-4">
                <img src={news.img} alt="News" className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg" />
                <div>
                  <h4 className="text-indigo-400 font-semibold text-base sm:text-lg">{news.title}</h4>
                  <p className="text-gray-400 text-sm">{news.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    <section className="py-16 px-6 md:px-20 bg-white">

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
        Photo <span className="text-cyan-500">Gallery</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition group"
          >
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
}
