import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  // Slide data with online images
  const slides = [
    {
      title: "TIMELESS ELEGANCE",
      subtitle: "Fragrance For Every Occasion",
      image: "/img/s1.webp",
      buttonText: "SHOP NOW"
    },
    {
      title: "SUMMER COLLECTION",
      subtitle: "Fresh Scents for Warm Days",
      image: "/img/slider/s2.jpg",
      buttonText: "EXPLORE"
    },
    {
      title: "LUXURY UNISEX",
      subtitle: "Scents That Defy Gender",
      image: "/img/slider/s3.jpg",
      buttonText: "DISCOVER"
    }
  ];

  return (
    <div className="container-fluid p-0">
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={slide.image}
              alt={`Slide ${index + 1}`}
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption className="d-flex flex-column justify-content-center h-100" style={{ top: 0 }}>
              <div className="bg-dark bg-opacity-50 p-4 rounded">
                <h4>{slide.title}</h4>
                <h1 className="display-4">{slide.subtitle}</h1>
                <button className="btn btn-primary mt-3">{slide.buttonText}</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;