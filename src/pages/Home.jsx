import React from 'react';
import { Carousel, Card, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// Slide images
const slides = [
  {
    image: "/img/s1.webp",
  },
  {
    image: "/img/s2.jpeg",
  },
  {
    image: "/img/s3.jpeg",
  }
];

// Product data - now with 13 products
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
  },
  {
    id: 12,
    name: "Vanilla Sky",
    image: "/img/products/p11.webp",
    price: 1150,
    discountPrice: 849,
    discountPercent: Math.round(((1150 - 849) / 1150) * 100),
    rating: 5
  },
  {
    id: 13,
    name: "Jasmine Whisper",
    image: "/img/products/p12.webp",
    price: 1350,
    discountPrice: 999,
    discountPercent: Math.round(((1350 - 999) / 1350) * 100),
    rating: 5
  }
];

// Utility to group products into chunks of 5
const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

function Home() {
  const productChunks = chunkArray(products, 5);

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
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Product Carousel */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Fragrance For Every Occasion</h2>
        <p className='text-center mb-5'>Each fragrance crafted to complement unique essence</p>
        
        <Carousel indicators={false} wrap={true} interval={null}>
          {productChunks.map((group, idx) => (
            <Carousel.Item key={idx}>
              <Row className="justify-content-center g-4">
                {group.map((product) => (
                  <Col key={product.id} lg={2} md={4} sm={6} xs={12} className="d-flex">
                    <Card className="w-100 shadow-sm border-0">
                      <div style={{ height: '200px', overflow: 'hidden' }}>
                        <Card.Img
                          variant="top"
                          src={product.image}
                          alt={product.name}
                          className="img-fluid h-100 w-100"
                          style={{ objectFit: 'contain', padding: '20px' }}
                        />
                      </div>
                      {product.discountPercent > 0 && (
                        <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                          {product.discountPercent}% OFF
                        </span>
                      )}
                      <Card.Body className="text-center p-3">
                        <Card.Title className="fs-6 fw-bold mb-1">{product.name}</Card.Title>
                        <div className="text-warning mb-2">
                          {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
                        </div>
                        <div className="mb-1">
                          <span className="fw-bold text-danger fs-5">₹{product.discountPrice}</span>{" "}
                          <small className="text-muted text-decoration-line-through">
                            ₹{product.price}
                          </small>
                        </div>
                        <button className="btn btn-outline-dark btn-sm mt-2 w-100">
                          Add to Cart
                        </button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
                
                {/* Add empty columns if last group has less than 5 items to maintain layout */}
                {group.length < 5 && 
                  Array(5 - group.length).fill().map((_, i) => (
                    <Col key={`empty-${i}`} lg={2} md={4} sm={6} xs={12} className="d-flex" style={{ visibility: 'hidden' }}>
                      <Card className="w-100" style={{ border: 'none' }} />
                    </Col>
                  ))
                }
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;