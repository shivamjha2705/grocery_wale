import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/store_logo.png";
import {
  faCartShopping,
  faCircleNotch,
  faGear,
  faHeart,
  faLocationDot,
  faSearch,
  faSignOut,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import Select from "../selectDrop/Select";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./nav/Nav";
// import  {faMap, faUser  as user} from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  const [countryList, setCountryList] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const[loggedIn,setLoggedIn] = useState(true);

  const categories = [
    "Milk and Dairies",
    "Clothing & Beauty",
    "Fresh Seafood",
    "Wines & Drinks",
    "Pet Foods & Toy",
    "Fast Food",
    "Baking Material",
    "Vegetables",
    "Fresh Fruit",
    "Bread and Juice",
  ];

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await axios.get(
          "https://countriesnow.space/api/v0.1/countries/"
        );
        if (response?.data?.data) {
          setCountryList(response.data.data.map((item) => item.country));
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    getCountry();
  }, []);

  return (
    <>
    <header className="flex flex-wrap w-full mx-auto p-4  lg:px-8 dark:bg-gray-900 ">
      <div className="w-full flex justify-between items-center pb-4">
        <div className="flex items-center pr-2">
          <img src={logo} alt="logo" width={120} />
        </div>
        <div className="headerSearch flex items-center lg:w-[40rem] w-full h-12 border-[#BCE3C9] border-[1px] p-2 divide-x-2 divide-gray-200 rounded-sm">
          <div className="selectdropWrapper flex-shrink-0 w-28 text-sm lg:text-base font-medium relative">
            <Select
              data={categories}
              placeholder="All Categories"
              childPlaceholder="Search Categories"
              icon={false}
            />
          </div>

          <div className="search flex-grow pl-4  relative">
            <input
              type="text"
              placeholder="Search for items..."
              className="w-full h-10 border-0 outline-none text-sm lg:text-base dark:bg-gray-900 dark:text-white"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-500 absolute top-3 right-2 cursor-pointer opacity-50 text-lg"
            />
          </div>
        </div>
        <button
          className="lg:hidden p-2 text-gray-800 dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-2xl">☰</span>
        </button>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <div className="flex flex-col lg:flex-row items-center mt-4 ml-2 lg:mt-0">
            <div className="countryWrapper shadow-md">
              <Select
                data={countryList}
                placeholder="Your Location"
                childPlaceholder="Search Location"
                parentClassName="w-36 gap-2 h-8 flex items-center border-[#BCE3C9] border-[1px] px-2 rounded-md"
                dropdownClass="left-0 rounded-md"
                activeText="text-[#29A56C]"
                icon={
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="opacity-50"
                  />
                }
              />
            </div>

            <ul className="headerTabs mb-0 pl-0 lg:pl-10 flex flex-col lg:flex-row gap-4 lg:gap-4 mt-4 lg:mt-0">
              {[
                { icon: faCircleNotch, text: "Compare" },
                { icon: faHeart, text: "Wishlist" },
                { icon: faCartShopping, text: "Cart" },
              ].map((tab, index) => (
                <li key={index} className="flex items-center relative">
                  <FontAwesomeIcon
                    icon={tab.icon}
                    className={`${
                      tab.text === "Compare" ? "-rotate-90" : ""
                    } text-zinc-600 text-xl dark:text-gray-200 mr-2`}
                  />
                  <span className="badge bg-green-500 rounded-full w-4 h-4 text-xs content-center text-center text-white absolute -top-2 left-3">
                    3
                  </span>
                  <span className="cursor-pointer text-zinc-800 dark:text-gray-200">
                    {tab.text}
                  </span>
                </li>
              ))}
              {!loggedIn ? (
                
                  <li>
                  <button className="bg-[#31B55D] text-white hover:bg-[#2ca454] px-6 py-2 w-max capitalize rounded-md text-center transition-all">
                            Login Now
                          </button>
                  </li>
              ): (
                <>
                  <li
                className="flex items-center relative"
                onMouseEnter={() => setIsOpenDropdown(true)}
                >
                <FontAwesomeIcon
                  icon={faUser}
                  className={" text-zinc-600 text-xl dark:text-gray-200 mr-2"}
                />
                <span className="cursor-pointer text-zinc-800 dark:text-gray-200"
                
                >
                  Account
                </span>
                
                    {/*Account Dropdown */}
                    <ul className={`dropdownMenu absolute top-12 right-0 w-48 h-auto z-[100] py-4 px-2 bg-white dark:bg-gray-900  shadow-lg ${isOpenDropdown?'visible':'hidden'}`} onMouseLeave={() => setIsOpenDropdown(false)}>
                      {[
                        { icon: faUserCircle, text: "My Account" },
                        { icon: faLocationDot, text: "Order Tracking" },
                        { icon: faGear, text: "Setting" },
                        { icon: faSignOut, text: "Sign out" },
                      ].map((tab, index) => (
                        <li
                          className=" flex items-center gap-2 w-full list-none p-2 hover:bg-[#29A56C] hover:text-white text-gray-800 dark:text-gray-200 rounded-md"
                          key={index}
                        >
                          <FontAwesomeIcon
                            icon={tab.icon}
                            className="opacity-80"
                          />
                          <button className="w-full text-left capitalize">
                            {tab.text}
                          </button>
                        </li>
                      ))}
                      {/* <li><button>My Account</button></li>
                    <li><button>Order Tracking</button></li>
                    <li><button>Setting</button></li>
                    <li><button>Sign out</button></li> */}
                    </ul>
              </li>
                </>
              )}
              
            </ul>
          </div>
        </div>
      </div>
      
    </header>
    <Nav/>
    </>
  );
};

export default Header;
