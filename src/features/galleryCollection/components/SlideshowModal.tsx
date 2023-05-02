import React, { useEffect } from 'react';
import { useAppSelector } from '../../../hooks/useRedux';
import { bucketPathPrefix } from '../../../assets/s3Constants';
import { selectGalleryImageData } from '../store/galleryDataSlice';

type PropsType = {
  openModal: boolean,
  slideIndex: number,
  closeModal: () => void,
  nextSlide: () => void,
  prevSlide: () => void
}
const SlideshowModal = ({ openModal, slideIndex, closeModal, nextSlide, prevSlide }: PropsType) => {
  const imgData = useAppSelector(selectGalleryImageData)
  const imgUrl = bucketPathPrefix + (slideIndex >= 0 ? imgData[slideIndex]?.imgName : '');

  useEffect(() => {
    const handleEscAndArrow = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    }
    document.addEventListener('keydown', handleEscAndArrow);
    return () => {
      document.removeEventListener('keydown', handleEscAndArrow);
    }
  }, [slideIndex]);


  return openModal ? (
    <section className='z-10 flex items-center justify-center bg-default-bg fixed top-0 bottom-0 right-20 left-[336px] '>
      <button onClick={closeModal} className='z-10 text-5xl hover:text-white absolute top-5 right-5'>&times;</button>
      <button onClick={prevSlide} className='z-10 absolute left-5 top-1/2 -translate-y-1/2 text-3xl hover:text-white'>&#10094;</button>
      <button onClick={nextSlide} className='z-10 absolute right-5 top-1/2 -translate-y-1/2  text-3xl  hover:text-white'>&#10095;</button>

      <div onClick={prevSlide} className='absolute top-1/2 -translate-y-1/2 h-1/2 w-1/5 left-0 cursor-w-resize'></div>
      <div onClick={nextSlide} className='absolute top-1/2 -translate-y-1/2 h-1/2 w-1/5 left-[80%] cursor-e-resize'></div>

      <img className='w-4/5 h-4/5 object-contain' src={imgUrl} alt="luffysfightclub" />
    </section>
  ) : null;
};

export default SlideshowModal;