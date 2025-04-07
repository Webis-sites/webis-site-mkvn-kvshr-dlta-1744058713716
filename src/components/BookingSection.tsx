'use client';

import React, { useState } from 'react';
import { he } from 'date-fns/locale';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { TimePicker } from 'react-time-picker';
import 'react-day-picker/dist/style.css';
import 'react-time-picker/dist/TimePicker.css';
import { motion } from 'framer-motion';

interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  date: Date | undefined;
  time: string;
}

const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    date: undefined,
    time: '10:00',
  });
  
  const [errors, setErrors] = useState<Partial<BookingFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user types
    if (errors[name as keyof BookingFormData]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleDateChange = (date: Date | undefined) => {
    setFormData({
      ...formData,
      date,
    });
    
    if (errors.date) {
      setErrors({
        ...errors,
        date: undefined,
      });
    }
  };

  const handleTimeChange = (time: string) => {
    setFormData({
      ...formData,
      time: time || '10:00',
    });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<BookingFormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'נא להזין שם';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
    } else if (!/^0\d{8,9}$/.test(formData.phone)) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'נא להזין כתובת אימייל';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'כתובת אימייל לא תקינה';
    }
    
    if (!formData.date) {
      newErrors.date = 'נא לבחור תאריך';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setIsSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
          date: undefined,
          time: '10:00',
        });
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const css = `
    .rdp {
      --rdp-cell-size: 40px;
      --rdp-accent-color: #9B786F;
      --rdp-background-color: rgba(155, 120, 111, 0.2);
      --rdp-accent-color-dark: #96CEB4;
      --rdp-background-color-dark: rgba(150, 206, 180, 0.2);
      margin: 0;
    }
    
    .react-time-picker {
      direction: ltr;
    }
    
    .react-time-picker__wrapper {
      border: 1px solid #e2e8f0;
      border-radius: 0.375rem;
      padding: 0.5rem;
    }
    
    .react-time-picker__inputGroup {
      min-width: 5rem;
      display: flex;
      justify-content: center;
    }
    
    .react-time-picker__button {
      color: #9B786F;
      padding: 0 0.25rem;
    }
    
    .react-time-picker__button:hover {
      color: #96CEB4;
    }
    
    .react-time-picker__button:focus {
      outline: none;
    }
  `;

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-0 font-sans" dir="rtl">
      <style>{css}</style>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">קביעת תור למכון כושר דלתא</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            מלאו את הטופס כדי לקבוע תור לאימון אישי או להתייעצות עם אחד המאמנים שלנו.
            אנו נחזור אליכם בהקדם לאישור הפגישה.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Calendar Section */}
            <div className="md:w-1/2 bg-primary-light p-6 md:p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">בחרו תאריך ושעה</h3>
              
              <div className="flex flex-col items-center mb-6">
                <DayPicker
                  mode="single"
                  selected={formData.date}
                  onSelect={handleDateChange}
                  locale={he}
                  modifiersClassNames={{
                    selected: 'bg-primary text-white',
                    today: 'bg-secondary-light text-secondary font-bold',
                  }}
                  fromMonth={new Date()}
                  disabled={[
                    { dayOfWeek: [6] }, // Disable Saturdays
                    { before: new Date() }
                  ]}
                  className="mx-auto"
                />
                
                {errors.date && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-2"
                  >
                    {errors.date}
                  </motion.p>
                )}
              </div>
              
              <div className="mt-6">
                <label className="block text-gray-700 mb-2">בחרו שעה</label>
                <div className="flex justify-center">
                  <TimePicker
                    onChange={handleTimeChange}
                    value={formData.time}
                    clearIcon={null}
                    clockIcon={null}
                    disableClock={true}
                    locale="he-IL"
                    minTime="08:00"
                    maxTime="20:00"
                    format="HH:mm"
                  />
                </div>
              </div>
            </div>
            
            {/* Form Section */}
            <div className="md:w-1/2 p-6 md:p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">הפרטים שלכם</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">שם מלא *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="ישראל ישראלי"
                  />
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">טלפון *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="050-1234567"
                    dir="ltr"
                  />
                  {errors.phone && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">אימייל *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="your@email.com"
                    dir="ltr"
                  />
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">הודעה</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="פרטים נוספים שתרצו לציין..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 flex justify-center items-center"
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting || isSuccess}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : isSuccess ? (
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      התור נקבע בהצלחה!
                    </span>
                  ) : (
                    'קבע תור עכשיו'
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-600">
          <p>שעות פעילות: ראשון-חמישי 08:00-20:00, שישי 08:00-14:00, שבת סגור</p>
          <p className="mt-2">לשאלות ובירורים: <a href="tel:+972501234567" className="text-primary hover:underline" dir="ltr">050-1234567</a></p>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;