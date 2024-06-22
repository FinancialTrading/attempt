import React, { useState } from 'react';

const Logo = () => (
  <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 20C0 8.95431 8.95431 0 20 0H100C111.046 0 120 8.95431 120 20V20C120 31.0457 111.046 40 100 40H20C8.95431 40 0 31.0457 0 20V20Z" fill="#6c69eb"/>
    <path d="M20 12C15.5817 12 12 15.5817 12 20C12 24.4183 15.5817 28 20 28C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12ZM18 24V16L24 20L18 24Z" fill="white"/>
    <path d="M40 28V12H44V28H40ZM48 28V12H52L56 16V12H60V28H56L52 24V28H48ZM64 28V12H76V16H68V18H74V22H68V24H76V28H64ZM80 28V12H92V16H84V18H90V22H84V24H92V28H80Z" fill="white"/>
  </svg>
);

const MockScreens = () => (
  <svg width="100%" height="100%" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="280" height="280" rx="10" fill="#f0f0fd"/>
    <text x="30" y="40" fill="#6c69eb" font-size="20" font-weight="bold">PRSU</text>
    <text x="30" y="70" fill="#333" font-size="16">Vacation Budget</text>
    <rect x="30" y="90" width="240" height="120" rx="5" fill="#e6e6e6"/>
    <circle cx="70" cy="150" r="30" fill="#ff6b6b"/>
    <circle cx="140" cy="150" r="30" fill="#4ecdc4"/>
    <circle cx="210" cy="150" r="30" fill="#feca57"/>
    <text x="55" y="155" fill="#fff" font-size="12">Flight</text>
    <text x="125" y="155" fill="#fff" font-size="12">Hotel</text>
    <text x="190" y="155" fill="#fff" font-size="12">Food</text>
    <rect x="30" y="220" width="240" height="50" rx="5" fill="#6c69eb"/>
    <text x="45" y="250" fill="#fff" font-size="16">Total: $2,500</text>
    
    <rect x="310" y="10" width="280" height="280" rx="10" fill="#f0f0fd"/>
    <text x="330" y="40" fill="#6c69eb" font-size="20" font-weight="bold">PRSU</text>
    <text x="330" y="70" fill="#333" font-size="16">Savings Progress</text>
    <rect x="330" y="90" width="240" height="15" rx="5" fill="#e6e6e6"/>
    <rect x="330" y="90" width="180" height="15" rx="5" fill="#4ecdc4"/>
    <text x="330" y="120" fill="#333" font-size="12">$1,800 / $2,500</text>
    <rect x="330" y="140" width="240" height="100" rx="5" fill="#e6e6e6"/>
    <path d="M340 230 Q 450 180, 560 230" stroke="#4ecdc4" stroke-width="3" fill="none"/>
    <text x="330" y="260" fill="#333" font-size="14">Mar Apr May Jun Jul</text>
  </svg>
);

const LandingPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#333', fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      <header style={{ backgroundColor: '#6c69eb', color: '#ffffff', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <Logo />
          <nav>
            <a href="#features" style={linkStyle}>Features</a>
            <a href="#values" style={linkStyle}>Our Values</a>
          </nav>
        </div>
      </header>
      
      <main style={{ maxWidth: '1200px', margin: '0 auto', overflow: 'hidden' }}>
        <section style={{ ...sectionStyle, backgroundColor: '#f0f0fd', paddingBottom: '80px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px', marginRight: '20px' }}>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#6c69eb' }}>Simplify Your Financial Journey</h1>
              <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#333' }}>
                Experience the power of personal finance, reimagined. Prsu blends the luxury of simplicity with the wealth of knowledge.
              </p>
              <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '20px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{
                    flex: 1,
                    padding: '10px',
                    fontSize: '1rem',
                    borderRadius: '25px 0 0 25px',
                    border: '1px solid #6c69eb'
                  }}
                />
                <button type="submit" style={{
                  ...buttonStyle,
                  borderRadius: '0 25px 25px 0',
                  padding: '10px 20px'
                }}>
                  Sign Up
                </button>
              </form>
            </div>
            <div style={{ flex: 1, minWidth: '300px', maxWidth: '600px' }}>
              <MockScreens />
            </div>
          </div>
        </section>

        <section id="features" style={sectionStyle}>
          <h2 style={{ ...headingStyle, color: '#6c69eb' }}>Our Features</h2>
          <div style={gridStyle}>
            {['Easy Budgeting', 'Visual Financial Planning', 'Smart Categorization', 'Goal Tracking'].map((feature, index) => (
              <div key={feature} style={{ ...cardStyle, backgroundColor: '#f0f0fd', boxShadow: '0 4px 6px rgba(108, 105, 235, 0.1)' }}>
                <h3 style={{ marginBottom: '10px', color: '#6c69eb' }}>{feature}</h3>
                <p style={{ color: '#333' }}>Discover how {feature.toLowerCase()} can transform your financial life with Prsu.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="values" style={{ ...sectionStyle, backgroundColor: '#f0f0fd' }}>
          <h2 style={{ ...headingStyle, color: '#6c69eb' }}>Our Values</h2>
          <div style={gridStyle}>
            {['Empowerment', 'Simplicity', 'Transparency', 'Growth'].map((value) => (
              <div key={value} style={{ ...cardStyle, backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                <h3 style={{ marginBottom: '10px', color: '#6c69eb' }}>{value}</h3>
                <p style={{ color: '#333' }}>We believe in {value.toLowerCase()} as a core principle to guide your financial journey.</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <footer style={{
        padding: '20px',
        textAlign: 'center',
        fontSize: '0.9rem',
        backgroundColor: '#6c69eb',
        color: '#ffffff'
      }}>
        <p>"Empowering Your Financial Wisdom"</p>
      </footer>
    </div>
  );
};

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  margin: '0 10px'
};

const sectionStyle = {
  padding: '60px 20px',
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '2rem',
  marginBottom: '30px'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px'
};

const cardStyle = {
  padding: '20px',
  borderRadius: '10px',
};

const buttonStyle = {
  backgroundColor: '#ff6b6b',
  color: '#ffffff',
  border: 'none',
  padding: '12px 30px',
  fontSize: '1rem',
  borderRadius: '25px',
  cursor: 'pointer',
  fontWeight: 'bold',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease'
};

export default LandingPage;
