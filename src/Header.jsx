function Header({ onLoginClick }) {
  return (
    <header>
      <h1>AeroFlot</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Solution</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
        <button className="button" onClick={onLoginClick}>
          Check Flight
        </button>
      </nav>
    </header>
  );
}

export default Header;
