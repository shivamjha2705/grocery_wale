import { Link } from "react-router-dom";
import Product from "../../components/product";
import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../../components/banner";
import HomeSlider from "./Slider/HomeSlider";
import CatSlider from "../../components/catSlider";

// const products = [
//   {
//     id: 1,
//     category: "Fruits",
//     title: "Fresh Organic Apples",
//     image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=300&h=300&q=80",
//     rating: 4,
//   },
//   {
//     id: 2,
//     category: "Vegetables",
//     title: "Assorted Fresh Vegetables",
//     image: "https://images.unsplash.com/photo-1741517286818-4c56284cca9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     rating: 5,
//   },
//   {
//     id: 3,
//     category: "Milk & Dairies",
//     title: "Fresh Milk",
//     image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     rating: 3,
//   },
//   {
//     id: 4,
//     category: "Coffes & Teas",
//     title: "Coffee milk and coffee beans",
//     image: "https://images.unsplash.com/photo-1683343886750-3cf1f4974fa3?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     rating: 4,
//   },
//   {
//     id: 5,
//     category: "Pet Foods",
//     title: "Canned pet food",
//     image: "https://images.unsplash.com/photo-1696507398228-78f0368ddbc1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     rating: 5,
//   },
//   {
//     id: 6,
//     category: "Meats",
//     title: "Fresh Meats",
//     image: "https://images.unsplash.com/photo-1611059263765-f57653f3bba3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     rating: 5,
//   },
// ];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  // console.log("pp",products);

  const tabs = [
    "All",
    "Milk & Dairies",
    "Coffes & Teas",
    "Pet Foods",
    "Meats",
    "Vegetables",
    "Fruits",
  ]

  const getProducts = async () => {
    try {
      setLoading(true);
      const prod = await axios.get('http://localhost:5000/products');
      // console.log(prod.data.products);
      setProducts(prod.data.products)
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  }
  useEffect(() => {
   getProducts();
  }, [])
  

  const filterProduct = selectedCategory == "All" ? products : products.filter((prod) => prod.category === selectedCategory)
  // console.log("ff",filterProduct);
  return (
    <>
      <div className="dark:bg-gray-900">
      <HomeSlider/>
      <CatSlider/>
      <Banner/>
        <section className="homeProducts">
          <div className="w-full px-4 md:px-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between ">
              <h2 className="text-lg sm:text-xl md:text-3xl font-semibold dark:text-white my-4 w-full lg:w-2/4">
                Popular products
              </h2>
              <ul className="flex items-center lg:justify-end w-full overflow-x-scroll scrollbar-none">
                {tabs.map((tab, index) => (
                  <li
                    className={`flex items-center mx-1 list-none py-2 w-max px-4  rounded-md ${selectedCategory === tab
                      ? "bg-[#29A56C] text-white"
                      : "text-gray-800 dark:text-gray-200 hover:bg-[#29A56C] hover:text-white"} `}
                    key={index}
                    onClick={(e) => { e.preventDefault(), setSelectedCategory(tab) }}
                  >
                    <Link to="" className="w-max text-left capitalize">
                      {tab}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <Product products={filterProduct || loading} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
