import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, InstagramIcon, MailIcon } from 'lucide-react';
import { MunEvent } from '../utils/types';
interface MunCardProps {
  mun: MunEvent;
  index: number;
}
const MunCard = ({
  mun,
  index
}: MunCardProps) => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.4,
    delay: index * 0.1
  }} whileHover={{
    y: -5
  }} className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#0a2463] h-full">
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0a2463] mb-2">{mun.name}</h3>
        <div className="flex items-start gap-2 text-gray-600 mb-2">
          <CalendarIcon className="h-5 w-5 text-[#ffd700] flex-shrink-0 mt-0.5" />
          <div>
            {mun.dates.map((date, i) => <span key={i} className="block">
                {new Date(date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
              </span>)}
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <MapPinIcon className="h-5 w-5 text-[#ffd700] flex-shrink-0" />
          <span>{mun.location}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{mun.description}</p>
        <div className="border-t border-gray-200 pt-4 mt-auto">
          <div className="flex items-center gap-2 text-gray-600 mb-1">
            <InstagramIcon className="h-4 w-4 text-[#ffd700]" />
            <span className="text-sm">{mun.instagram}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MailIcon className="h-4 w-4 text-[#ffd700]" />
            <span className="text-sm">{mun.email}</span>
          </div>
        </div>
      </div>
    </motion.div>;
};
export default MunCard;