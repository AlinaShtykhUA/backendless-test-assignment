import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <p>Test project for Backendless</p>
      <p>
        Made by{" "}
        <a
          className="footer-link"
          rel="noreferrer"
          target="_blank"
          href="https://www.web-shtykh.tech/contacts"
        >
          Alina Shtykh
        </a>
      </p>
      <div className="footer-contacts">
        <div>
          Email:{" "}
          <a className="footer-link" href="mailto:alinashtykh@gmail.com">
            alinashtykh@gmail.com
          </a>
        </div>
        <div>
          CV:{" "}
          <a
            className="footer-link"
            href="https://drive.google.com/file/d/1ZU58sMpfmuBbbfFklZsMPzEVo4XZUAjl/view"
          >
            CV on Google Drive
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
