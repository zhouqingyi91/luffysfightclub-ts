import { useCallback, useState } from 'react';
import { useAppSelector } from '../../../hooks/useRedux';
import { bucketPathPrefix } from '../../../assets/s3Constants';
import { selectGalleryImageData } from '../store/galleryDataSlice';
import SlideshowModal from './SlideshowModal';
import Thumbnail from './Thumbnail';

const WebpageThumbnails = () => {
  const imgData = useAppSelector(selectGalleryImageData)
  const [openModal, setOpenModal] = useState(false);
  const [slideIndex, setSlideIndex] = useState(-1);

  const openModalSlideshow = useCallback((idx: number) => {
    setSlideIndex(idx);
    setOpenModal(true);
  }, [])
  const closeModal = useCallback(() => {
    setOpenModal(false);
  }, [])

  const prevSlideHandler = () => {
    const newSlideIndex = slideIndex === 0 ? imgData.length - 1 : slideIndex - 1;
    setSlideIndex(newSlideIndex);
  }

  const nextSlideHandler = () => {
    const newSlideIndex = slideIndex === imgData.length - 1 ? 0 : slideIndex + 1;
    setSlideIndex(newSlideIndex)
  }

  return (
    <section>
      <SlideshowModal
        nextSlide={nextSlideHandler}
        prevSlide={prevSlideHandler}
        openModal={openModal}
        slideIndex={slideIndex}
        closeModal={closeModal}
      />
      <section className='grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 5xl:grid-cols-7 6xl:grid-cols-8 7xl:grid-cols-9 8xl:grid-cols-10 9xl:grid-cols-11 10xl:grid-cols-12 11xl:grid-cols-13 12xl:grid-cols-16 13xl:grid-cols-20'>
        {imgData?.map(({ imgName }, idx) => {
          return (
            <Thumbnail
              openModalSlideshow={openModalSlideshow}
              key={imgName}
              imgUrl={bucketPathPrefix + imgName}
              slideIndex={idx}
            />
          )
        })}
      </section>
    </section>
  );
};

export default WebpageThumbnails;