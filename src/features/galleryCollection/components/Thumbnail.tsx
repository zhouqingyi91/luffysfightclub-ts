import React from 'react';

type PropsType = {
  imgUrl: string,
  openModalSlideshow: (slideIndex: number) => void,
  slideIndex: number
}
const Thumbnail = ({ imgUrl, openModalSlideshow, slideIndex }: PropsType) => {
  return (
    <figure onClick={() => openModalSlideshow(slideIndex)} className={' relative after:content-[""] after:block after:pb-[100%]'}>
      <img src={imgUrl} alt='luffysfightclub' className='hover:opacity-80 transition-opacity cursor-pointer w-full h-full object-cover absolute top-0 left-0 bottom-0 right-0 ' />
    </figure>
  );
};

export default React.memo(Thumbnail);