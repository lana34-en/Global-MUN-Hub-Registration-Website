import React from 'react';
import { motion } from 'framer-motion';
const Footer = () => {
  return <motion.footer initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.5
  }} className="bg-[#0a2463] text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Global MUN Hub | Connecting Model United
          Nations Worldwide
        </p>
        <div className="mt-2 text-sm text-gray-300">
          <a href="#" className="hover:text-[#ffd700] transition-colors duration-300 mx-2">
            Terms
          </a>
          <a href="#" className="hover:text-[#ffd700] transition-colors duration-300 mx-2">
            Privacy
          </a>
          <a href="#" className="hover:text-[#ffd700] transition-colors duration-300 mx-2">
            Contact
          </a>
        </div>
      </div>
    </motion.footer>;
};
export default Footer;