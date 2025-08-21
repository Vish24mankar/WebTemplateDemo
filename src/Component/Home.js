import React from 'react'; 
import carousel1 from '../Component/asset/carousel-1.jpg';
import carousel2 from '../Component/asset/carousel-2.jpg';
import './Home.css';

function Home() {
  return (
    <div>
      {/* Carousel Section */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel1} className="d-block w-100" alt="Slide 1" style={{ height: '500px', objectFit: 'cover' }} />
            <div className="carousel-caption-full">
              <p className="zoom-in-text" style={{fontSize:"20px"}}>YOUR SMILE MATTERS</p>
              <p className="zoom-out-text" style={{fontSize:"50px",fontWeight:"normal"}}>Take The Best Quality Dental Treatment</p> 
              <div className="d-flex gap-2 justify-content-center">
                <button className="btn btn-primary zoomOut p-3">Appointment</button>
                <button className="btn btn-success zoomOut p-3">Contact Us</button>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100" alt="Slide 2" style={{ height: '500px', objectFit: 'cover' }} />
            <div className="carousel-caption-full">
              <p className="zoom-in-text" style={{fontSize:"20px"}}>YOUR SMILE MATTERS</p>
              <p className="zoom-in-text" style={{fontSize:"50px",fontWeight:"normal"}}>Take The Best Quality Dental Treatment</p>
              <div className="d-flex gap-2 justify-content-center">
                <button className="btn btn-primary zoomOut p-3">Appointment</button>
                <button className="btn btn-success zoomOut p-3">Contact Us</button>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className='sectionBox'>
          {/* Info Section */}
      <section className="container">
          <div className="row text-white">
           
            <div className="section1 col-md-4 p-4 bg-info mt-2">
              <h5 className="mb-3">Opening Hours</h5>
              <p>Mon - Fri <span>8:00am - 9:00pm</span></p>
              <p>Saturday <span>8:00am - 7:00pm</span></p>
              <p>Sunday  <span>8:00am - 5:00pm</span></p>
              <button className="btn">Appointment</button>
            </div>

          {/* Search A Doctor */}
          <div className="section1 col-md-4 p-4 mt-2" style={{background:"#091E3E "}}>
            <h5 className="mb-3">Search A Doctor</h5>
            <input type="date" className="form-control mb-3" />
            <select className="form-select mb-3">
              <option>Select A Service</option>
              <option>Dental Checkup</option>
              <option>Cleaning</option>
              <option>Root Canal</option>
            </select>
            <button className="btn btn-light w-100 fw-bold mt-2">Search Doctor</button>
          </div>

          {/* Make Appointment */}
          <div className="section1 col-md-4 p-4 mt-2" style={{background:"#F57E57"}}>
            <h5 className="mb-3">Make Appointment</h5>
            <p>
              Ipsum erat ipsum dolor clita rebum no rebum dolores labore, ipsum
              magna at eos et eos amet.
            </p>
            <h4 className="fw-bold">+012 345 6789</h4>
          </div>
        </div>
      </section>
      </div>
      
    </div>
  );
}

export default Home;
