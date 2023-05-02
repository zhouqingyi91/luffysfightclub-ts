import MobileScrollImages from "./MobileScrollImages";
import WebpageThumbnails from "./WebpageThumbnails";
import { useMediaQuery } from 'react-responsive'
import { md } from "../../../assets/responsiveDesignConstants";

const GalleryCollection = () => {

  const isWebpage = useMediaQuery(md)

  return (
    <>
      {isWebpage
        ? <WebpageThumbnails />
        : <MobileScrollImages />
      }
    </>
  );
};

export default GalleryCollection;