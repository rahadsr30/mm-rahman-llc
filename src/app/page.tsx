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

import logo from "@/assets/logo.png";
import Footer from "@/components/footer";

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
        <header className="bg-[url('/heroBg.png')] bg-cover bg-center">
          <div className="wrapper py-6 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-hero text-[#0A0A0B] mb-6 lg:mb-10 font-public">
                At MM Rahman, we provide tailored solutions to help businesses
                grow and thrive in today&apos;s fast-paced world.
              </p>

              <button className="flex items-center gap-2 border border-[#585962] px-6 py-3 rounded-3xl text-body-title text-[#0A0A0B] font-public">
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

        <section className="bg-[url('/advantageBg.png')] bg-cover bg-center">
          <div className="wrapper py-section"></div>
        </section>

        <section className="bg-[url('/blankBg.png')] bg-cover bg-center py-section"></section>

        <section className="bg-white py-section">
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
                <button className="flex items-center gap-2 border border-[#585962] px-6 py-3 rounded-3xl text-body-title text-white mx-auto mt-10 font-public">
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
                <button className="flex items-center gap-2 border border-[#585962] px-6 py-3 rounded-3xl text-body-title text-white mx-auto mt-10 font-public">
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

        <section className="bg-black">
          <div className="wrapper py-section">
            <h1 className="text-white font-bold text-2xl md:text-5xl">
              Latest News & Announcements
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 mt-14">
              <div className="bg-[#FAFAFA]">
                <Image src={news1} alt="" className="w-full h-[238px]" />
                <div className="space-y-1 md:space-y-2 px-3 md:px-6 mt-2 md:mt-4">
                  <h2 className="text-sm md:text-base text-[#374151] font-bold">
                    AI in Education: Revolutionizing How We Learn
                  </h2>
                  <p className="text-sm md:text-base text-[#506079] font-medium">
                    Discover how AI is revolutionizing education with
                    personalized learning and automated grading.
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-6 px-3 md:px-6 pb-3">
                  <Image src={avater} alt="" className="w-8 h-8" />
                  <div>
                    <h5 className="text-sm md:text-base text-[#374151] font-bold">
                      Riaz Ahmed
                    </h5>
                    <p className="text-sm text-[#506079] font-medium">
                      Nov 15, 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#FAFAFA]">
                <Image src={news2} alt="" className="w-full h-[238px]" />
                <div className="space-y-1 md:space-y-2 px-3 md:px-6 mt-2 md:mt-4">
                  <h2 className="text-sm md:text-base text-[#374151] font-bold">
                    Top 5 Trends Shaping Online Learning in 2024
                  </h2>
                  <p className="text-sm md:text-base text-[#506079] font-medium">
                    From gamification to microlearning, explore the trends that
                    are redefining the future education.
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-6 px-3 md:px-6 pb-3">
                  <Image src={avater} alt="" className="w-8 h-8" />
                  <div>
                    <h5 className="text-sm md:text-base text-[#374151] font-bold">
                      Mahamudul Hasan
                    </h5>
                    <p className="text-sm text-[#506079] font-medium">
                      Nov 15, 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex flex-col gap-6">
                <div className="flex items-center justify-center gap-4 bg-[#FAFAFA]">
                  <div className="space-y-4 p-3">
                    <h5 className="text-sm md:text-base text-[#374151] font-bold">
                      The Rise of Lifelong Learning Platforms
                    </h5>
                    <p className="text-[12px] text-sm font-medium text-[#506079]">
                      Rahad Ahmed
                    </p>
                  </div>
                  <Image src={news3} alt="" width={200} height={126} />
                </div>
                <div className="flex items-center justify-center gap-4 bg-[#FAFAFA]">
                  <div className="space-y-4 p-3">
                    <h5 className="text-sm md:text-base text-[#374151] font-bold">
                      The Rise of Lifelong Learning Platforms
                    </h5>
                    <p className="text-[12px] text-sm font-medium text-[#506079]">
                      Rokibul Islam
                    </p>
                  </div>
                  <Image src={news4} alt="" width={200} height={126} />
                </div>
                <div className="flex items-center justify-center gap-4 bg-[#FAFAFA]">
                  <div className="space-y-4 p-3">
                    <h5 className="text-sm md:text-base text-[#374151] font-bold">
                      The Rise of Lifelong Learning Platforms
                    </h5>
                    <p className="text-[12px] text-sm font-medium text-[#506079]">
                      Rokibul Hasan
                    </p>
                  </div>
                  <Image src={news5} alt="" width={200} height={126} />
                </div>
              </div>
            </div>
            <button className="flex items-center mx-auto mt-6 lg:mt-10 gap-2 border border-[#585962] px-6 py-3 rounded-3xl text-body-title text-white font-public">
              <span>Read More</span>
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
