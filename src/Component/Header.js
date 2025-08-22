import React from 'react';
import {FaRegClock, FaEnvelope,FaPhone , FaTooth,FaSearch  } from "react-icons/fa";
import '../Component/app.css';
import { useState } from 'react';

function Header() {
    //  const [showSearch, setShowSearch] = useState(false);
    const [showSerach,setShowSearch] = useState(false);
  return (
<div className="bg-light py-2 border-bottom">
    <div className="d-flex justify-content-between align-items-stretch fs-2 flex-wrap">
      {/* Left side: Clock */}
      <div className="d-flex align-items-center fs-5 text-primary">
        <FaRegClock className="me-2 ms-6" />
        <span>Opening Hours : Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed</span>
      </div>

      <div className="bg-primary text-white fs-5 d-flex align-items-center h-100 px-3 p-4">
        <div className="d-flex align-items-center me-4">
          <FaEnvelope className="me-2" />
          <span>visha24mankar@gmail.com</span>
        </div>

        <div className="d-flex align-items-center">
          <FaPhone className="me-2" />
          <span>+012 345 6789</span>
        </div>
      </div>
    </div>

        <nav className="navbar navbar-expand-lg bg-light shadow-sm sticky-top border">
            <div className="container-fluid">

                {/* Logo + Brand */}
                <div className="d-flex align-items-center">
                <FaTooth size={40} className="me-2 text-primary" />
                <a className="navbar-brand fw-bold fs-1 text-primary" href="#">
                    DentCare
                </a>
                </div>

                {/* Toggler for mobile */}
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links form */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 me-4 fs-2">
                    <li className="nav-item">
                    <a className="nav-link text-dark fs-5 fw-semibold" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-dark fs-5 fw-semibold " href="#">About</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle text-dark  fs-5 fw-semibold"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Pages
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Services</a></li>
                        <li><a className="dropdown-item" href="#">Our Team</a></li>
                        <li><a className="dropdown-item" href="#">Testimonials</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-dark fs-5 fw-semibold" href="#Contact.js">Contact</a>
                    </li>
                </ul>

                {/* Search Buttons */}
               <div className="d-flex align-items-center">
      {/* Search Icon */}
      {!showSerach && (
        <button
          className="btn btn-outline-primary me-2"
          onClick={() => setShowSearch(true)}
        >
          <FaSearch />
        </button>
      )}

      {/* Search Input */}
      {showSerach && (
        <form className="d-flex me-2" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-primary me-2" type="submit">
            Search
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => setShowSearch(false)}
          >
            X
          </button>
        </form>
      )}

      {/* Appointment Button */}
      <button className="btn btn-primary">Appointment</button>
    </div>
                </div>
            </div>
        </nav>


    </div>
  );
}

export default Header;
