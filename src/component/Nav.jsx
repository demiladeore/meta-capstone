import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>

        <Link to="/menu">
          <li>Menu</li>
        </Link>

        <Link to="/reservation">
          <li>Reservation</li>
        </Link>

        <Link to="/order-online">
          <li>Order Online</li>
        </Link>

        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
