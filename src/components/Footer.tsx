import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

interface FooterLink {
  name: string;
  href: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks: FooterLink[] = [
    { name: 'דף הבית', href: '/' },
    { name: 'אודות', href: '/about' },
    { name: 'שירותים', href: '/services' },
    { name: 'מאמנים', href: '/trainers' },
    { name: 'לוח זמנים', href: '/schedule' },
    { name: 'מחירים', href: '/pricing' },
    { name: 'צור קשר', href: '/contact' },
  ];

  const socialLinks = [
    { icon: <FaFacebook size={24} />, href: 'https://facebook.com', ariaLabel: 'פייסבוק' },
    { icon: <FaInstagram size={24} />, href: 'https://instagram.com', ariaLabel: 'אינסטגרם' },
    { icon: <FaTwitter size={24} />, href: 'https://twitter.com', ariaLabel: 'טוויטר' },
    { icon: <FaWhatsapp size={24} />, href: 'https://whatsapp.com', ariaLabel: 'וואטסאפ' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-6 dir-rtl text-right" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col">
            <div className="mb-4">
              <Link href="/">
                <div className="relative h-16 w-32 cursor-pointer">
                  <Image 
                    src="/logo.png" 
                    alt="מכון כושר דלתא" 
                    layout="fill" 
                    objectFit="contain"
                    className="object-right"
                  />
                </div>
              </Link>
            </div>
            <p className="text-gray-600 mb-4">
              מכון כושר דלתא הוא מרכז כושר מתקדם המציע מגוון רחב של שירותים ואימונים אישיים, מתאים לכל רמות הכושר והגילאים.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <span className="text-gray-600 hover:text-secondary transition-colors duration-300 cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-4">צור קשר</h3>
            <div className="space-y-2 text-gray-600">
              <p>רחוב הרצל 123, תל אביב</p>
              <p>טלפון: 03-1234567</p>
              <p>דוא"ל: info@delta-fitness.co.il</p>
              <div className="mt-4">
                <p>שעות פעילות:</p>
                <p>ראשון-חמישי: 06:00-23:00</p>
                <p>שישי: 06:00-18:00</p>
                <p>שבת: 08:00-20:00</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-4">עקבו אחרינו</h3>
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="text-primary hover:text-secondary transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="text-primary font-bold text-lg mb-2">הרשמה לניוזלטר</h3>
              <div className="flex mt-2">
                <input 
                  type="email" 
                  placeholder="הזן את כתובת האימייל שלך" 
                  className="px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-secondary w-full"
                />
                <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-l-md transition-colors duration-300">
                  הרשם
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-600">
            © {currentYear} מכון כושר דלתא. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;