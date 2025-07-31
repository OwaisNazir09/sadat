// src/services/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px 20px", background: "#f8f8f8", borderBottom: "1px solid #ddd" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
