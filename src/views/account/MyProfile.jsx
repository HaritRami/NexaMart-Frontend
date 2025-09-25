import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as IconPerson } from "bootstrap-icons/icons/person.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconFingerprint } from "bootstrap-icons/icons/fingerprint.svg";
import { ReactComponent as IconPencil } from "bootstrap-icons/icons/pencil.svg";
import { ReactComponent as IconLocation } from "bootstrap-icons/icons/geo-alt.svg";
import { ReactComponent as IconPlus } from "bootstrap-icons/icons/plus.svg";
import { ReactComponent as IconTrash } from "bootstrap-icons/icons/trash.svg";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyProfileView = () => {
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState({
    name: false,
    email: false,
    mobile: false
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  });
  const [loading, setLoading] = useState({
    name: false,
    email: false,
    mobile: false
  });
  const [addresses, setAddresses] = useState([]);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressFormData, setAddressFormData] = useState({
    address_line: "",
    city: "",
    state: "",
    country: "",
    mobile: ""
  });
  const [editingAddressId, setEditingAddressId] = useState(null);
  const editableFieldRefs = useRef({});

  useEffect(() => {
    // Get user data from localStorage
    const storedUserData = localStorage.getItem('user');
    
    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        setUserData(parsedData);
        setFormData({
          name: parsedData.name || "",
          email: parsedData.email || "",
          mobile: parsedData.mobile || ""
        });
        fetchAddresses(parsedData.id);
      } catch (error) {
        console.error('Error parsing user data:', error);
        toast.error('Error loading user data');
      }
    }
  }, []);

  const fetchAddresses = async (userId) => {
    try {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (!savedUser || !savedUser.tokens?.accessToken) {
        toast.error('🔒 Please login to view your addresses');
        return;
      }

      setLoading(true);
      const response = await axios.get(
        `http://localhost:5000/api/address/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${savedUser.tokens.accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.success) {
        setAddresses(response.data.data);
        if (response.data.data.length === 0) {
          toast.info('📫 Add your first delivery address!');
        }
      }
    } catch (error) {
      handleApiError(error, 'fetching addresses');
    } finally {
      setLoading(false);
    }
  };

  const handleApiError = (error, action) => {
    console.error(`Error ${action} address:`, error);
    if (error.response?.status === 401) {
      toast.error('🔒 Session expired. Please login again');
    } else if (error.response?.status === 403) {
      toast.error('⛔ You are not authorized to perform this action');
    } else if (error.response?.status === 404) {
      toast.error('❓ Address not found');
      // Refresh the list to ensure UI is in sync
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (savedUser?.id) {
        fetchAddresses(savedUser.id);
      }
    } else if (error.response?.status === 400) {
      toast.error(`📝 ${error.response.data.message || 'Please fill all required fields'}`);
    } else {
      toast.error(`❌ Error ${action} address. Please try again`);
    }
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    try {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (!savedUser || !savedUser.tokens?.accessToken) {
        toast.error('🔒 Authentication required. Please login to manage addresses.');
        return;
      }

      // Form validation
      if (!addressFormData.address_line.trim()) {
        toast.error('📝 Address line is required');
        return;
      }
      if (!addressFormData.city.trim()) {
        toast.error('📝 City is required');
        return;
      }
      if (!addressFormData.state.trim()) {
        toast.error('📝 State is required');
        return;
      }
      if (!addressFormData.country.trim()) {
        toast.error('📝 Country is required');
        return;
      }
      if (!addressFormData.mobile.trim()) {
        toast.error('📝 Mobile number is required');
        return;
      }

      setLoading(true);
      const url = editingAddressId 
        ? `http://localhost:5000/api/address/${editingAddressId}`
        : 'http://localhost:5000/api/address';
      
      const method = editingAddressId ? 'put' : 'post';
      
      // Include user ID in the request body for new addresses
      const requestData = {
        ...addressFormData,
        user: savedUser.id // This will be ignored by backend for updates
      };

      const response = await axios[method](
        url,
        requestData,
        {
          headers: {
            Authorization: `Bearer ${savedUser.tokens.accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.success) {
        toast.success(editingAddressId 
          ? '✅ Address updated successfully!' 
          : '✅ New address added successfully!'
        );
        fetchAddresses(savedUser.id);
        setShowAddressForm(false);
        setEditingAddressId(null);
        setAddressFormData({
          address_line: "",
          city: "",
          state: "",
          country: "",
          mobile: userData?.mobile || "" // Set default mobile from user data
        });
      }
    } catch (error) {
      handleApiError(error, editingAddressId ? 'updating' : 'adding');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAddress = async (addressId) => {
    if (!window.confirm('Are you sure you want to delete this address? This action cannot be undone.')) {
      return;
    }

    try {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (!savedUser || !savedUser.tokens?.accessToken) {
        toast.error('🔒 Authentication required. Please login to delete address.');
        return;
      }

      setLoading(true);
      const response = await axios.delete(
        `http://localhost:5000/api/address/${addressId}`,
        {
          headers: {
            Authorization: `Bearer ${savedUser.tokens.accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.success) {
        toast.success('🗑️ Address deleted successfully!');
        fetchAddresses(savedUser.id);
      }
    } catch (error) {
      handleApiError(error, 'deleting');
    } finally {
      setLoading(false);
    }
  };

  const handleEditAddress = (address) => {
    setAddressFormData({
      address_line: address.address_line,
      city: address.city,
      state: address.state,
      country: address.country,
      mobile: address.mobile
    });
    setEditingAddressId(address._id);
    setShowAddressForm(true);
  };

  const handleAddNewAddress = () => {
    setShowAddressForm(true);
    setEditingAddressId(null);
    setAddressFormData({
      address_line: "",
      city: "",
      state: "",
      country: "",
      mobile: userData?.mobile || "" // Set default mobile from user data
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.keys(editMode).forEach(field => {
        if (editMode[field] && editableFieldRefs.current[field] && !editableFieldRefs.current[field].contains(event.target)) {
          handleSave(field);
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [editMode, formData]);

  const handleEdit = (field) => {
    setEditMode(prev => ({ ...prev, [field]: true }));
  };

  const handleChange = (e, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSave = async (field) => {
    if (!formData[field] || formData[field] === userData[field]) {
      setEditMode(prev => ({ ...prev, [field]: false }));
      return;
    }

    try {
      setLoading(prev => ({ ...prev, [field]: true }));
      
      // Send data as JSON instead of FormData
      const response = await axios.put(
        `http://localhost:5000/api/user/profile/update/${userData.id}`,
        { [field]: formData[field] },
        {
          headers: {
            Authorization: `Bearer ${userData.tokens.accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.success) {
        // Update localStorage with the complete updated user data from response
        const updatedUserData = {
          ...userData,
          ...response.data.data // Use the data from server response
        };
        localStorage.setItem('user', JSON.stringify(updatedUserData));
        setUserData(updatedUserData);
        toast.success(`${field.charAt(0).toUpperCase() + field.slice(1)} updated successfully`);
      }
    } catch (error) {
      console.error(`Error updating ${field}:`, error);
      toast.error(error.response?.data?.message || `Error updating ${field}`);
      // Revert changes
      setFormData(prev => ({
        ...prev,
        [field]: userData[field]
      }));
    } finally {
      setLoading(prev => ({ ...prev, [field]: false }));
      setEditMode(prev => ({ ...prev, [field]: false }));
    }
  };

  const handleKeyDown = (e, field) => {
    if (e.key === 'Enter') {
      handleSave(field);
    } else if (e.key === 'Escape') {
      setFormData(prev => ({
        ...prev,
        [field]: userData[field]
      }));
      setEditMode(prev => ({ ...prev, [field]: false }));
    }
  };

  const EditableField = ({ field, icon: Icon, label, value }) => (
    <div className="col-md-6">
      <div className="p-3 border rounded bg-light">
        <div className="d-flex align-items-center mb-2">
          <Icon className="text-primary me-2" />
          <h6 className="mb-0">{label}</h6>
        </div>
        <div className="d-flex align-items-center" ref={el => editableFieldRefs.current[field] = el}>
          {editMode[field] && field === 'name' ? (
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={formData[field]}
                onChange={(e) => handleChange(e, field)}
                onKeyDown={(e) => handleKeyDown(e, field)}
                disabled={loading[field]}
                autoFocus
              />
              {loading[field] && (
                <span className="input-group-text">
                  <div className="spinner-border spinner-border-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </span>
              )}
            </div>
          ) : (
            <>
              <p className="text-muted mb-0 me-2">{value || 'Not provided'}</p>
              {field === 'name' && (
                <button 
                  className="btn btn-link btn-sm p-0"
                  onClick={() => handleEdit(field)}
                >
                  <IconPencil className="text-primary" />
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );

  if (!userData) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white py-3">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Profile Information</h4>
                <span className={`badge ${userData.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
                  {userData.status}
                </span>
              </div>
            </div>
            
            <div className="card-body">
              <div className="row g-4">
                {/* User ID - Not editable */}
                <div className="col-md-6">
                  <div className="p-3 border rounded bg-light">
                    <div className="d-flex align-items-center mb-2">
                      <IconFingerprint className="text-primary me-2" />
                      <h6 className="mb-0">User ID</h6>
                    </div>
                    <p className="text-muted mb-0 small">{userData.id}</p>
                  </div>
                </div>

                {/* Editable Fields */}
                <EditableField 
                  field="name"
                  icon={IconPerson}
                  label="Full Name"
                  value={userData.name}
                />

                <EditableField 
                  field="email"
                  icon={IconEnvelope}
                  label="Email Address"
                  value={userData.email}
                />

                <EditableField 
                  field="mobile"
                  icon={IconPhone}
                  label="Mobile Number"
                  value={userData.mobile}
                />
              </div>
            </div>
          </div>

          {/* Addresses Card */}
          <div className="card shadow-lg mt-4 border-0">
            <div className="card-header bg-gradient-primary text-white py-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <IconLocation className="me-2" size={24} />
                  <h4 className="mb-0">Delivery Addresses</h4>
                </div>
                <button
                  className="btn btn-light btn-sm d-flex align-items-center"
                  onClick={handleAddNewAddress}
                >
                  <IconPlus className="me-1" /> Add New Address
                </button>
              </div>
            </div>
            <div className="card-body p-4">
              {showAddressForm && (
                <div className="mb-4">
                  <div className="card border-primary">
                    <div className="card-header bg-primary bg-opacity-10">
                      <h5 className="mb-0 text-primary">
                        {editingAddressId ? 'Edit Address' : 'Add New Address'}
                      </h5>
                    </div>
                    <div className="card-body">
                      <form onSubmit={handleAddressSubmit} className="needs-validation">
                        <div className="row g-3">
                          <div className="col-12">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                id="addressLine"
                                placeholder="Enter address line"
                                value={addressFormData.address_line}
                                onChange={(e) => setAddressFormData(prev => ({
                                  ...prev,
                                  address_line: e.target.value
                                }))}
                                required
                              />
                              <label htmlFor="addressLine">Address Line</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                id="city"
                                placeholder="Enter city"
                                value={addressFormData.city}
                                onChange={(e) => setAddressFormData(prev => ({
                                  ...prev,
                                  city: e.target.value
                                }))}
                                required
                              />
                              <label htmlFor="city">City</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                id="state"
                                placeholder="Enter state"
                                value={addressFormData.state}
                                onChange={(e) => setAddressFormData(prev => ({
                                  ...prev,
                                  state: e.target.value
                                }))}
                                required
                              />
                              <label htmlFor="state">State</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                id="country"
                                placeholder="Enter country"
                                value={addressFormData.country}
                                onChange={(e) => setAddressFormData(prev => ({
                                  ...prev,
                                  country: e.target.value
                                }))}
                                required
                              />
                              <label htmlFor="country">Country</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                type="tel"
                                className="form-control"
                                id="mobile"
                                placeholder="Enter mobile number"
                                value={addressFormData.mobile}
                                onChange={(e) => setAddressFormData(prev => ({
                                  ...prev,
                                  mobile: e.target.value
                                }))}
                                required
                              />
                              <label htmlFor="mobile">Mobile Number</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-flex gap-2">
                              <button 
                                type="submit" 
                                className="btn btn-primary px-4"
                                disabled={loading}
                              >
                                {loading ? (
                                  <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    {editingAddressId ? 'Updating...' : 'Adding...'}
                                  </>
                                ) : (
                                  <>
                                    {editingAddressId ? '💾 Update' : '➕ Add'} Address
                                  </>
                                )}
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() => {
                                  setShowAddressForm(false);
                                  setEditingAddressId(null);
                                  setAddressFormData({
                                    address_line: "",
                                    city: "",
                                    state: "",
                                    country: "",
                                    mobile: ""
                                  });
                                }}
                                disabled={loading}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}

              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading addresses...</span>
                  </div>
                  <p className="text-muted mt-3 mb-0">Loading your addresses...</p>
                </div>
              ) : (
                <div className="row g-4">
                  {addresses.map((address) => (
                    <div key={address._id} className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <div className="d-flex align-items-center">
                              <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-2">
                                <IconLocation className="text-primary" />
                              </div>
                              <h6 className="mb-0">Delivery Address</h6>
                            </div>
                            <div className="btn-group">
                              <button
                                className="btn btn-outline-primary btn-sm"
                                onClick={() => handleEditAddress(address)}
                                disabled={loading}
                                title="Edit Address"
                              >
                                <IconPencil />
                              </button>
                              <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => handleDeleteAddress(address._id)}
                                disabled={loading}
                                title="Delete Address"
                              >
                                <IconTrash />
                              </button>
                            </div>
                          </div>
                          <div className="address-details">
                            <p className="mb-2 fs-6">{address.address_line}</p>
                            <p className="mb-2 text-muted">
                              {address.city}, {address.state}<br />
                              {address.country}
                            </p>
                            <div className="d-flex align-items-center text-primary">
                              <IconPhone className="me-2" />
                              <span>{address.mobile}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {addresses.length === 0 && !showAddressForm && (
                    <div className="col-12">
                      <div className="text-center py-5">
                        <div className="mb-3">
                          <IconLocation size={48} className="text-muted" />
                        </div>
                        <h5 className="text-muted mb-3">No addresses found</h5>
                        <button 
                          className="btn btn-primary"
                          onClick={handleAddNewAddress}
                        >
                          <IconPlus className="me-1" /> Add Your First Address
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileView;
