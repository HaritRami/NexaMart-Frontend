import React, { lazy, Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));

const BACKEND_URL = 'http://localhost:5000'; // Your backend URL

class ProductListView extends Component {
  state = {
    categories: [],
    view: "grid",
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/category');
      console.log(response.data);
      debugger
      const categoriesData = Array.isArray(response.data) ? response.data : 
                           (response.data || []);
                           console.log("Categorise data ",categoriesData);
      this.setState({ 
        categories: categoriesData.data,
        loading: false 
      });
      
    } catch (err) {
      console.error('Error fetching categories:', err);
      this.setState({ 
        categories: [],
        error: 'Error fetching categories', 
        loading: false 
      });
    }
  };

  onChangeView = (view) => {
    this.setState({ view });
  };

  render() {
    const { categories, view, loading, error } = this.state;
    console.log("Categories = ",categories);
    
    if (loading) {
      return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="alert alert-danger m-5" role="alert">
          {error}
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className="p-5 bg-primary bs-cover">
          <div className="container text-center">
            <span className="display-5 px-3 bg-white rounded shadow">
              Categories
            </span>
          </div>
        </div>
        <Breadcrumb />
        <div className="container-fluid mb-3">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="h5 mb-0">
                  {categories.length} Categories Available
                </span>
                <div className="btn-group">
                  <button
                    aria-label="Grid"
                    type="button"
                    onClick={() => this.onChangeView("grid")}
                    className={`btn ${view === "grid" ? "btn-primary" : "btn-outline-primary"}`}
                  >
                    <i className="bi bi-grid" />
                  </button>
                  <button
                    aria-label="List"
                    type="button"
                    onClick={() => this.onChangeView("list")}
                    className={`btn ${view === "list" ? "btn-primary" : "btn-outline-primary"}`}
                  >
                    <i className="bi bi-list" />
                  </button>
                </div>
              </div>

              <div className="row g-3">
                {view === "grid" ? (
                  // Grid View
                  categories.map((category) => (
                    <div key={category._id} className="col-md-4">
                      <Link 
                        to={`/product/detail`}
                        className="text-decoration-none"
                      >
                        <div className="card h-100 shadow-sm hover-shadow">
                          <div className="position-relative">
                            <img
                              src={category.image?.startsWith('http') 
                                ? category.image 
                                : `http://localhost:5000${category.image}`}
                              className="card-img-top"
                              alt={category.name}
                              style={{ height: "200px", objectFit: "cover" }}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://via.placeholder.com/200';
                              }}
                            />
                            <div className="position-absolute top-0 end-0 p-2">
                              <span className="badge bg-primary">
                                {category.barcodeId}
                              </span>
                            </div>
                          </div>
                          <div className="card-body">
                            <h5 className="card-title text-dark">{category.name}</h5>
                            <p className="card-text text-muted">
                              {category.description || "No description available"}
                            </p>
                            <div className="text-end">
                              <button className="btn btn-sm btn-outline-primary">
                                View Details <i className="bi bi-arrow-right"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  // List View
                  categories.map((category) => (
                    <div key={category._id} className="col-12 mb-3">
                      <Link 
                        to={`/product/detail`}
                        className="text-decoration-none"
                      >
                        <div className="card shadow-sm hover-shadow">
                          <div className="row g-0">
                            <div className="col-md-4">
                              <img
                                src={category.image?.startsWith('http') 
                                  ? category.image 
                                  : `http://localhost:5000${category.image}`}
                                className="img-fluid h-100"
                                alt={category.name}
                                style={{ objectFit: "cover" }}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = 'https://via.placeholder.com/200';
                                }}
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                  <h5 className="card-title mb-0 text-dark">{category.name}</h5>
                                  <span className="badge bg-primary">
                                    {category.barcodeId}
                                  </span>
                                </div>
                                <p className="card-text text-muted">
                                  {category.description || "No description available"}
                                </p>
                                <div className="text-end">
                                  <button className="btn btn-sm btn-outline-primary">
                                    View Details <i className="bi bi-arrow-right"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                )}
              </div>

              {categories.length === 0 && (
                <div className="text-center py-5">
                  <i className="bi bi-folder2-open display-4 text-muted"></i>
                  <p className="mt-3">No categories found</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Add hover effect styles */}
        <style>
          {`
            .hover-shadow {
              transition: all 0.3s ease;
            }
            .hover-shadow:hover {
              transform: translateY(-5px);
              box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important;
            }
            a:hover {
              text-decoration: none;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default ProductListView;
