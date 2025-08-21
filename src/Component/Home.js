import React from 'react';
import carousel1 from '../Component/asset/carousel-1.jpg';
import carousel2 from '../Component/asset/carousel-2.jpg';
import './Home.css';
function Home() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carousel1} className="d-block w-100" alt="Slide 1" style={{ height: '500px', objectFit: 'cover' }} />
            <div className="carousel-caption-full">
                  <p className="zoom-in-text" style={{fontSize:"20px",fontStyle:"normal"}}>YOUR SMILE MATTERS</p>
                  <p className='zoom-out-text' style={{fontSize:"50px",fontWeight: "normal"}}>Take The Best Quality Dental Treatment</p>
                <div className="d-flex gap-2">
                  <button className="btn btn-primary p-3">Appointment</button>
                  <button className="btn btn-success p-3">Contact Us</button>
                </div>
            </div>
        </div>
        <div className="carousel-item">
          <img src={carousel2} className="d-block w-100" alt="Slide 2" style={{ height: '500px', objectFit: 'cover' }} />
          <div className="carousel-caption-full">
                  <p className="zoom-in-text" style={{fontSize:"20px",fontStyle:"normal"}}>YOUR SMILE MATTERS</p>
                  <p className="zoom-in-text" style={{fontSize:"50px",fontWeight: "normal"}}>Take The Best Quality Dental Treatment</p>
                 <div className="d-flex gap-2">
                    <button className="btn btn-primary p-3">Appointment</button>
                    <button className="btn btn-success p-3">Contact Us</button>
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
  );
}

export default Home;
