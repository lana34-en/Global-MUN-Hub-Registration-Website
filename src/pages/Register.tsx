import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'sonner';
import { MunContext } from '../context/MunContext';
import { CalendarIcon, MapPinIcon, InstagramIcon, MailIcon, TrashIcon } from 'lucide-react';
const Register = () => {
  const navigate = useNavigate();
  const {
    addMun
  } = useContext(MunContext);
  const [name, setName] = useState('');
  const [dates, setDates] = useState<Date[]>([]);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [instagram, setInstagram] = useState('');
  const [email, setEmail] = useState('');
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const handleAddDate = () => {
    if (currentDate) {
      setDates([...dates, currentDate]);
      setCurrentDate(null);
    }
  };
  const handleRemoveDate = (index: number) => {
    setDates(dates.filter((_, i) => i !== index));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dates.length === 0) {
      toast.error('Please add at least one date');
      return;
    }
    addMun({
      id: Date.now().toString(),
      name,
      dates,
      location,
      description,
      instagram,
      email
    });
    toast.success('MUN registered successfully!');
    navigate('/');
  };
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
        <h2 className="text-3xl font-bold text-[#0a2463] mb-2 text-center">
          Register Your MUN
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Share your Model UN conference details with the global community
        </p>
        <motion.form initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#0a2463]">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              MUN Name
            </label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2463] transition-all duration-300" placeholder="e.g. Harvard World Model United Nations" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Dates
            </label>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="flex-grow">
                <DatePicker selected={currentDate} onChange={date => setCurrentDate(date)} dateFormat="MMMM d, yyyy" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2463] transition-all duration-300" placeholderText="Select a date" isClearable />
              </div>
              <button type="button" onClick={handleAddDate} disabled={!currentDate} className="px-4 py-3 bg-[#0a2463] text-white rounded-md hover:bg-[#0a3473] transition-colors duration-300 disabled:opacity-50">
                Add Date
              </button>
            </div>
            {dates.length > 0 && <div className="mt-3 space-y-2">
                <p className="text-sm font-medium text-gray-700">
                  Selected Dates:
                </p>
                {dates.map((date, index) => <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 text-[#ffd700] mr-2" />
                      <span className="text-gray-700">
                        {date.toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                      </span>
                    </div>
                    <button type="button" onClick={() => handleRemoveDate(index)} className="text-red-500 hover:text-red-700 transition-colors duration-300">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>)}
              </div>}
          </div>
          <div className="mb-6">
            <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
              <span className="flex items-center">
                <MapPinIcon className="h-4 w-4 mr-2 text-[#ffd700]" />
                Location
              </span>
            </label>
            <input type="text" id="location" value={location} onChange={e => setLocation(e.target.value)} required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2463] transition-all duration-300" placeholder="e.g. Boston, Massachusetts, USA" />
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} required rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2463] transition-all duration-300" placeholder="Describe your MUN conference..."></textarea>
          </div>
          <div className="mb-6">
            <label htmlFor="instagram" className="block text-gray-700 font-medium mb-2">
              <span className="flex items-center">
                <InstagramIcon className="h-4 w-4 mr-2 text-[#ffd700]" />
                Instagram Handle
              </span>
            </label>
            <input type="text" id="instagram" value={instagram} onChange={e => setInstagram(e.target.value)} required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2463] transition-all duration-300" placeholder="@yourmun" />
          </div>
          <div className="mb-8">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              <span className="flex items-center">
                <MailIcon className="h-4 w-4 mr-2 text-[#ffd700]" />
                Email
              </span>
            </label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2463] transition-all duration-300" placeholder="contact@yourmun.com" />
          </div>
          <div className="flex justify-center">
            <motion.button whileHover={{
            scale: 1.03
          }} whileTap={{
            scale: 0.98
          }} type="submit" className="px-8 py-3 bg-[#0a2463] text-white rounded-md hover:bg-[#0a3473] transition-colors duration-300 shadow-md font-medium text-lg">
              Register MUN
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>;
};
export default Register;