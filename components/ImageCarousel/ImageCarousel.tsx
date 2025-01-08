import { useState } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  height?: number;
  width?: number;
}

const ImageCarousel = ({
  images,
  height = 400,
  width = 400,
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='relative' style={{ width: width }}>
      <div
        className='relative w-full overflow-hidden'
        style={{ height: height }}
      >
        {images.map((imageUrl, index) => (
          <div
            key={imageUrl}
            className={`absolute h-full w-full transition-transform duration-500 ease-in-out`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <Image
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === currentIndex}
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className='absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white'
          >
            ←
          </button>
          <button
            onClick={goToNext}
            className='absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white'
          >
            →
          </button>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
