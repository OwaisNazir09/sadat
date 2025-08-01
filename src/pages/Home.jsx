import React from 'react';
import { Carousel, Card, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// Slide images
const slides = [
  {
    // title: "TIMELESS ELEGANCE",
    // subtitle: "Fragrance For Every Occasion",
    // buttonText: "SHOP NOW"
    image: "/img/s1.webp",
  },
  {
    // title: "SUMMER COLLECTION",
    // subtitle: "Fresh Scents for Warm Days",
    // buttonText: "EXPLORE",
    image: "/img/s2.jpeg",
  },
  {
    // title: "LUXURY UNISEX",
    // subtitle: "Scents That Defy Gender",
    // buttonText: "DISCOVER",
    image: "/img/s3.jpeg",
  }
];

// Product data
const products = [
  {
    id: 1,
    name: "Elegance Bloom",
    image: "/img/products/p1 (1).webp",
    price: 1200,
    discountPrice: 899,
    discountPercent: Math.round(((1200 - 899) / 1200) * 100),
    rating: 5
  },
  {
    id: 2,
    name: "Royal Essence",
    image: "/img/products/p1.webp",
    price: 1100,
    discountPrice: 799,
    discountPercent: Math.round(((1100 - 799) / 1100) * 100),
    rating: 5
  },
  {
    id: 3,
    name: "Mystic Oud",
    image: "/img/products/p2.webp",
    price: 1500,
    discountPrice: 1099,
    discountPercent: Math.round(((1500 - 1099) / 1500) * 100),
    rating: 5
  },
  {
    id: 4,
    name: "Velvet Petals",
    image: "/img/products/p3.webp",
    price: 999,
    discountPrice: 749,
    discountPercent: Math.round(((999 - 749) / 999) * 100),
    rating: 5
  },
  {
    id: 5,
    name: "Ocean Mist",
    image: "/img/products/p4.webp",
    price: 850,
    discountPrice: 699,
    discountPercent: Math.round(((850 - 699) / 850) * 100),
    rating: 5
  },
  {
    id: 6,
    name: "Amber Nights",
    image: "/img/products/p5.webp",
    price: 1400,
    discountPrice: 1049,
    discountPercent: Math.round(((1400 - 1049) / 1400) * 100),
    rating: 5
  },
  {
    id: 7,
    name: "Citrus Dream",
    image: "/img/products/p6.webp",
    price: 1000,
    discountPrice: 799,
    discountPercent: Math.round(((1000 - 799) / 1000) * 100),
    rating: 5
  },
  {
    id: 8,
    name: "Midnight Rose",
    image: "/img/products/p7.webp",
    price: 1300,
    discountPrice: 999,
    discountPercent: Math.round(((1300 - 999) / 1300) * 100),
    rating: 5
  },
  {
    id: 9,
    name: "Floral Bliss",
    image: "/img/products/p8.webp",
    price: 950,
    discountPrice: 699,
    discountPercent: Math.round(((950 - 699) / 950) * 100),
    rating: 5
  },
  {
    id: 10,
    name: "Sandal Grace",
    image: "/img/products/p9.webp",
    price: 1050,
    discountPrice: 799,
    discountPercent: Math.round(((1050 - 799) / 1050) * 100),
    rating: 5
  },
  {
    id: 11,
    name: "Signature Musk",
    image: "/img/products/p10.webp",
    price: 1250,
    discountPrice: 899,
    discountPercent: Math.round(((1250 - 899) / 1250) * 100),
    rating: 5
  }
];

// Utility to group products into chunks
const chunkArray = (arr, size) =>
  arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);

function Home() {
  const productChunks = chunkArray(products, 4);

  return (
    <div className="container-fluid p-0">
      {/* Hero Banner Carousel */}
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={slide.image}
              alt={`Slide ${index + 1}`}
              style={{ height: '500px', objectFit: 'cover' }}
            />
            {/* <Carousel.Caption className="d-flex flex-column justify-content-center h-100" style={{ top: 0 }}>
              <div className="bg-dark bg-opacity-50 p-4 rounded">
                <h4>{slide.title}</h4>
                <h1 className="display-4">{slide.subtitle}</h1>
                <button className="btn btn-primary mt-3">{slide.buttonText}</button>
              </div>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Product Carousel */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Fragrance For Every Occasion</h2>
        <p className='text-center'>Each fragrance crafted to complement unique essence</p>
        <Carousel indicators={false}>
          {productChunks.map((group, idx) => (
            <Carousel.Item key={idx}>
              <Row className="justify-content-center">
                {group.map((product) => (
                  <Col key={product.id} md={3} sm={6} xs={12} className="mb-4">
                    <Card className="h-100 position-relative shadow-sm">
                      <Card.Img
                        variant="top"
                        src={product.image}
                        alt={product.name}
                        style={{ height: '220px', objectFit: 'contain' }}
                      />
                      {product.discountPercent > 0 && (
                        <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                          Save {product.discountPercent}%
                        </span>
                      )}
                      <Card.Body className="text-center">
                        <Card.Title className="fs-6 fw-bold">{product.name}</Card.Title>
                        <div className="text-warning mb-1">
                          {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
                        </div>
                        <div className="mb-1">
                          <span className="fw-bold text-danger">₹{product.discountPrice}</span>{" "}
                          <small className="text-muted text-decoration-line-through">
                            ₹{product.price}
                          </small>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
