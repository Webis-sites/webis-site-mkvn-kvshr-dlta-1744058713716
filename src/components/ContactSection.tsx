'use client';

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="bg-gray-50 py-16 font-sans" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">צור קשר</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">אנחנו תמיד זמינים לענות על שאלות ולעזור לך להשיג את יעדי הכושר שלך</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:w-1/2 bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">שלח לנו הודעה</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">שם מלא</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">טלפון</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">אימייל</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">הודעה</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'שולח...' : 'שלח הודעה'}
              </button>
              
              {submitSuccess === true && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                  ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.
                </div>
              )}
              
              {submitSuccess === false && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                  אירעה שגיאה בשליחת ההודעה. אנא נסה שוב מאוחר יותר.
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6">פרטי התקשרות</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full mr-4">
                    <FaPhone className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">טלפון</h4>
                    <p className="text-gray-600">03-1234567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">אימייל</h4>
                    <p className="text-gray-600">info@delta-fitness.co.il</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">כתובת</h4>
                    <p className="text-gray-600">רחוב הרצל 123, תל אביב</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full mr-4">
                    <FaClock className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">שעות פעילות</h4>
                    <p className="text-gray-600">ראשון - חמישי: 06:00 - 23:00</p>
                    <p className="text-gray-600">שישי: 06:00 - 19:00</p>
                    <p className="text-gray-600">שבת: 08:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-md p-2 h-64 md:h-80">
              <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center">
                <p className="text-gray-500">מפת מיקום המכון</p>
                {/* Replace with actual map component like Google Maps */}
                {/* Example: <iframe src="https://www.google.com/maps/embed?..." className="w-full h-full rounded-md"></iframe> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;