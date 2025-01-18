import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const Select = ({data,placeholder,childPlaceholder,parentClassName,dropdownClass,activeText,icon}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(placeholder);
  const [searchQuery, setSearchQuery] = useState("");

//   const categories = [
//     "Milk and Dairies",
//     "Clothing & Beauty",
//     "Fresh Seafood",
//     "Wines & Drinks",
//     "Pet Foods & Toy",
//     "Fast Food",
//     "Baking Material",
//     "Vegetables",
//     "Fresh Fruit",
//     "Bread and Juice",
//   ];

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  // Handle outside click to close the dropdown
  const handleOutsideClick = (event) => {
    if (!event.target.closest(".selectDrop")) {
      setIsOpen(false);
    }
  };

  // Handle the search query update
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    // Listen for clicks outside the dropdown to close it
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  // Filter categories based on search query
  const filteredCategories = data.filter((category) =>
    category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`selectDrop cursor-pointer flex items-center relative ${parentClassName}`}>
      {/* Dropdown trigger */}
      {icon}
      <span
        className={`openSelect block py-3 text-sm text-gray-800 dark:text-gray-200 ${activeText}`}
        onClick={toggleDropdown}
      >
        {selectedCategory.length>14 ? selectedCategory.substr(0,14)+'...':selectedCategory} 
        <FontAwesomeIcon icon={faAngleDown} className="arrow absolute top-1/2 right-2 transform -translate-y-1/2" />
      </span>

      {/* Dropdown content */}
      {isOpen && (
        <div className={`selectDrop w-80 h-80 bg-white dark:bg-gray-900 absolute top-[100%] -left-2 z-[100] shadow-lg p-4 border border-gray-200 dark:border-gray-700 ${dropdownClass}`}>
          <div className="searchField mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full h-12 border-[#BCE3C9] border-[1px] outline-none px-4 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder={childPlaceholder}
            />
          </div>
          {/* Filtered category list */}
          <ul
            role="listbox"
            className="max-h-60 overflow-y-auto w-full m-auto py-3 scrollbar-thin scrollbar-thumb-[#94d3ac] scrollbar-track-gray-100 dark:scrollbar-track-gray-700 dark:scrollbar-thumb-[#67c4a0]"
          >
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <li
                  key={category}
                  className="py-2 px-4 hover:bg-[#29A56C] hover:text-white cursor-pointer w-full text-gray-800 dark:text-gray-200 rounded-md"
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </li>
              ))
            ) : (
              <li className="py-2 px-4 text-gray-500 dark:text-gray-400">
                No categories found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
