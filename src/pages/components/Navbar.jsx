import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-warning text-white py-2">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-auto">
              <FaPhone /> Call Us On +91 6005297003
            </div>
            <div className="col-auto">
              <FaMapMarkerAlt /> Batamaloo, Srinagar, Jammu & Kashmir, 190001 &nbsp; | &nbsp;
              <FaEnvelope /> founder@sadathcorporate.in
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container py-3 border-bottom d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <img src="/logo.png" alt="Sadath Corporate" style={{ height: '50px', marginRight: '10px' }} />
          <div>
            <h5 className="mb-0">ساداتھ کارپوریٹ</h5>
            <strong>SADATH CORPORATE</strong>
          </div>
        </div>

        {/* Search Bar */}
        <div className="input-group w-50 mx-3">
          <input type="text" className="form-control" placeholder="Search our store" />
          <span className="input-group-text">
            <FaSearch />
          </span>
        </div>

        {/* Icons */}
        <div className="d-flex align-items-center gap-3">
          <FaUser size={20} />
          <div className="position-relative">
            <FaShoppingCart size={20} />
            <span className="badge bg-dark rounded-pill position-absolute top-0 start-100 translate-middle">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="container">
        <ul className="nav justify-content-center border-top pt-2">
          <li className="nav-item"><a className="nav-link" href="#">HOME</a></li>
          <li className="nav-item"><a className="nav-link" href="#">SHOP</a></li>
          <li className="nav-item"><a className="nav-link" href="#">ABOUT US</a></li>
          <li className="nav-item"><a className="nav-link" href="#">TESTIMONIALS</a></li>
          <li className="nav-item"><a className="nav-link" href="#">CONTACT</a></li>
          <li className="nav-item"><a className="nav-link" href="#">MORE</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
