import React from 'react';

type PropsType = {
  imgUrl: string,
  openModalSlideshow: () => void
}
const Thumbnail = ({ imgUrl, openModalSlideshow }: PropsType) => {
  return (
    <figure onClick={openModalSlideshow} className={' relative after:content-[""] after:block after:pb-[100%]'}>
      <img src={imgUrl} alt='luffysfightclub' className='hover:opacity-80 transition-opacity cursor-pointer w-full h-full object-cover absolute top-0 left-0 bottom-0 right-0 ' />
    </figure>
  );
};

export default Thumbnail;