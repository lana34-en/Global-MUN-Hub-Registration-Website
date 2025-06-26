import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GlobeIcon } from 'lucide-react';
const Header = () => {
  return <header className="bg-[#0a2463] text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center mb-4">
          <motion.div initial={{
          y: -20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.5
        }} className="flex items-center gap-2 mb-1">
            <GlobeIcon className="h-8 w-8 text-[#ffd700]" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-white">GLOBAL</span>
              <span className="text-[#ffd700]"> MUN </span>
              <span className="text-white">HUB</span>
            </h1>
          </motion.div>
          <motion.p initial={{
          y: -10,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="text-lg text-gray-200 italic">
            Connecting Model UN Conferences Worldwide
          </motion.p>
        </div>
        <motion.nav initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} className="flex justify-center space-x-6 mt-4 flex-wrap">
          <Link to="/" className="text-white hover:text-[#ffd700] transition-colors duration-300 font-medium">
            Home
          </Link>
          <Link to="/register" className="text-white hover:text-[#ffd700] transition-colors duration-300 font-medium">
            Register MUN
          </Link>
          <Link to="/support" className="text-white hover:text-[#ffd700] transition-colors duration-300 font-medium">
            Support
          </Link>
          <Link to="/join-us" className="text-white hover:text-[#ffd700] transition-colors duration-300 font-medium">
            Join Us
          </Link>
        </motion.nav>
      </div>
    </header>;
};
export default Header;