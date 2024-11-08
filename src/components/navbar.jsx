import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Inline styles for the Navbar
  const styles = {
    header: {
      width: '100%',
      padding: '10px 20px',
      backgroundColor: '#333',
      position: 'fixed',
      top: 0,
      zIndex: 1000,
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      color: '#fff',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    navLinks: {
      listStyle: 'none',
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
    },
    navLink: {
      textDecoration: 'none',
      color: '#fff',
      fontSize: '16px',
      transition: 'color 0.3s ease',
    },
    navLinkHover: {
      color: '#ff9800',
    },
    resumeButton: {
      textDecoration: 'none',
      color: '#fff',
      padding: '8px 12px',
      backgroundColor: '#ff9800',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    resumeButtonHover: {
      backgroundColor: '#e68a00',
    },
    menuToggle: {
      display: 'none',
      fontSize: '24px',
      color: '#fff',
      cursor: 'pointer',
    },
    mobileMenu: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#444',
      position: 'absolute',
      top: '60px',
      right: '20px',
      width: '200px',
      borderRadius: '5px',
      padding: '10px',
      zIndex: 1000,
    },
  };

  const handleToggle = () => setMenuOpen(!menuOpen);

  return (
    <header style={styles.header}>
      <nav style={styles.navbar}>
        <div style={styles.logo}>MyPortfolio</div>

        {/* Menu Toggle Button for Mobile */}
        <div style={styles.menuToggle} onClick={handleToggle}>
          ☰
        </div>

        {/* Navigation Links */}
        <ul style={menuOpen ? styles.mobileMenu : styles.navLinks}>
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                style={styles.navLink}
                onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
                onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
              >
                {item}
              </a>
            </li>
          ))}
          {/* Resume Download Button */}
          <li>
            <a
              href="/resume.pdf"
              download="My_Resume.pdf"
              style={styles.resumeButton}
              onMouseEnter={(e) => (e.target.style.backgroundColor = styles.resumeButtonHover.backgroundColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = styles.resumeButton.backgroundColor)}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
