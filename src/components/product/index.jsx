import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import PropTypes from "prop-types";


const Product = ({products}) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {products && products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4 w-64">
          {/* Image Section */}
          <div className="relative group">
            <a href="#">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-60 object-cover rounded-lg"
              />
            </a>
            {/* Wishlist & Quick View Buttons */}
            <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200">♡</button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200">🔍</button>
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-3">
            <p className="text-sm text-gray-500">{product.category}</p>
            <h3 className="text-lg font-semibold text-gray-800">
              {product.title.length > 30 ? `${product.title.slice(0, 30)}...` : product.title}
            </h3>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  icon={faStar}
                  key={i}
                  className={i < product.rating ? "text-yellow-500" : "text-gray-300"}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;

// Product.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       category: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };
