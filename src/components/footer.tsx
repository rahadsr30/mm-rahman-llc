import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#22272F] text-[#F5F5F6] py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div>
            <Image src={logo} alt="" width={247} height={32} />
            <div className="mt-5 lg:mt-8">
              <ul className="space-y-2">
                <li>123 Business Road</li>
                <li>City, State 12345</li>
                <li>Email: support@example.com</li>
                <li>Phone: (123) 456-7890</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/home" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-400">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/brands" className="hover:text-gray-400">
                  Our Brands
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <FaLinkedin className="size-10 text-[#E5E6E8]" />
              <FaSquareFacebook className="size-10 text-[#E5E6E8]" />
              <FaSquareXTwitter className="size-10 text-[#E5E6E8]" />
            </div>
          </div>
        </div>
        <hr className="mt-8 border-gray-600" />
        <div className="mt-8 text-center text-sm text-[#F5F5F6]">
          &copy; {new Date().getFullYear()} © MM Rahman 2025. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
