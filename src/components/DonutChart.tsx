"use client";

import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface DonutChartProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
}

const DonutChart = ({ data }: DonutChartProps) => {
  const total = useMemo(() => data.reduce((acc, item) => acc + item.value, 0), [data]);
  
  const segments = useMemo(() => {
    return data.reduce((acc, item, index) => {
      const percentage = (item.value / total) * 100;
      const strokeDasharray = `${percentage} ${100 - percentage}`;
      const strokeDashoffset = -acc.offset;
      const newOffset = acc.offset + percentage;
      
      acc.segments.push({
        ...item,
        strokeDasharray,
        strokeDashoffset,
        index,
      });
      acc.offset = newOffset;
      return acc;
    }, { segments: [] as (typeof data[0] & { strokeDasharray: string; strokeDashoffset: number; index: number })[], offset: 0 }).segments;
  }, [data, total]);

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
        {segments.map((item) => (
          <motion.circle
            key={item.name}
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke={item.color}
            strokeWidth="10"
            strokeDasharray={item.strokeDasharray}
            strokeDashoffset={item.strokeDashoffset}
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, delay: item.index * 0.2 }}
          />
        ))}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl md:text-4xl font-bold text-white">1B</span>
        <span className="text-gray-400">Total Supply</span>
      </div>
    </div>
  );
};

export default DonutChart;
