'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
    alt: 'מכשירי כוח במכון כושר',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f',
    alt: 'אימון אישי',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f',
    alt: 'אימון קבוצתי',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    alt: 'אזור הקרדיו',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e',
    alt: 'אימוני משקולות',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155',
    alt: 'אזור פונקציונלי',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2',
    alt: 'סטודיו לשיעורי ספינינג',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c',
    alt: 'אזור מתיחות',
  },
];

interface GallerySectionProps {
  title?: string;
  subtitle?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({
  title = 'הגלריה שלנו',
  subtitle = 'צפו במתקני מכון כושר דלתא המתקדמים ובמגוון הפעילויות',
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const getSelectedImage = () => {
    return galleryImages.find((img) => img.id === selectedImage);
  };

  return (
    <section className="py-16 bg-gray-50 rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-md h-64 cursor-pointer group"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => openLightbox(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full h-auto max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full aspect-video">
                {getSelectedImage() && (
                  <Image
                    src={getSelectedImage()?.src || ''}
                    alt={getSelectedImage()?.alt || ''}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    className="object-contain"
                  />
                )}
              </div>
              <button
                className="absolute top-4 right-4 bg-secondary text-white rounded-full p-2 hover:bg-opacity-80 transition-colors"
                onClick={closeLightbox}
                aria-label="סגור"
              >
                <IoClose size={24} />
              </button>
              {getSelectedImage() && (
                <div className="absolute bottom-0 right-0 left-0 bg-black/70 text-white p-3 text-center">
                  <p className="text-lg">{getSelectedImage()?.alt}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;