import { homepageAlbum } from "../assets/s3Constants";
import { usePageCollection } from "../features/pageCollection";

const HomePage = () => {
  const homePage = usePageCollection("homepage2/");

  return (
    <>
      {homePage}
    </>
  )
};

export default HomePage;
