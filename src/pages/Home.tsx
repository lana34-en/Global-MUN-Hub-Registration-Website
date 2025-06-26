import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MunCard from '../components/MunCard';
import { MunContext } from '../context/MunContext';
import { PlusCircleIcon } from 'lucide-react';
const Home = () => {
  const {
    muns
  } = useContext(MunContext);
  return <div className="container mx-auto px-4 py-12">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }} className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#0a2463] mb-4">
          Discover Model UN Conferences
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Browse upcoming MUN conferences from around the world or register your
          own event to connect with delegates globally.
        </p>
      </motion.div>
      {muns.length === 0 ? <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5,
      delay: 0.2
    }} className="text-center py-16">
          <div className="bg-gray-100 rounded-lg p-10 max-w-md mx-auto">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              No MUN Events Yet
            </h3>
            <p className="text-gray-600 mb-6">
              Be the first to register your Model UN conference!
            </p>
            <Link to="/register" className="inline-flex items-center px-4 py-2 bg-[#0a2463] text-white rounded-md hover:bg-[#0a3473] transition-colors duration-300">
              <PlusCircleIcon className="w-5 h-5 mr-2" />
              Register MUN
            </Link>
          </div>
        </motion.div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {muns.map((mun, index) => <MunCard key={mun.id} mun={mun} index={index} />)}
        </div>}
      {muns.length > 0 && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5,
      delay: 0.4
    }} className="mt-12 text-center">
          <Link to="/register" className="inline-flex items-center px-6 py-3 bg-[#0a2463] text-white rounded-md hover:bg-[#0a3473] transition-colors duration-300 shadow-md">
            <PlusCircleIcon className="w-5 h-5 mr-2" />
            Register Your MUN
          </Link>
        </motion.div>}
    </div>;
};
export default Home;