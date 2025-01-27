"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import logo from "@/assets/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black">
      <div className="px-4 py-3 wrapper">
        <div className="flex justify-between items-center h-16">
          <Image src={logo} alt="" width={247} height={32} />

          <div className="hidden md:flex space-x-8 text-[#F5F5F6] hover:text-white">
            <a href="#home">Home</a>
            <a href="#caseStudy">Case Study</a>
            <a href="#brands">Our Brands</a>
            <a href="#articles">Articles</a>
          </div>

          <div className="hidden md:flex">
            <button className="bg-[#13B2C7] hover:bg-[#0A9B9C] text-white text-body-title px-6 py-3 rounded-3xl">
              Get In Touch
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#F5F5F6] focus:outline-none"
            >
              <BiMenu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="px-4 py-2 space-y-2">
            <a href="/home" className="text-[#F5F5F6] block">
              Home
            </a>
            <a href="/services" className="text-[#F5F5F6] block">
              Services
            </a>
            <a href="/brands" className="text-[#F5F5F6] block">
              Our Brands
            </a>
            <a href="/articles" className="text-[#F5F5F6] block">
              Articles
            </a>
            <button className="w-full bg-[#13B2C7] text-white text-body-title px-6 py-3 rounded-3xl">
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
