import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const TopMenu = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/category');
        if (response.data.success) {
          setCategories(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = async (categoryName) => {
    try {
      // Fetch products for the selected category
      const response = await axios.get(`http://localhost:5000/api/product/category/${encodeURIComponent(categoryName)}`);
      
      if (response.data.success) {
        // Store the filtered products in localStorage or state management
        localStorage.setItem('categoryProducts', JSON.stringify(response.data.data));
        // Navigate to the products page with the category name
        navigate(`/products/category/${encodeURIComponent(categoryName)}`);
      }
    } catch (error) {
      console.error('Error fetching products by category:', error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          E-Commerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/account/signin">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/signup">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/checkout">
                    Checkout Page
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/blog/detail">
                    Blog Detail
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/fsafasf">
                    404 Page Not Found
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/500">
                    500 Internal Server Error
                  </Link>
                </li>
              </ul>
            </li>
            {loading ? (
              <li className="nav-item">
                <span className="nav-link">Loading...</span>
              </li>
            ) : (
              categories.map((category) => (
                <li className="nav-item" key={category._id}>
                  <Link 
                    className="nav-link" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick(category.name);
                    }}
                    to="#"
                  >
                    {category.name}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
