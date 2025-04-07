import React from 'react';
import { FaDumbbell, FaUsers, FaAppleAlt, FaRunning, FaHeartbeat, FaSwimmer } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg border-t-4 border-secondary">
      <div className="flex justify-center mb-4 text-primary text-4xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{title}</h3>
      <p className="text-gray-600 text-right">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaDumbbell />,
      title: "אימון אישי",
      description: "תוכנית אימונים מותאמת אישית לצרכים ולמטרות שלך, בליווי מאמן מקצועי ומנוסה."
    },
    {
      icon: <FaUsers />,
      title: "אימונים קבוצתיים",
      description: "מגוון שיעורים קבוצתיים כמו יוגה, פילאטיס, ספינינג, זומבה ועוד, באווירה תומכת ומהנה."
    },
    {
      icon: <FaAppleAlt />,
      title: "ייעוץ תזונה",
      description: "תוכניות תזונה מותאמות אישית ע״י תזונאים מוסמכים לעזור לך להשיג את היעדים שלך."
    },
    {
      icon: <FaRunning />,
      title: "אימוני כושר פונקציונלי",
      description: "אימונים המדמים תנועות יומיומיות לשיפור היציבה, הכוח והגמישות בחיי היומיום."
    },
    {
      icon: <FaHeartbeat />,
      title: "אימוני סיבולת לב-ריאה",
      description: "אימונים ממוקדים לשיפור הסיבולת, חיזוק הלב וכלי הדם ושיפור הבריאות הכללית."
    },
    {
      icon: <FaSwimmer />,
      title: "אימוני שחייה",
      description: "שיעורי שחייה לכל הרמות בבריכה מקצועית, לשיפור הטכניקה והסיבולת במים."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dir-rtl" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">השירותים שלנו</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            במכון כושר דלתא אנו מציעים מגוון רחב של שירותים מקצועיים שיעזרו לך להשיג את מטרות הכושר והבריאות שלך
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;