import { Outlet } from "react-router-dom"
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <article className="m-5 md:m-20">
      <header className="z-[999] sticky top-0 bg-default-bg md:static">
        <NavBar />
      </header>

      <main className=" md:ml-64">
        <Outlet />
      </main>

      <footer className="md:ml-64">

      </footer>
    </article>
  );
};

export default Layout;