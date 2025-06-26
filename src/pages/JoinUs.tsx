import React from 'react';
import { motion } from 'framer-motion';
import { UsersIcon, CheckCircleIcon, ExternalLinkIcon } from 'lucide-react';
const JoinUs = () => {
  return <div className="container mx-auto px-4 py-12">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }} className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="inline-flex items-center justify-center p-3 bg-[#0a2463] rounded-full mb-4">
            <UsersIcon className="h-10 w-10 text-[#ffd700]" />
          </motion.div>
          <h2 className="text-3xl font-bold text-[#0a2463] mb-4">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Become part of the Global MUN Hub community and help us connect
            Model UN conferences worldwide.
          </p>
        </div>
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#0a2463] mb-8">
          <h3 className="text-xl font-bold text-[#0a2463] mb-6">
            About Global MUN Hub
          </h3>
          <p className="text-gray-600 mb-4">
            Global MUN Hub is a platform dedicated to connecting Model United
            Nations conferences around the world. Our mission is to create a
            central hub where:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <CheckCircleIcon className="h-5 w-5 text-[#ffd700] mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">
                MUN organizers can promote their conferences to a global
                audience
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircleIcon className="h-5 w-5 text-[#ffd700] mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">
                Delegates can discover MUN opportunities worldwide
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircleIcon className="h-5 w-5 text-[#ffd700] mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">
                The MUN community can connect, share resources, and grow
                together
              </span>
            </li>
          </ul>
          <p className="text-gray-600">
            We believe in the power of Model UN to develop future leaders,
            foster global understanding, and create positive change. By joining
            our team, you'll be helping to build a platform that supports these
            goals.
          </p>
        </motion.div>
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#0a2463]">
          <h3 className="text-xl font-bold text-[#0a2463] mb-6">
            Join Our Team
          </h3>
          <div className="space-y-6">
            <p className="text-gray-600">
              We're looking for passionate individuals who share our vision for
              connecting the global MUN community. Whether you're a current
              delegate, an experienced MUN organizer, or simply passionate about
              international relations, we'd love to have you on our team.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-[#0a2463] mb-3">
                Open Positions
              </h4>
              <ul className="space-y-2 mb-4">
                <li className="text-gray-600">• Regional MUN Ambassadors</li>
                <li className="text-gray-600">• Content Writers</li>
                <li className="text-gray-600">• Social Media Managers</li>
                <li className="text-gray-600">
                  • Web Development Contributors
                </li>
              </ul>
              <p className="text-gray-600 mb-6">
                To apply, please fill out our application form. We'll get back
                to you as soon as possible!
              </p>
              <div className="flex justify-center">
                <motion.a whileHover={{
                scale: 1.03
              }} whileTap={{
                scale: 0.98
              }} href="#" className="inline-flex items-center px-6 py-3 bg-[#0a2463] text-white rounded-md hover:bg-[#0a3473] transition-colors duration-300 shadow-md">
                  Application Form
                  <ExternalLinkIcon className="ml-2 h-4 w-4" />
                </motion.a>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                (Google Form link coming soon)
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>;
};
export default JoinUs;