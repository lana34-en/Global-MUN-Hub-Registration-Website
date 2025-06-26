import React, { useEffect, useState, createContext } from 'react';
import { MunEvent } from '../utils/types';
interface MunContextType {
  muns: MunEvent[];
  addMun: (mun: MunEvent) => void;
}
export const MunContext = createContext<MunContextType>({
  muns: [],
  addMun: () => {}
});
interface MunProviderProps {
  children: React.ReactNode;
}
export const MunProvider: React.FC<MunProviderProps> = ({
  children
}) => {
  const [muns, setMuns] = useState<MunEvent[]>([]);
  // Load data from localStorage on initial render
  useEffect(() => {
    const savedMuns = localStorage.getItem('muns');
    if (savedMuns) {
      try {
        const parsedMuns = JSON.parse(savedMuns);
        // Convert date strings back to Date objects
        const munsWithDates = parsedMuns.map((mun: any) => ({
          ...mun,
          dates: mun.dates.map((date: string) => new Date(date))
        }));
        setMuns(munsWithDates);
      } catch (error) {
        console.error('Error parsing saved MUNs:', error);
      }
    }
  }, []);
  // Save to localStorage whenever muns changes
  useEffect(() => {
    localStorage.setItem('muns', JSON.stringify(muns));
  }, [muns]);
  const addMun = (mun: MunEvent) => {
    setMuns([...muns, mun]);
  };
  return <MunContext.Provider value={{
    muns,
    addMun
  }}>
      {children}
    </MunContext.Provider>;
};