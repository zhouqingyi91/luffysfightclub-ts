import { useAppSelector } from "../../../hooks/useRedux";
import { bucketPathPrefix } from "../../../services/s3/constants";
import { selectGalleryImageData } from "../store/galleryDataSlice";


const ScrollImages = () => {
  const imgData = useAppSelector(selectGalleryImageData);
  return (
    <section className='md:hidden space-y-5'>
      {imgData?.map(({ imgName }) => {
        return <img key={imgName} src={bucketPathPrefix + imgName} alt="luffysfightclub" />
      })}
    </section>
  );
};

export default ScrollImages;