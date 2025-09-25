import { lazy } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const SignUpForm = lazy(() => import("../../components/account/SignUpForm"));

const SignUpView = () => {
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      console.log("Submitting form data:", formData); // Debug log

      const response = await fetch('http://localhost:5000/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          mobile: formData.mobile || null
        }),
      });

      const data = await response.json();
      console.log("Response from server:", data); // Debug log

      if (data.success) {
        // Store user data in context
        login(data.data.user);
        alert('Registration successful! Please check your email for verification.');
        navigate('/account/signin');
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container my-3">
      <div className="row border">
        <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
          <Link to="/">
            <img
              src="../../images/banner/Dell.webp"
              alt="..."
              className="img-fluid"
            />
          </Link>
          <Link to="/">
            <img
              src="../../images/banner/Laptops.webp"
              alt="..."
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="col-md-6 p-3">
          <h4 className="text-center">Sign Up</h4>
          <SignUpForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SignUpView;
