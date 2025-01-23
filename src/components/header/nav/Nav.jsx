import {
  faAngleDown,
  faBook,
  faHeadphones,
  faKitchenSet,
  faPlug,
  faShirt,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { Link } from "react-router-dom";
import megaMenuImg from "../../../assets/banner-menu.png";
import TiltWrapper from "../../TiltWrapper/TiltWrapper";

const Nav = () => {
  const [isHovering, setIsHovering] = useState(false);

  const toggleHoverMenu = (hoverState) => {
    setIsHovering(hoverState);
  };
  return (
    <nav className="flex flex-wrap w-full py-4 px-8 dark:bg-gray-900 border-y-gray-200 dark:border-y-gray-800 border-y-[1px]">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <button className="flex items-center gap-2 bg-[#31B55D] text-white hover:bg-[#2ca454] px-6 py-2 w-max capitalize rounded-md text-center transition-all">
            <FontAwesomeIcon icon={faTableCells} />
            Browse All Categories
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
        </div>
        <div className="flex items-center justify-center ga w-full relative">
          {/* <ul
            className="flex items-center">
            {[
              { icon: '', text: "Home" },
              { icon: '', text: "About" },
              { icon: '', text: "Shop" },
              { icon: faAngleDown, text: "Mega menu" },
              { icon: '', text: "Contact" },
            ].map((tab, index) => (
              <li
                className=" flex items-center gap-2 list-none py-2 w-max px-6 hover:bg-[#29A56C] hover:text-white text-gray-800 dark:text-gray-200 rounded-md"
                key={index}
              >
                <Link to='' className="w-full text-left capitalize">
                  {tab.text}
                </Link>
                <FontAwesomeIcon icon={tab.icon} className="opacity-80" />
              </li>
            ))}
          </ul> */}
          <ul className="flex items-center relative">
            {[
              { icon: "", text: "Home" },
              { icon: "", text: "About" },
              { icon: "", text: "Shop" },
              { icon: faAngleDown, text: "Mega menu" },
              { icon: "", text: "Contact" },
            ].map((tab, index) => (
              <li
                className={`static flex items-center gap-2 list-none py-2 w-max px-6 
          hover:bg-[#29A56C] hover:text-white text-gray-800 dark:text-gray-200 
          rounded-md transition-all duration-500 ease-in-out`}
                key={index}
                onMouseEnter={() =>
                  tab.text === "Mega menu" && toggleHoverMenu(true)
                }
              >
                <Link to="#" className="w-full text-left capitalize">
                  {tab.text}
                </Link>
                {tab.icon && (
                  <FontAwesomeIcon icon={tab.icon} className="opacity-80" />
                )}

                {/* Submenu for Mega menu */}
                {tab.text === "Mega menu" && isHovering && (
                  <ul
                    className="flex absolute left-0 top-full z-50 p-2 w-max mt-2 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-400 shadow-lg dark:shadow-xl rounded-xl "
                    onMouseLeave={() =>
                      tab.text === "Mega menu" && toggleHoverMenu(false)
                    }
                  >
                    <div className="w-full flex flex-col justify-center">
                      {[
                        { icon: faPlug, name: "Electronics" },
                        { icon: faShirt, name: "Fashion" },
                        { icon: faKitchenSet, name: "Home & Kitchen" },
                        { icon: faBook, name: "Books" },
                      ].map((submenu, idx) => (
                        <li
                          key={idx}
                          className="group flex items-center gap-2 px-6 py-2 w-1/2 rounded-md hover:text-[#29A56C] transition-all"
                        >
                          {submenu.icon && (
                            <FontAwesomeIcon
                              icon={submenu.icon}
                              className="flex items-center justify-center opacity-80 text-xl bg-gray-900 text-white dark:bg-gray-300 dark:text-gray-900 w-6 h-6 p-2 rounded-md transition-all group-hover:bg-[#29A56C] group-hover:text-white"
                            />
                          )}

                          <Link to="#" className="block capitalize">
                            {submenu.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                    <div className="relative">
                      <TiltWrapper
                        options={{ max: 25, scale: 1.01 }} // Custom options for the image tilt
                        
                      >
                        <img
                          src={megaMenuImg}
                          className="lg:w-[40rem]"
                          alt="mega menu banner"
                          loading="lazy"
                        />
                      </TiltWrapper>
                      <div className="banner-content absolute top-4 left-4 dark:text-gray-800">
                        <h2 className="text-base ">Hot Deals</h2>
                        <h1 className="text-xl font-bold my-2">
                          Don't miss <br />
                          Trending
                        </h1>
                        <span className="text-green-800 opacity-80 text-xl font-bold">
                          Save upto 50%
                        </span>
                        <button className="flex items-center text-sm gap-2 bg-[#31B55D] text-white hover:bg-[#2ca454] mt-4 px-6 py-2 w-max capitalize rounded-md text-center transition-all">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center w-full justify-end">
          <div className="phno flex items-center">
            <span>
              <FontAwesomeIcon
                icon={faHeadphones}
                className="text-4xl opacity-80 dark:text-gray-300"
              />
            </span>
            <div className="info ml-3 flex flex-col text-center">
              <h2 className="text-[#31B55D] text-3xl font-extrabold mb-0">
                1900-999
              </h2>
              <p className="mb-0 text-gray-400 text-sm">24/7 Support Center</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
