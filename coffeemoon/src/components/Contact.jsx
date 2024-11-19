import React from "react";
import "./Contact.css"; // CSS dosyasını import ediyoruz

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="baslik">İletişim</h1>
        <div className="contact-info">
          <div className="contact-item">
            <a href="tel:+1234567890">
              <i className="fas fa-phone"></i>
            </a>
            <p className="contact-description">Telefon</p>
            <p>
              <a href="tel:+1234567890">+90 000 000 00</a>
            </p>
          </div>
          <div className="contact-item">
            <a href="mailto:ornek@example.com">
              <i className="fas fa-envelope"></i>
            </a>
            <p className="contact-description">Email</p>
            <p>
              <a href="mailto:ornek@example.com">...</a>
            </p>
          </div>
          <div className="contact-item">
            <a
              href="https://maps.app.goo.gl/hFak9ULnmr4zeTm59"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-map-marker-alt"></i>
            </a>
            <p className="contact-description">Konum</p>
            <p>
              <a
                href="https://maps.app.goo.gl/hFak9ULnmr4zeTm59"
                target="_blank"
                rel="noopener noreferrer"
              >
                Konum için tıklayınız...
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
