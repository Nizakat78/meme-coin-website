"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqAccordionProps {
    items: {
        question: string;
        answer: string;
    }[];
}

const AccordionItem = ({ item }: { item: { question: string; answer:string } }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b-2 border-gray-800">
            <button
                className="flex justify-between items-center w-full py-5 text-left"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="text-xl font-semibold text-white">{item.question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: '#5CE0FF' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-400 py-4">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}


const FaqAccordion = ({ items }: FaqAccordionProps) => {
    return (
        <div className="w-full">
            {items.map((item, index) => (
                <AccordionItem key={index} item={item} />
            ))}
        </div>
    );
};

export default FaqAccordion;
