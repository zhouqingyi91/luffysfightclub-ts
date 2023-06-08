import { homepageAlbum } from "../assets/s3Constants";
import { usePageCollection } from "../features/pageCollection";

const HomePage = () => {
  const homePage = usePageCollection(homepageAlbum);

  return (
    <>
      {homePage}
    </>
  )
};

export default HomePage;
