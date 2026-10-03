import "./Footer.css";

function Footer({ storeName, email }) {
  return (
    <footer className="footer" id="about">
      <div className="footer-container">

        <div className="footer-section">
          <h3>{storeName}</h3>
          <p>Quality electronics at affordable prices.</p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: {email}</p>
          <p>Phone: (704) 555-0123</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} {storeName}. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;