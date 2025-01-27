import Navbar from "@/components/nav";
import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import dashbord from "@/assets/hero/dashbord.png";
import rabfy from "@/assets/hero/icon2.png";
import aiConsultence from "@/assets/hero/icon1.png";
import rabfyCompo from "@/assets/rabfy.png";
import aiCompo from "@/assets/ai.png";
import news1 from "@/assets/news1.png";
import news2 from "@/assets/news2.png";
import news3 from "@/assets/news3.png";
import news4 from "@/assets/news4.png";
import news5 from "@/assets/news5.png";
import avater from "@/assets/avaterr.png";
import businessOptimization from "@/assets/metting.png";
import marketing from "@/assets/Marketing.png";
import technology from "@/assets/Technology.png";
import business from "@/assets/business.png";

import logo from "@/assets/logo.png";
import Footer from "@/components/footer";

const advantageCards = [
  {
    title: "Marketing and Branding",
    description: "Creating impactful strategies to elevate your brand.",
    image: marketing,
  },
  {
    title: "Technology Solutions",
    description: "Empowering your business with innovative technology.",
    image: technology,
  },
  {
    title: "Business Consulting",
    description:
      "Comprehensive strategies to drive growth and optimize performance.",
    image: business,
  },
];
const rabfyBrands = [
  {
    title: "80+",
    description: "Creators",
  },
  {
    title: "30+",
    description: "Brands",
  },
  {
    title: "8+",
    description: "Countries",
  },
  {
    title: "90%",
    description: "Satisfaction Rate",
  },
];
const aiBrands = [
  {
    title: "20+",
    description: "Companies",
  },
  {
    title: "15+",
    description: "Industries",
  },
  {
    title: "80%",
    description: "Improvement",
  },
  {
    title: "10+",
    description: "Years Experience",
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <header
          id="home"
          className="bg-[url('/heroBg.png')] bg-cover bg-center"
        >
          <div className="wrapper py-6 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-hero text-[#0A0A0B] mb-6 lg:mb-10 font-public">
                At MM Rahman, we provide tailored solutions to help businesses
                grow and thrive in today&apos;s fast-paced world.
              </p>

              <button className="flex items-center gap-2 border border-[#585962] hover:border-2 px-6 py-3 rounded-3xl text-body-title text-[#0A0A0B] font-public">
                <span>Discover More</span>
                <FaRegArrowAltCircleRight />
              </button>
            </div>
            <div>
              <div>
                <Image src={dashbord} alt="" className="w-full" />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Image src={rabfy} alt="" className="w-full" />
                  <Image src={aiConsultence} alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="caseStudy"
          className="bg-[url('/advantageBg.png')] bg-cover bg-center"
        >
          <div className="wrapper py-section ">
            <div className="flex justify-between lg:flex-row flex-col-reverse items-center gap-8 lg:gap-20">
              <div className="relative group w-full lg:w-1/2 overflow-hidden rounded-lg">
                <div className="relative w-full h-64 ">
                  <Image
                    src={businessOptimization}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:bg-opacity-75 transition duration-300" />
                <div className="absolute bottom-0 left-0 w-full text-start text-white p-4 z-10">
                  <h3 className="text-lg lg:text-xl font-bold mb-2">
                    Business Process Optimization
                  </h3>
                  <p className="text-sm lg:text-base">
                    Streamline your operations and improve efficiency with our
                    expert process optimization services.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-title font-public text-white">
                  Our Expertise, Your Advantage
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 lg:mt-8">
              {advantageCards.map((card, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <div className="relative w-full h-64">
                    <Image
                      src={card.image}
                      alt={card.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-4">
                      <h3 className="lg:text-xl text-lg font-semibold text-white mb-1">
                        {card.title}
                      </h3>
                      <p className="text-white text-sm lg:text-base">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[url('/blankBg.png')] bg-cover bg-center py-section"></section>

        <section id="brands" className="bg-white py-section">
          <div className="wrapper">
            <h2 className="text-title text-[#3A3A3F] font-public">
              Our Brands
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mt-6 lg:mt-10">
              <div className="bg-black p-6">
                <Image src={logo} alt="" width={247} height={32} />
                <Image
                  src={rabfyCompo}
                  alt=""
                  width={350}
                  height={100}
                  className="mx-auto mt-10"
                />
                <button className="flex items-center gap-2 border hover:border-2 border-[#585962] px-6 py-3 rounded-3xl text-body-title text-white mx-auto mt-10 font-public">
                  <span>Explore Now</span>
                  <FaRegArrowAltCircleRight />
                </button>
                <div className="gap-3 flex flex-wrap items-center justify-center mt-6 lg:mt-10">
                  {rabfyBrands.map((item, idx) => (
                    <div key={idx}>
                      <figure>
                        <div className="mt-5 p-3 bg-white">
                          <h2 className="lg:text-lg text-2xl font-bold mb-2 font-public text-[#0A0A0B] text-center">
                            {item.title}
                          </h2>
                          <p className="text-sm lg:text-base font-public text-[#424348] text-center">
                            {item.description}
                          </p>
                        </div>
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-black p-6">
                <Image src={logo} alt="" width={247} height={32} />
                <Image
                  src={aiCompo}
                  alt=""
                  width={350}
                  height={100}
                  className="mx-auto mt-10"
                />
                <button className="flex items-center gap-2 border hover:border-2 border-[#585962] px-6 py-3 rounded-3xl text-body-title text-white mx-auto mt-10 font-public">
                  <span>Explore Now</span>
                  <FaRegArrowAltCircleRight />
                </button>
                <div className="gap-3 flex flex-wrap items-center justify-center mt-6 lg:mt-10">
                  {aiBrands.map((item, idx) => (
                    <div key={idx}>
                      <figure>
                        <div className="mt-5 p-3 bg-white">
                          <h2 className="lg:text-lg text-2xl font-bold mb-2 font-public text-[#0A0A0B] text-center">
                            {item.title}
                          </h2>
                          <p className="text-sm lg:text-base font-public text-[#424348] text-center">
                            {item.description}
                          </p>
                        </div>
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="articles" className="bg-black py-section">
          <div className="wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-title font-public text-white">
              Latest News & Announcements
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-60">
                  <Image
                    src={news1}
                    alt="AI in Education"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-gray-800">
                    AI in Education: Revolutionizing How We Learn
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    Discover how AI is revolutionizing education with
                    personalized learning and automated grading.
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <Image
                      src={avater}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <h5 className="text-sm font-medium text-gray-800">
                        Riaz Ahmed
                      </h5>
                      <p className="text-xs text-gray-500">Nov 15, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-60">
                  <Image
                    src={news2}
                    alt="Online Learning Trends"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Top 5 Trends Shaping Online Learning in 2024
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    From gamification to microlearning, explore the trends that
                    are redefining the future education.
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <Image
                      src={avater}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <h5 className="text-sm font-medium text-gray-800">
                        Rahad Ahmed
                      </h5>
                      <p className="text-xs text-gray-500">Nov 15, 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block space-y-6">
                <div className="flex items-center gap-4 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative w-28 h-28">
                    <Image
                      src={news3}
                      alt="The Rise of Lifelong Learning Platforms"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-800">
                      The Rise of Lifelong Learning Platforms
                    </h5>
                    <p className="text-xs text-gray-500 mt-1">Mahmudul Hasan</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative w-28 h-28">
                    <Image
                      src={news4}
                      alt="Student Success Stories"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-800">
                      Student Success Stories
                    </h5>
                    <p className="text-xs text-gray-500 mt-1">Rakib Ahmed</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative w-28 h-28">
                    <Image
                      src={news5}
                      alt="How VR is Enhancing Education"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-800">
                      How VR is Enhancing Education
                    </h5>
                    <p className="text-xs text-gray-500 mt-1">Mahmudul Hasan</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <button className="flex items-center gap-2 border hover:border-2 border-[#585962] px-6 py-3 rounded-3xl text-body-title text-white mx-auto mt-10 font-public">
                <span>Read More</span>
                <FaRegArrowAltCircleRight />
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
