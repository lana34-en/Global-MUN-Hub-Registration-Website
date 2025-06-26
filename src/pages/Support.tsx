import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, InstagramIcon, HelpCircleIcon, MessageCircleIcon } from 'lucide-react';
const Support = () => {
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
            <HelpCircleIcon className="h-10 w-10 text-[#ffd700]" />
          </motion.div>
          <h2 className="text-3xl font-bold text-[#0a2463] mb-4">
            Support & Contact
          </h2>
          <p className="text-lg text-gray-600">
            Need assistance or have questions about Global MUN Hub? We're here
            to help!
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
          <h3 className="text-xl font-bold text-[#0a2463] mb-6 flex items-center">
            <MessageCircleIcon className="h-6 w-6 text-[#ffd700] mr-2" />
            Contact Information
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="bg-[#0a2463] p-3 rounded-full">
                <MailIcon className="h-6 w-6 text-[#ffd700]" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-[#0a2463] mb-1">
                  Email Us
                </h4>
                <p className="text-gray-600 mb-2">
                  For inquiries, support, or feedback:
                </p>
                <a href="mailto:contact@globalmunhub.com" className="text-[#0a2463] hover:text-[#0a3473] font-medium transition-colors duration-300">
                  contact@globalmunhub.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="bg-[#0a2463] p-3 rounded-full">
                <InstagramIcon className="h-6 w-6 text-[#ffd700]" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-[#0a2463] mb-1">
                  Follow Us
                </h4>
                <p className="text-gray-600 mb-2">
                  Stay updated with the latest MUN events and announcements:
                </p>
                <a href="https://instagram.com/globalmunhub" target="_blank" rel="noopener noreferrer" className="text-[#0a2463] hover:text-[#0a3473] font-medium transition-colors duration-300">
                  @globalmunhub
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#0a2463]">
          <h3 className="text-xl font-bold text-[#0a2463] mb-4">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium text-[#0a2463] mb-1">
                What is Global MUN Hub?
              </h4>
              <p className="text-gray-600">
                Global MUN Hub is a platform connecting Model United Nations
                conferences worldwide, making it easier for organizers to
                promote their events and for delegates to discover
                opportunities.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-[#0a2463] mb-1">
                How do I register my MUN conference?
              </h4>
              <p className="text-gray-600">
                Simply navigate to the "Register MUN" page and fill out the form
                with your conference details. Your event will be listed on our
                platform immediately.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-[#0a2463] mb-1">
                Is there a fee to register my conference?
              </h4>
              <p className="text-gray-600">
                No, Global MUN Hub is completely free for both conference
                organizers and delegates.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>;
};
export default Support;