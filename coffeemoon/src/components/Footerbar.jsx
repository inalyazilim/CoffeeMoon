import React from "react";
import "./Footerbar.css";
const Footerbar = () => {
  return (
    <div className="footerbar">
      <p>
        Telif Hakkı © 2024{" "}
        <a
          href="https://www.inalyazilim.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          İnalyazılım.com
        </a>{" "}
        - Tüm Hakları Saklıdır.
      </p>
    </div>
  );
};

export default Footerbar;
