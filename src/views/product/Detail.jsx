// import { lazy } from "react";
// import { data } from "../../data";
// const CardFeaturedProduct = lazy(() =>
//   import("../../components/card/CardFeaturedProduct")
// );
// const CardServices = lazy(() => import("../../components/card/CardServices"));
// const Details = lazy(() => import("../../components/others/Details"));
// const RatingsReviews = lazy(() =>
//   import("../../components/others/RatingsReviews")
// );
// const QuestionAnswer = lazy(() =>
//   import("../../components/others/QuestionAnswer")
// );
// const ShippingReturns = lazy(() =>
//   import("../../components/others/ShippingReturns")
// );
// const SizeChart = lazy(() => import("../../components/others/SizeChart"));

// const ProductDetailView = () => {
//   return (
//     <div className="container-fluid mt-3">
//       <div className="row">
//         <div className="col-md-8">
//           <div className="row mb-3">
//             <div className="col-md-5 text-center">
//               <img
//                 src="../../images/products/tshirt_red_480x400.webp"
//                 className="img-fluid mb-3"
//                 alt=""
//               />
//               <img
//                 src="../../images/products/tshirt_grey_480x400.webp"
//                 className="border border-secondary me-2"
//                 width="75"
//                 alt="..."
//               />
//               <img
//                 src="../../images/products/tshirt_black_480x400.webp"
//                 className="border border-secondary me-2"
//                 width="75"
//                 alt="..."
//               />
//               <img
//                 src="../../images/products/tshirt_green_480x400.webp"
//                 className="border border-secondary me-2"
//                 width="75"
//                 alt="..."
//               />
//             </div>
//             <div className="col-md-7">
//               <h1 className="h5 d-inline me-2">Great product name goes here</h1>
//               <span className="badge bg-success me-2">New</span>
//               <span className="badge bg-danger me-2">Hot</span>
//               <div className="mb-3">
//                 <i className="bi bi-star-fill text-warning me-1" />
//                 <i className="bi bi-star-fill text-warning me-1" />
//                 <i className="bi bi-star-fill text-warning me-1" />
//                 <i className="bi bi-star-fill text-warning me-1" />
//                 <i className="bi bi-star-fill text-secondary me-1" />|{" "}
//                 <span className="text-muted small">
//                   42 ratings and 4 reviews
//                 </span>
//               </div>
//               <dl className="row small mb-3">
//                 <dt className="col-sm-3">Availability</dt>
//                 <dd className="col-sm-9">In stock</dd>
//                 <dt className="col-sm-3">Sold by</dt>
//                 <dd className="col-sm-9">Authorised Store</dd>
//                 <dt className="col-sm-3">Size</dt>
//                 <dd className="col-sm-9">
//                   <div className="form-check form-check-inline">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="size"
//                       id="sizes"
//                       disabled
//                     />
//                     <label className="form-check-label" htmlFor="sizes">
//                       S
//                     </label>
//                   </div>
//                   <div className="form-check form-check-inline">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="size"
//                       id="sizem"
//                       disabled
//                     />
//                     <label className="form-check-label" htmlFor="sizem">
//                       M
//                     </label>
//                   </div>
//                   <div className="form-check form-check-inline">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="size"
//                       id="sizel"
//                     />
//                     <label className="form-check-label" htmlFor="sizel">
//                       L
//                     </label>
//                   </div>
//                   <div className="form-check form-check-inline">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="size"
//                       id="sizexl"
//                     />
//                     <label className="form-check-label" htmlFor="sizexl">
//                       XL
//                     </label>
//                   </div>
//                   <div className="form-check form-check-inline">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="size"
//                       id="sizexxl"
//                     />
//                     <label className="form-check-label" htmlFor="sizexxl">
//                       XXL
//                     </label>
//                   </div>
//                 </dd>
//                 <dt className="col-sm-3">Color</dt>
//                 <dd className="col-sm-9">
//                   <button className="btn btn-sm btn-primary p-2 me-2"></button>
//                   <button className="btn btn-sm btn-secondary p-2 me-2"></button>
//                   <button className="btn btn-sm btn-success p-2 me-2"></button>
//                   <button className="btn btn-sm btn-danger p-2 me-2"></button>
//                   <button className="btn btn-sm btn-warning p-2 me-2"></button>
//                   <button className="btn btn-sm btn-info p-2 me-2"></button>
//                   <button className="btn btn-sm btn-dark p-2 me-2"></button>
//                 </dd>
//               </dl>

//               <div className="mb-3">
//                 <span className="fw-bold h5 me-2">$1900</span>
//                 <del className="small text-muted me-2">$2000</del>
//                 <span className="rounded p-1 bg-warning  me-2 small">
//                   -$100
//                 </span>
//               </div>
//               <div className="mb-3">
//                 <div className="d-inline float-start me-2">
//                   <div className="input-group input-group-sm mw-140">
//                     <button
//                       className="btn btn-primary text-white"
//                       type="button"
//                     >
//                       <i className="bi bi-dash-lg"></i>
//                     </button>
//                     <input
//                       type="text"
//                       className="form-control"
//                       defaultValue="1"
//                     />
//                     <button
//                       className="btn btn-primary text-white"
//                       type="button"
//                     >
//                       <i className="bi bi-plus-lg"></i>
//                     </button>
//                   </div>
//                 </div>
//                 <button
//                   type="button"
//                   className="btn btn-sm btn-primary me-2"
//                   title="Add to cart"
//                 >
//                   <i className="bi bi-cart-plus me-1"></i>Add to cart
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-sm btn-warning me-2"
//                   title="Buy now"
//                 >
//                   <i className="bi bi-cart3 me-1"></i>Buy now
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-sm btn-outline-secondary"
//                   title="Add to wishlist"
//                 >
//                   <i className="bi bi-heart-fill"></i>
//                 </button>
//               </div>
//               <div>
//                 <p className="fw-bold mb-2 small">Product Highlights</p>
//                 <ul className="small">
//                   <li>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   </li>
//                   <li>Etiam ullamcorper nibh eget faucibus dictum.</li>
//                   <li>Cras consequat felis ut vulputate porttitor.</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-12">
//               <nav>
//                 <div className="nav nav-tabs" id="nav-tab" role="tablist">
//                   <a
//                     className="nav-link active"
//                     id="nav-details-tab"
//                     data-bs-toggle="tab"
//                     href="#nav-details"
//                     role="tab"
//                     aria-controls="nav-details"
//                     aria-selected="true"
//                   >
//                     Details
//                   </a>
//                   <a
//                     className="nav-link"
//                     id="nav-randr-tab"
//                     data-bs-toggle="tab"
//                     href="#nav-randr"
//                     role="tab"
//                     aria-controls="nav-randr"
//                     aria-selected="false"
//                   >
//                     Ratings & Reviews
//                   </a>
//                   <a
//                     className="nav-link"
//                     id="nav-faq-tab"
//                     data-bs-toggle="tab"
//                     href="#nav-faq"
//                     role="tab"
//                     aria-controls="nav-faq"
//                     aria-selected="false"
//                   >
//                     Questions and Answers
//                   </a>
//                   <a
//                     className="nav-link"
//                     id="nav-ship-returns-tab"
//                     data-bs-toggle="tab"
//                     href="#nav-ship-returns"
//                     role="tab"
//                     aria-controls="nav-ship-returns"
//                     aria-selected="false"
//                   >
//                     Shipping & Returns
//                   </a>
//                   <a
//                     className="nav-link"
//                     id="nav-size-chart-tab"
//                     data-bs-toggle="tab"
//                     href="#nav-size-chart"
//                     role="tab"
//                     aria-controls="nav-size-chart"
//                     aria-selected="false"
//                   >
//                     Size Chart
//                   </a>
//                 </div>
//               </nav>
//               <div className="tab-content p-3 small" id="nav-tabContent">
//                 <div
//                   className="tab-pane fade show active"
//                   id="nav-details"
//                   role="tabpanel"
//                   aria-labelledby="nav-details-tab"
//                 >
//                   <Details />
//                 </div>
//                 <div
//                   className="tab-pane fade"
//                   id="nav-randr"
//                   role="tabpanel"
//                   aria-labelledby="nav-randr-tab"
//                 >
//                   {Array.from({ length: 5 }, (_, key) => (
//                     <RatingsReviews key={key} />
//                   ))}
//                 </div>
//                 <div
//                   className="tab-pane fade"
//                   id="nav-faq"
//                   role="tabpanel"
//                   aria-labelledby="nav-faq-tab"
//                 >
//                   <dl>
//                     {Array.from({ length: 5 }, (_, key) => (
//                       <QuestionAnswer key={key} />
//                     ))}
//                   </dl>
//                 </div>
//                 <div
//                   className="tab-pane fade"
//                   id="nav-ship-returns"
//                   role="tabpanel"
//                   aria-labelledby="nav-ship-returns-tab"
//                 >
//                   <ShippingReturns />
//                 </div>
//                 <div
//                   className="tab-pane fade"
//                   id="nav-size-chart"
//                   role="tabpanel"
//                   aria-labelledby="nav-size-chart-tab"
//                 >
//                   <SizeChart />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <CardFeaturedProduct data={data.products} />
//           <CardServices />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailView;

import { lazy, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetailView = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        // Check if we have category-filtered products in localStorage
        const categoryProducts = localStorage.getItem('categoryProducts');
        let productsData = [];
        
        if (categoryProducts) {
          // Use the filtered products from localStorage
          productsData = JSON.parse(categoryProducts);
          setProducts(productsData);
          // Clear the localStorage after using it
          localStorage.removeItem('categoryProducts');
        } else {
          // Fetch all products if no filtered products exist
          const response = await axios.get('http://localhost:5000/api/product');
          if (response.data.success) {
            productsData = response.data.data;
            setProducts(productsData);
          }
        }

        // Set selected product logic
        if (productId) {
          const product = productsData.find(p => p._id === productId);
          if (product) {
            setSelectedProduct(product);
          }
        } else if (productsData.length > 0) {
          setSelectedProduct(productsData[0]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Error loading products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [productId]);

  const getAuthConfig = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser || !savedUser.tokens?.accessToken) {
      toast.error('Please login to add items to cart');
      navigate('/login');
      return null;
    }
    return {
      headers: {
        "Authorization": `Bearer ${savedUser.tokens.accessToken}`
      }
    };
  };

  // Add to cart function
  const handleAddToCart = async () => {
    try {
      const authConfig = getAuthConfig();
      if (!authConfig) return;

      const savedUser = JSON.parse(localStorage.getItem("user"));
      const userId = savedUser.id;

      const response = await axios.post(
        `http://localhost:5000/api/cart/${userId}/cart`,
        {
          productId: selectedProduct._id,
          quantity: quantity
        },
        authConfig
      );

      if (response.data.success) {
        toast.success(response.data.message || 'Product added to cart successfully!');
        setQuantity(1); // Reset quantity after successful addition
      } else {
        toast.error(response.data.message || 'Failed to add product to cart');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      if (error.response?.status === 401) {
        toast.error('Session expired. Please login again');
        navigate('/login');
      } else {
        toast.error(error.response?.data?.message || 'Error adding product to cart');
      }
    }
  };

  // Handle quantity change
  const handleQuantityChange = (increment) => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + increment;
      if (newQuantity < 1) return 1;
      if (newQuantity > selectedProduct.stock) return selectedProduct.stock;
      return newQuantity;
    });
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!selectedProduct) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning">
          Product not found. <Link to="/products">View all products</Link>
        </div>
      </div>
    );
  }

  // Update the image display in the main product section
  const renderMainImage = (product) => {
    if (!product.images || product.images.length === 0) {
      return (
        <div className="product-image-container">
          <img
            src="https://via.placeholder.com/500"
            className="img-fluid rounded shadow product-image"
            alt="Product placeholder"
          />
        </div>
      );
    }

    const handleMouseMove = (e) => {
      if (!isZoomed) return;
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setMousePosition({ x, y });
    };

    return (
      <div 
        className="product-image-container"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={product.images[0].startsWith('http') 
            ? product.images[0] 
            : `http://localhost:5000${product.images[0]}`}
          className="product-image"
          alt={product.name}
          style={{
            transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/500';
          }}
        />
      </div>
    );
  };

  // Update the thumbnail images section
  const renderThumbnails = (product) => {
    if (!product.images || product.images.length === 0) return null;

    return (
      <div className="product-thumbnails">
        {product.images.map((img, index) => (
          <div 
            key={index}
            className={`thumbnail-container ${selectedProduct.images[0] === img ? 'active' : ''}`}
            onClick={() => {
              setSelectedProduct({
                ...selectedProduct,
                images: [img, ...selectedProduct.images.filter(i => i !== img)]
              });
            }}
          >
            <img
              src={img.startsWith('http') ? img : `http://localhost:5000${img}`}
              alt={`${product.name} view ${index + 1}`}
              className="thumbnail-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/80';
              }}
            />
          </div>
        ))}
      </div>
    );
  };

  // Update the product cards section
  const renderProductCard = (product) => (
    <div 
      className={`product-card card h-100 ${selectedProduct._id === product._id ? 'selected' : ''}`}
      onClick={() => setSelectedProduct(product)}
    >
      <div className="card-image-container">
        <img 
          src={product.images[0]?.startsWith('http') 
            ? product.images[0] 
            : `http://localhost:5000${product.images[0]}`}
          className="card-img-top" 
          alt={product.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/200';
          }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title text-truncate">{product.name}</h5>
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-text text-primary fw-bold mb-0">${product.price}</p>
          {product.discount > 0 && (
            <span className="badge bg-danger">
              {product.discount}% OFF
            </span>
          )}
        </div>
      </div>
    </div>
  );

  // Add CSS styles to the component
  const productStyles = `
    .product-image-container {
      position: relative;
      width: 100%;
      height: 500px;
      overflow: hidden;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      cursor: zoom-in;
      background: #f8f9fa;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .product-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.2s ease-out;
    }

    .product-image-container:hover .product-image {
      transform: scale(2);
    }

    .product-thumbnails {
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-top: 20px;
      flex-wrap: wrap;
    }

    .thumbnail-container {
      width: 80px;
      height: 80px;
      border-radius: 4px;
      overflow: hidden;
      cursor: pointer;
      border: 2px solid transparent;
      transition: all 0.2s ease;
      opacity: 0.7;
    }

    .thumbnail-container:hover {
      opacity: 0.9;
    }

    .thumbnail-container.active {
      border-color: #0d6efd;
      opacity: 1;
    }

    .thumbnail-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .product-details {
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      padding: 24px;
    }

    .product-card {
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .product-card.selected {
      border-color: #0d6efd;
    }

    .card-image-container {
      height: 200px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f8f9fa;
    }

    .card-image-container img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.3s ease;
    }

    .quantity-input {
      width: 150px !important;
      margin-right: 1rem;
    }

    .quantity-input .form-control {
      text-align: center;
      border-left: 0;
      border-right: 0;
      background-color: white;
    }

    .quantity-input .btn {
      width: 40px;
      padding: 0.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-color: #dee2e6;
    }

    .quantity-input .btn:hover {
      background-color: #0d6efd;
      color: white;
      border-color: #0d6efd;
    }

    .add-to-cart-btn {
      flex: 1;
      padding: 0.5rem 2rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      transition: all 0.2s ease;
    }

    .add-to-cart-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(13, 110, 253, 0.2);
    }

    @media (max-width: 768px) {
      .product-image-container {
        height: 350px;
      }

      .product-image-container:hover .product-image {
        transform: scale(1.5);
      }

      .thumbnail-container {
        width: 60px;
        height: 60px;
      }

      .quantity-input {
        width: 120px !important;
      }

      .add-to-cart-btn {
        padding: 0.5rem 1rem;
      }
    }
  `;

  return (
    <>
      <ToastContainer />
      <div className="container-fluid mt-3">
        <style>{productStyles}</style>
        {/* Product Header Section */}
        <div className="row mb-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">
                  <Link to="/products">
                    {selectedProduct.category?.[0]?.name || 'Products'}
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">{selectedProduct.name}</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Product Section */}
        <div className="row">
          {/* Left Column - Images */}
          <div className="col-md-6 mb-4">
            <div className="main-image-container position-relative overflow-hidden">
              {renderMainImage(selectedProduct)}
            </div>
            
            {/* Thumbnail Images with click to change main image */}
            <div className="d-flex gap-2 justify-content-center">
              {selectedProduct.images?.map((img, index) => (
                <img
                  key={index}
                  src={img.startsWith('http') ? img : `http://localhost:5000${img}`}
                  className="border rounded cursor-pointer"
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    objectFit: 'cover',
                    opacity: selectedProduct.images[0] === img ? 1 : 0.5,
                    transition: 'opacity 0.2s ease'
                  }}
                  alt={`${selectedProduct.name} view ${index + 1}`}
                  onClick={() => {
                    setSelectedProduct({
                      ...selectedProduct,
                      images: [
                        img,
                        ...selectedProduct.images.filter(i => i !== img)
                      ]
                    });
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/80';
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="col-md-6">
            <div className="product-details p-3">
              <h1 className="h3 mb-2">{selectedProduct.name}</h1>
              
              {/* Price Section */}
              <div className="mb-4">
                <div className="d-flex align-items-center gap-2">
                  <h2 className="h3 mb-0 text-primary">${selectedProduct.price}</h2>
                  {selectedProduct.discount > 0 && (
                    <span className="badge bg-danger">
                      {selectedProduct.discount}% OFF
                    </span>
                  )}
                </div>
              </div>

              {/* Quick Details */}
              <div className="mb-4">
                <table className="table table-sm">
                  <tbody>
                    <tr>
                      <td className="text-muted">Stock:</td>
                      <td>{selectedProduct.stock} {selectedProduct.unit}</td>
                    </tr>
                    <tr>
                      <td className="text-muted">Category:</td>
                      <td>{selectedProduct.category?.[0]?.name}</td>
                    </tr>
                    {/* <tr> */}
                      {/* <td className="text-muted">Sub Category:</td> */}
                      {/* <td>{selectedProduct.subCategory?.[0]?.name}</td> */}
                    {/* </tr> */}
                    <tr>
                      <td className="text-muted">Barcode:</td>
                      <td>{selectedProduct.barcodeId}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Description */}
              <div className="mb-4">
                <h5>Description</h5>
                <p>{selectedProduct.description}</p>
              </div>

              {/* Add to Cart Section */}
              <div className="d-flex align-items-center mb-4">
                <div className="input-group quantity-input">
                  <button 
                    className="btn btn-outline-secondary" 
                    type="button"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    <i className="bi bi-dash"></i>
                  </button>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={quantity}
                    readOnly 
                  />
                  <button 
                    className="btn btn-outline-secondary" 
                    type="button"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= selectedProduct.stock}
                  >
                    <i className="bi bi-plus"></i>
                  </button>
                </div>
                <button 
                  className="btn btn-primary add-to-cart-btn"
                  onClick={handleAddToCart}
                  disabled={selectedProduct.stock === 0}
                >
                  <i className="bi bi-cart-plus"></i>
                  {selectedProduct.stock === 0 ? 'Out of Stock' : 'Add to cart'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* All Products Section */}
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="mb-4">Similar Products</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {products.map((product) => (
                <div key={product._id} className="col">
                  {renderProductCard(product)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailView;