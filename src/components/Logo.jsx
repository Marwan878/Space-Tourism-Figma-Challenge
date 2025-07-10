import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="md:me-20 lg:me-32" style={{ flexShrink: 0 }}>
      <img src="/shared/logo.svg" alt="Space Tourism" />
    </Link>
  );
}
