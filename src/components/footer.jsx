import React from "react";
import "./styles/footer.styles.css";

function Footer() {
  const newDate = new Date().getFullYear();
  return (
    <div className="copyright">Copyright &copy; Your Website {newDate}</div>
  );
}

export default Footer;
