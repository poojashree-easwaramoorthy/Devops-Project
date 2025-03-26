import React from 'react';
import sampleImage from '../assets/ekart.png'; // Path to your image
function Home() {
  return (
    <div className="home-container">
      {/* Left Side Image */}
      <div className="image-section">
        <img src={sampleImage} alt="E-commerce store" />
      </div>

      {/* Centered Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Our E-commerce Store</h1>
        <p>Browse our products and add them to your cart!</p>
      </div>

      {/* Right Side About Section */}
      <div className="about-section">
        <h2>About Us</h2>
        <p>Welcome to eKart, your one-stop destination for all things! Founded with the mission of providing high-quality products and exceptional customer service, we aim to make shopping a seamless and enjoyable experience for you.

At eKart, we curate a wide range of premium products that are carefully selected to meet your needs. Whether you're looking for the latest tech gadgets, trendy fashion, or home essentials, we've got something for everyone. Our team is dedicated to bringing you the best products at competitive prices, with new arrivals added regularly to keep things fresh and exciting.


        </p>

        <h2>Our Mission</h2>
        <p>
        We strive to offer not just products but a delightful shopping experience. Our mission is to make sure that every customer feels valued and satisfied with their purchase. We are committed to offering reliable customer service, fast shipping, and hassle-free returns, all while making sure you get the best value for your money.

Why Choose Us?

Wide Selection: Browse through a diverse collection of carefully curated products, from fashion to electronics.
Competitive Prices: Enjoy great deals without compromising on quality.
Fast and Reliable Shipping: We ensure timely delivery, so your orders arrive quickly and safely.
Customer Satisfaction: Our support team is always available to help with any inquiries or issues.
Thank you for choosing eKart! We look forward to serving you and providing everything you need to make your shopping experience extraordinary.
        </p>
      </div>
    </div>
  );
}

export default Home;
