'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 rtl" dir="rtl">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="מכון כושר דלתא"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 text-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              אודות מכון כושר דלתא
            </h2>
            
            <div className="w-20 h-1 bg-secondary mb-6"></div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              אנחנו מכון כושר מוביל בתחום החינוך עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-primary">ניסיון</h3>
                <p className="text-gray-600">למעלה מ-10 שנות ניסיון בתחום הכושר והבריאות</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-primary">מקצועיות</h3>
                <p className="text-gray-600">צוות מאמנים מוסמך עם התמחות בתחומים שונים</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-primary">ציוד</h3>
                <p className="text-gray-600">ציוד חדיש ומתקדם לאימון אפקטיבי ובטוח</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-primary">שירות</h3>
                <p className="text-gray-600">יחס אישי ותוכניות אימון מותאמות לכל מתאמן</p>
              </div>
            </div>
            
            <button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md">
              קרא עוד
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;