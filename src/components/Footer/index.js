import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <footer class="page-footer">{props.children}
      <div className="container">
        <div class="footer-copyright py-3">
          <p>Clicky Game!</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;