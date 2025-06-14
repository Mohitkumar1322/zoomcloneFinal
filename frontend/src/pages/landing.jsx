import React from 'react';
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const router = useNavigate();

  const scrollToBottom = () => {
    document.getElementById('moreContent').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='landingPageContainer'>
      {/* Navbar */}
      <nav>
        <div className='navHeader'>
          <h2>Apna Video Call</h2>
        </div>
        <div className='navlist'>
          <p onClick={() => router("/aljk23")}>Join as Guest</p>
          <p onClick={() => router("/auth")}>Register</p>
          <div onClick={() => router("/auth")} role='button'>
            <p>Login</p>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones
          </h1>
          <p>Cover a distance by Apna Video Call</p>
          <div role='button'>
            <Link to={"/auth"}>Get Started</Link>
          </div>
          <button onClick={scrollToBottom} className='scrollDownBtn'>↓ Learn More</button>
        </div>
        <div>
          <img src="/mobile.png" alt="Mobile" />
        </div>
      </div>

      {/* More Content */}
      <div id='moreContent' className='moreContentSection'>
        <h2>Why Apna Video Call?</h2>
        <p>
          Apna Video Call helps you stay in touch with family and friends, collaborate with colleagues,
          and build connections no matter where you are. Experience high-quality, low-latency video calls
          in a simple and secure way.
        </p>
        <img src="/mobile.png" alt="Another Mobile" />
        <div className="features">
          <div>
            <h3>🔒 Secure</h3>
            <p>Encrypted and private calls.</p>
          </div>
          <div>
            <h3>⚡ Fast</h3>
            <p>High-performance, real-time video streaming.</p>
          </div>
          <div>
            <h3>💬 Easy to Use</h3>
            <p>Simple interface for all age groups.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className='footer'>
        <p>© {new Date().getFullYear()} Apna Video Call. All rights reserved.</p>
        <div className='footerLinks'>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
}
