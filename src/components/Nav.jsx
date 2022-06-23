import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="">
      <nav className="flex items-center justify-between bg-SpaceCadet border-x-3 border-white ">
        <Link to="/">
          <img src="./src/assets/banniere.png" alt="logo" className="ml-4" />
        </Link>
        <img
          src={
            navOpen
              ? "./src/assets/burger_close_icon.png"
              : "./src/assets/burger_icon.png"
          }
          alt=""
          className="h-5 z-25 absolute ml-1 cursor-pointer sm:hidden"
          onClick={() => setNavOpen(!navOpen)}
        />
        <ul
          className={`bg-SpaceCadet sm:text-right w-full h-full duration-500 ease-linear sm:pl-10 sm:static fixed  top-0 sm:h-auto z-10 ${
            !navOpen ? "right-[-100%]" : "right-0"
          } `}
        >
          <li className="sm:inline-block  sm:ml-10 ml-5 sm:my-0 my-6 border-b-2 border-Gray hover:border-White duration-300">
            <Link
              to="/"
              className="text- mr-25 cursor-pointer font-Barlow font-normal text-sm inline-block sm:py-5 py-3"
              onClick={() => setNavOpen(!navOpen)}
            >
              <span className="font-bold mr-1 text-White">01 ACCEUILLE</span>
            </Link>
          </li>
          <li className="sm:inline-block  sm:ml-10 ml-5 sm:my-0 my-6 border-b-2 border-Gray hover:border-White duration-300">
            <Link
              to="/recruitment"
              className="text- mr-25 cursor-pointer font-Barlow font-normal text-sm inline-block sm:py-5 py-3"
              onClick={() => setNavOpen(!navOpen)}
            >
              <span className="font-bold mr-1 text-White">02 RECRUTEMENTS</span>
            </Link>
          </li>
          <li className="sm:inline-block  sm:ml-10 ml-5 sm:my-0 my-6 border-b-2 border-Gray hover:border-White duration-300">
            <Link
              to="/tournaments"
              className="text- mr-25 cursor-pointer font-Barlow font-normal text-sm inline-block sm:py-5 py-3"
              onClick={() => setNavOpen(!navOpen)}
            >
              <span className="font-bold mr-1 text-White">03 TOURNOIS</span>
            </Link>
          </li>
          <li className="sm:inline-block  sm:ml-10 ml-5 sm:my-0 my-6 border-b-2 border-Gray hover:border-White duration-300">
            <Link
              to="/history"
              className="text- mr-25 cursor-pointer font-Barlow font-normal text-sm inline-block sm:py-5 py-3"
              onClick={() => setNavOpen(!navOpen)}
            >
              <span className="font-bold mr-1 text-White">04 HISTOIRE</span>
            </Link>
          </li>
          <li className="sm:inline-block  sm:ml-10 ml-5 sm:my-0 my-6 border-b-2 border-Gray hover:border-White duration-300 mr-9">
            <Link
              to="/youtube"
              className="text- mr-25 cursor-pointer font-Barlow font-normal text-sm inline-block sm:py-5 py-3 "
              onClick={() => setNavOpen(!navOpen)}
            >
              <span className="font-bold mr-1 text-White">05 YOUTUBE</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
