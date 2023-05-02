import React from 'react';
import PageImgContainer from './PageImgContainer';
import { bucketPathPrefix } from '../../../assets/s3Constants'

type PropsType = {
  imgs: { imgName: string, caption: string }[]
}
const PageCollection = ({ imgs }: PropsType) => {
  return (
    <section className='md:flex md:flex-wrap'>
      {imgs?.map(({ imgName, caption }) => {
        return <PageImgContainer
          imgUrl={bucketPathPrefix + imgName}
          caption={caption}
          key={caption}
        />
      })}
    </section>
  );
};

export default PageCollection;