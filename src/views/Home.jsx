import React, { lazy, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import axios from "axios";
import { ReactComponent as IconTags } from "bootstrap-icons/icons/tags.svg"; // Default fallback icon
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { ReactComponent as IconAward } from "bootstrap-icons/icons/award.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconCreditCard } from "bootstrap-icons/icons/credit-card.svg";

const Support = lazy(() => import("../components/Support"));
const Banner = lazy(() => import("../components/carousel/Banner"));
const Carousel = lazy(() => import("../components/carousel/Carousel"));
const CardLogin = lazy(() => import("../components/card/CardLogin"));
const CardImage = lazy(() => import("../components/card/CardImage"));
const CardDealsOfTheDay = lazy(() =>
  import("../components/card/CardDealsOfTheDay")
);

const HomeView = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories
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

  const features = [
    {
      icon: <IconTruck className="text-primary" size={40} />,
      title: "Free Shipping",
      description: "On orders over $100"
    },
    {
      icon: <IconAward className="text-primary" size={40} />,
      title: "Quality Guarantee",
      description: "100% genuine products"
    },
    {
      icon: <IconHeadset className="text-primary" size={40} />,
      title: "24/7 Support",
      description: "Dedicated support team"
    },
    {
      icon: <IconCreditCard className="text-primary" size={40} />,
      title: "Secure Payments",
      description: "100% secure checkout"
    }
  ];

  return (
    <React.Fragment>
      <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />
      
      {/* Features Section */}
      <div className="container-fluid bg-light py-5 mb-5">
        <div className="container">
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-3">
                <div className="feature-card text-center p-4 bg-white rounded shadow-sm">
                  <div className="feature-icon mb-3">
                    {feature.icon}
                  </div>
                  <h5 className="feature-title">{feature.title}</h5>
                  <p className="text-muted mb-0">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section with Enhanced Header */}
      <div className="container mb-5">
        <div className="text-center mb-5">
          <h2 className="section-title">Explore Our Categories</h2>
          <p className="text-muted">Discover our wide range of products</p>
          <div className="section-divider"></div>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row g-4">
            {categories.map((category) => (
              <div className="col-6 col-md-3" key={category._id}>
                <Link 
                  to={`/products/category/${encodeURIComponent(category.name)}`} 
                  className="text-decoration-none"
                >
                  <div className="card category-card h-100">
                    <div className="text-center p-3">
                      {category.image ? (
                        <div className="category-image-wrapper">
                          <img
                            src={`http://localhost:5000${category.image}`}
                            className="img-fluid rounded-circle category-image"
                            alt={category.name}
                          />
                        </div>
                      ) : (
                        <div className="category-icon-fallback">
                          <IconTags width={50} height={50} className="text-primary" />
                        </div>
                      )}
                      <div className="mt-3">
                        <h5 className="category-title">{category.name}</h5>
                        {category.description && (
                          <p className="text-muted small mb-0">{category.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* New Promotional Section */}
      <div className="container-fluid bg-primary bg-gradient text-white py-5 mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="display-4 mb-4">Special Offers</h2>
              <p className="lead mb-4">Get up to 50% off on selected items. Limited time offer!</p>
              <Link to="/category" className="btn btn-light btn-lg">
                Shop Now
              </Link>
            </div>
            <div className="col-md-6 text-center">
    
    
    
              
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card newsletter-card">
              <div className="card-body text-center p-5">
                <h3 className="card-title mb-3">Subscribe to Our Newsletter</h3>
                <p className="text-muted mb-4">Stay updated with our latest products and offers</p>
                <div className="input-group mb-3">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter your email"
                    aria-label="Email address"
                  />
                  <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS for better visual appeal */}
      <style>
        {`
          .feature-card {
            transition: all 0.3s ease;
            border: 1px solid rgba(0,0,0,0.1);
          }

          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          }

          .section-title {
            position: relative;
            margin-bottom: 1rem;
            font-weight: 600;
          }

          .section-divider {
            width: 60px;
            height: 3px;
            background: #0d6efd;
            margin: 1rem auto;
          }

          .newsletter-card {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border: none;
            border-radius: 15px;
          }

          .promo-image {
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            transition: transform 0.3s ease;
          }

          .promo-image:hover {
            transform: scale(1.05);
          }

          .category-card {
            transition: all 0.3s ease;
            border: 1px solid rgba(0,0,0,0.1);
            background: white;
            overflow: hidden;
          }
          
          .category-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            border-color: #0d6efd;
          }

          .category-image-wrapper {
            width: 150px;
            height: 150px;
            margin: 0 auto;
            overflow: hidden;
            border-radius: 50%;
            border: 2px solid #f8f9fa;
          }

          .category-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          .category-card:hover .category-image {
            transform: scale(1.1);
          }

          .category-icon-fallback {
            width: 150px;
            height: 150px;
            margin: 0 auto;
            background-color: #f8f9fa;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s ease;
          }

          .category-card:hover .category-icon-fallback {
            background-color: #e9ecef;
          }

          .category-title {
            color: #333;
            margin-bottom: 0.5rem;
            font-weight: 600;
            font-size: 1.1rem;
          }

          .category-card:hover .category-title {
            color: #0d6efd;
          }

          @media (max-width: 768px) {
            .feature-card {
              margin-bottom: 1rem;
            }
            
            .promo-image {
              margin-top: 2rem;
            }
            
            .category-image-wrapper {
              width: 120px;
              height: 120px;
            }
            
            .category-title {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default HomeView;
