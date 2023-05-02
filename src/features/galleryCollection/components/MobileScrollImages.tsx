import { useAppSelector } from "../../../hooks/useRedux";
import { bucketPathPrefix } from "../../../assets/s3Constants";
import { selectGalleryImageData } from "../store/galleryDataSlice";


const MobileScrollImages = () => {
  const imgData = useAppSelector(selectGalleryImageData);
  return (
    <section className='space-y-5'>
      {imgData?.map(({ imgName }) => {
        return <img key={imgName} src={bucketPathPrefix + imgName} alt="luffysfightclub" />
      })}
    </section>
  );
};

export default MobileScrollImages;