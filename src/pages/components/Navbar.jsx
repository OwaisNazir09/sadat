import React from 'react';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaSearch,
  FaUser,
  FaShoppingCart,
} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-warning text-white py-2">
        <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
          {/* Left: Phone */}
          <div className="d-flex align-items-center gap-2">
            <FaPhone />
            <span>Call Us On +91 6005297003</span>
          </div>

          {/* Right: Address and Email */}
          <div className="d-flex align-items-center gap-2 text-end flex-wrap justify-content-end">
            <FaMapMarkerAlt />
            <span>Batamaloo, Srinagar, J&K, 190001</span>
            <span className="mx-2">|</span>
            <FaEnvelope />
            <span>founder@sadathcorporate.in</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-fluid bg-white py-3 border-bottom px-4">
        <div className="row align-items-center">
          {/* Left: Navigation */}
          <div className="col-md-4 mb-3 mb-md-0">
            <ul className="nav justify-content-start">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">SHOP</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">ABOUT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">CONTACT</a>
              </li>
            </ul>
          </div>

          {/* Center: Logo */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <img
              src="/logo.png"
              alt="Sadath Corporate"
              style={{ height: '50px' }}
            />
            <div>
              <h5 className="mb-0">ساداتھ کارپوریٹ</h5>
              <strong>SADATH CORPORATE</strong>
            </div>
          </div>

          {/* Right: Search, Profile, Cart */}
          <div className="col-md-4 d-flex justify-content-end align-items-center gap-3">
            <div className="input-group w-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                style={{ maxWidth: '200px' }}
              />
              <span className="input-group-text">
                <FaSearch />
              </span>
            </div>

            <FaUser size={20} />
            <div className="position-relative">
              <FaShoppingCart size={20} />
              <span className="badge bg-dark rounded-pill position-absolute top-0 start-100 translate-middle">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
