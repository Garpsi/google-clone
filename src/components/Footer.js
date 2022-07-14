import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="country">
        <p>United Kingdom</p>
      </div>
      <div className="footer__container">
        <div className="copyright">
          <p>&copy; Google Clone. This is just a demo!</p>
        </div>
        <div className="footer__links">
          <div className="footer__links--left">
            <p>Advertising</p>
            <p>Business</p>
            <p>How Search works</p>
          </div>
          <div className="footer__links--right">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Settings</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
