import HomeLink from './HomeLink';
import Menu from './Menu';

const WebpageNav = () => {
  return (
    <section id='webpage-navigation' className='my-0 py-0 text-sm block fixed w-60 '>
      <HomeLink />
      <nav className='pt-10'>
        <Menu />
      </nav>
    </section>
  );
};

export default WebpageNav;