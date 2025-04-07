'use client';

import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "מהן אפשרויות המנוי במכון כושר דלתא?",
      answer: "במכון כושר דלתא אנו מציעים מגוון אפשרויות מנוי: מנוי חודשי (299 ₪), מנוי רבעוני (799 ₪), מנוי שנתי (2,499 ₪) ומנוי יומי (60 ₪). כל המנויים כוללים גישה מלאה לכל מתקני המכון ולשיעורי הסטודיו. מנויים לתקופות ארוכות יותר כוללים הטבות נוספות כגון פגישות אימון אישי."
    },
    {
      id: 2,
      question: "מהן שעות הפעילות של המכון?",
      answer: "מכון כושר דלתא פתוח בימים א'-ה' מהשעה 05:30 עד 23:00, בימי שישי מ-06:00 עד 19:00, ובשבת מ-08:00 עד 20:00. בחגים ייתכנו שינויים בשעות הפעילות, אנא עקבו אחר ההודעות באפליקציה ובלוח המודעות."
    },
    {
      id: 3,
      question: "האם יש לוח זמנים לשיעורי הסטודיו?",
      answer: "כן, אנו מציעים מגוון רחב של שיעורי סטודיו כולל יוגה, פילאטיס, ספינינג, זומבה ועוד. לוח הזמנים המלא זמין באפליקציית המכון ובאתר האינטרנט שלנו. ניתן להירשם לשיעורים עד 24 שעות מראש, ואנו ממליצים להירשם מוקדם מכיוון שהמקומות מוגבלים."
    },
    {
      id: 4,
      question: "האם יש מאמנים אישיים במכון?",
      answer: "בהחלט! במכון כושר דלתא יש לנו צוות מקצועי של מאמנים אישיים מוסמכים. ניתן לקבוע פגישת ייעוץ ראשונית ללא עלות, ולאחר מכן לרכוש חבילות אימון אישי בהתאם לצרכים האישיים שלך. המחירים נעים בין 150 ₪ לאימון בודד ועד 1,200 ₪ לחבילה של 10 אימונים."
    },
    {
      id: 5,
      question: "האם יש חניה זמינה למתאמנים?",
      answer: "כן, למכון כושר דלתא יש חניון פרטי הזמין למנויים ללא תשלום נוסף. בנוסף, ישנה חניה ציבורית בתשלום בסמוך למכון. אנו ממליצים להגיע בשעות שאינן שעות שיא כדי להבטיח מקום חניה."
    },
    {
      id: 6,
      question: "האם יש מקלחות ולוקרים במכון?",
      answer: "כן, המכון מצויד במלתחות מודרניות הכוללות מקלחות, שירותים, מלתחות ולוקרים. הלוקרים זמינים לשימוש יומי ללא תשלום (יש להביא מנעול אישי) או בהשכרה חודשית קבועה בעלות של 50 ₪ לחודש. אנו מספקים מגבות נקיות למנויי פרימיום."
    },
    {
      id: 7,
      question: "האם ניתן להקפיא מנוי במקרה הצורך?",
      answer: "כן, ניתן להקפיא את המנוי עד 30 יום בשנה (במנוי שנתי) ללא עלות נוספת. הקפאות מעבר לתקופה זו או במנויים קצרים יותר כרוכות בתשלום סמלי. יש להודיע על הקפאה לפחות 3 ימים מראש דרך האפליקציה או בקבלה."
    }
  ];

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-12 px-4 bg-gray-50 font-sans rtl" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">שאלות נפוצות</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            כאן תוכלו למצוא תשובות לשאלות הנפוצות ביותר על מכון כושר דלתא. אם לא מצאתם את התשובה שחיפשתם, אל תהססו ליצור איתנו קשר.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={openId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="font-semibold text-right text-gray-800">{faq.question}</h3>
                <span className="text-secondary text-xl">
                  {openId === faq.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>
              
              <div 
                id={`faq-answer-${faq.id}`}
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === faq.id ? 'max-h-96 py-4' : 'max-h-0 py-0'
                }`}
              >
                <p className="text-gray-600 text-right">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;