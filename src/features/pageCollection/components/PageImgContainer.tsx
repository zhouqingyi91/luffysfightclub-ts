import { useNavigate } from "react-router-dom";

type PropsType = {
  imgUrl: string,
  caption: string,
}

const PageImgContainer = ({ imgUrl, caption }: PropsType) => {
  const navigate = useNavigate();
  return (
    <div className="pb-5 md:pl-5 md:w-1/2 ">
      <figure onClick={() => navigate(caption)} className={'hover:opacity-80 transition-opacity cursor-pointer relative after:content-[""] after:block after:pb-[75%]'}>
        <img src={imgUrl} alt='' className=' w-full h-full object-cover absolute top-0 bottom-0 left-0 right-0 ' />
        <figcaption className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white uppercase text-[3.8vw] font-medium tracking-widest md:text-[1.5vw] whitespace-nowrap">
          <p>{caption}</p>
        </figcaption>
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 right-0 bg-[#787878]/[.1] ">
        </div>
      </figure>
    </div>
  );
};

export default PageImgContainer;