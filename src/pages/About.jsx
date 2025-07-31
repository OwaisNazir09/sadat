import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  const [progressAnimated, setProgressAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    // Animate progress bars after component mounts
    setTimeout(() => {
      setProgressAnimated(true);
    }, 500);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "🏆",
      title: "Premium Quality, Guaranteed",
      description: "100% authentic and quality-checked products sourced from renowned brands worldwide."
    },
    {
      icon: "🌸",
      title: "Wide Range of Fragrances", 
      description: "Masculine, feminine, and unisex options to suit every preference and personality."
    },
    {
      icon: "👥",
      title: "Exceptional Customer Service",
      description: "Personalized recommendations from our expert fragrance consultants."
    },
    {
      icon: "🎁",
      title: "Elegant Gifting Solutions",
      description: "Customizable gift options and luxury packaging for every special occasion."
    },
    {
      icon: "💰",
      title: "Competitive Pricing & Offers",
      description: "Best value with seasonal sales, loyalty rewards, and exclusive member benefits."
    },
    {
      icon: "🏢",
      title: "Trusted by Corporates",
      description: "Professional corporate gifting, branding solutions, and bulk order services."
    }
  ];

  const stats = [
    { label: "Happy Customers", value: 98, color: "danger" },
    { label: " 12Years of Experience", value: 85, color: "primary" },
    { label: "Satisfied Clients", value: 92, color: "info" },
    { label: "Premium Brands", value: 78, color: "success" }
  ];

  const customStyles = `
    .hero-section {
      background: linear-gradient(135deg, #1a202c 0%, #553c9a 50%, #1a202c 100%);
      color: white;
      position: relative;
      overflow: hidden;
    }
    
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.2);
    }
    
    .gradient-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, transparent 50%, rgba(244, 63, 94, 0.2) 100%);
    }
    
    .gradient-text {
      background: linear-gradient(135deg, #f59e0b, #ec4899, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .hero-title {
      background: linear-gradient(135deg, #ffffff, #fce7f3, #e9d5ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .animate-section {
      transition: all 0.8s ease-out;
      opacity: 0;
      transform: translateY(30px);
    }
    
    .animate-section.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .feature-card {
      transition: all 0.3s ease;
      border: 1px solid #e9ecef;
    }
    
    .feature-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
    }
    
    .feature-card .feature-icon {
      font-size: 2.5rem;
      transition: transform 0.3s ease;
    }
    
    .feature-card:hover .feature-icon {
      transform: scale(1.1);
    }
    
    .progress-animated {
      transition: width 2s ease-out;
    }
    
    .badge-custom {
      background: linear-gradient(135deg, #8b5cf6, #ec4899);
      color: white;
      border-radius: 20px;
      padding: 8px 16px;
      font-size: 0.875rem;
      display: inline-block;
      margin-bottom: 1rem;
    }
    
    .cta-section {
      background: linear-gradient(135deg, #553c9a, #be185d, #553c9a);
      color: white;
      position: relative;
      overflow: hidden;
    }
    
    .btn-gradient {
      background: linear-gradient(135deg, #ec4899, #f97316);
      border: none;
      color: white;
      transition: all 0.3s ease;
    }
    
    .btn-gradient:hover {
      background: linear-gradient(135deg, #be185d, #ea580c);
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }
    
    .btn-outline-light-custom {
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.2);
      color: white;
      transition: all 0.3s ease;
    }
    
    .btn-outline-light-custom:hover {
      background: rgba(255,255,255,0.2);
      color: white;
    }
    
    .stat-card {
      background: white;
      border-radius: 12px;
      padding: 1rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      border: 1px solid #e9ecef;
      margin-bottom: 1rem;
    }
    
    .floating-element {
      position: absolute;
      bottom: -1.5rem;
      right: -1.5rem;
      width: 8rem;
      height: 8rem;
      background: linear-gradient(135deg, #ec4899, #f97316);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      font-size: 2.5rem;
    }
    
    .section-bg {
      background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
    }
    
    .image-rounded {
      border-radius: 16px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      transition: box-shadow 0.3s ease;
    }
    
    .image-rounded:hover {
      box-shadow: 0 25px 50px rgba(0,0,0,0.15);
    }
    
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem !important;
      }
      .floating-element {
        width: 6rem;
        height: 6rem;
        font-size: 2rem;
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="min-vh-100">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-overlay"></div>
          <div className="gradient-overlay"></div>
          
          <div className="container position-relative">
            <div className="py-5">
              <nav className="mb-4">
                <div className="d-flex align-items-center">
                  <a href="/" className="text-white-50 text-decoration-none me-2">Home</a>
                  <span className="text-white-50">/</span>
                  <span className="text-white ms-2">About Us</span>
                </div>
              </nav>
              
              <div className="py-5">
                <div className="row">
                  <div className="col-lg-8">
                    <h1 className="display-1 fw-bold mb-4 hero-title">
                      About Sadath Corporate
                    </h1>
                    <p className="lead text-white-75 fs-4">
                      Where fragrance meets excellence, and every scent tells a story of luxury and sophistication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main About Section */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className={`col-lg-6 animate-section ${isVisible['about-content'] ? 'visible' : ''}`} id="about-content">
                <div className="position-relative mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=400&fit=crop&crop=center" 
                    alt="Luxury Perfume Collection" 
                    className="img-fluid image-rounded"
                  />
                  <div className="floating-element text-white">
                    🌹
                  </div>
                </div>
                
                {/* Statistics */}
                <div className="row g-3">
                  {stats.map((stat, index) => (
                    <div key={index} className="col-6">
                      <div className="stat-card">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className={`badge bg-${stat.color} fs-6`}>
                            {stat.value}%
                          </span>
                        </div>
                        <p className="small text-muted fw-medium mb-2">{stat.label}</p>
                        <div className="progress" style={{height: '6px'}}>
                          <div 
                            className={`progress-bar bg-${stat.color} progress-animated`}
                            style={{ width: progressAnimated ? `${stat.value}%` : '0%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`col-lg-6 animate-section ${isVisible['about-text'] ? 'visible' : ''}`} id="about-text">
                <div className="badge-custom">
                  ✨ Who We Are
                </div>
                
                <h2 className="display-4 fw-bold mb-4">
                  Crafting Memories Through
                  <span className="gradient-text d-block"> Fragrance</span>
                </h2>
                
                <p className="fs-5 text-muted mb-4">
                  Sadath Corporate stands as a beacon of excellence in the world of luxury fragrances. Our distinguished perfume boutique has been curating exceptional scent experiences for discerning customers who appreciate the finer things in life.
                </p>
                
                <p className="fs-5 text-muted mb-4">
                  Located in the heart of the retail district, we offer an unparalleled collection of authentic perfumes from globally celebrated brands alongside exclusive niche labels that you won't find anywhere else.
                </p>

                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-light text-dark border px-3 py-2">Premium Quality</span>
                  <span className="badge bg-light text-dark border px-3 py-2">Expert Curation</span>
                  <span className="badge bg-light text-dark border px-3 py-2">Personalized Service</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-5 section-bg">
          <div className="container">
            <div className="text-center mb-5">
              <div className="badge-custom">
                🎯 Why Choose Us
              </div>
              <h2 className="display-4 fw-bold mb-4">
                The Sadath Corporate
                <span className="gradient-text d-block"> Difference</span>
              </h2>
              <p className="fs-5 text-muted col-lg-8 mx-auto">
                Discover what makes us the preferred destination for fragrance enthusiasts and luxury gift seekers.
              </p>
            </div>

            <div className="row g-4">
              {features.map((feature, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div 
                    className={`feature-card bg-white rounded-3 p-4 h-100 shadow-sm animate-section ${isVisible[`feature-${index}`] ? 'visible' : ''}`}
                    id={`feature-${index}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="feature-icon mb-3">
                      {feature.icon}
                    </div>
                    <h4 className="fw-bold mb-3 text-dark">
                      {feature.title}
                    </h4>
                    <p className="text-muted mb-0">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-4 fw-bold mb-4">
                Experience Our
                <span className="gradient-text"> Boutique</span>
              </h2>
            </div>

            <div className="row g-4">
              <div className="col-lg-8">
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=500&fit=crop&crop=center" 
                  alt="Perfume Store Interior" 
                  className="img-fluid image-rounded w-100"
                  style={{height: '400px', objectFit: 'cover'}}
                />
              </div>
              <div className="col-lg-4">
                <div className="row g-4">
                  <div className="col-12">
                    <img 
                      src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=300&fit=crop&crop=center" 
                      alt="Luxury Perfume Bottles" 
                      className="img-fluid image-rounded w-100"
                      style={{height: '185px', objectFit: 'cover'}}
                    />
                  </div>
                  <div className="col-12">
                    <img 
                      src="https://images.unsplash.com/photo-1588405748880-12d1d2a59db9?w=400&h=300&fit=crop&crop=center" 
                      alt="Elegant Gift Packaging" 
                      className="img-fluid image-rounded w-100"
                      style={{height: '185px', objectFit: 'cover'}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
       <section
  className="cta-section py-5 position-relative"
  style={{
    borderRadius: '1.5rem',
    overflow: 'hidden',
    backgroundColor: '#1f2937', // dark bg to contrast white text
  }}
>
  <div
    className="hero-overlay"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '1.5rem',
      zIndex: 1,
    }}
  ></div>

  <div className="container position-relative text-center" style={{ zIndex: 2 }}>
    <div className="py-5">
      <h2 className="display-4 fw-bold mb-4 text-white">
        Ready to Find Your{' '}
        <span
          style={{
            background: 'linear-gradient(135deg, #fce7f3, #e9d5ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
          }}
        >
          Signature Scent?
        </span>
      </h2>

      <p className="fs-5 text-white-75 mb-5 col-lg-8 mx-auto">
        Visit our boutique today and let our fragrance experts help you discover the perfect scent that captures your unique personality.
      </p>

      <div className="d-flex flex-wrap justify-content-center gap-3">
        <button
          className="btn btn-gradient btn-lg px-4 py-3 fw-semibold"
          style={{
            background: 'linear-gradient(to right, #d946ef, #9333ea)',
            color: '#fff',
            border: 'none',
            borderRadius: '0.75rem',
          }}
        >
          Visit Our Store
        </button>

        <button
          className="btn btn-outline-light-custom btn-lg px-4 py-3 fw-semibold"
          style={{
            border: '2px solid #fff',
            color: '#fff',
            borderRadius: '0.75rem',
            background: 'transparent',
          }}
        >
          Browse Collection
        </button>
      </div>
    </div>
  </div>
</section>

      </div>
    </>
  );
};

export default About;