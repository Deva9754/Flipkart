import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img
          className="logo-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_-ygVCi7PUzr2fNKPwD3eEg-0W_AQALDhDmCLvecDw&s"
          alt="Logo"
        />
      </div>
      <div className="Search">
        <input
          className="search-bar"
          type="text"
          placeholder="Search your Products"
        />
      </div>
      <div className="nav-items">
        <ul className="nav-items-Bar">
          <li>
            <i class="fa-solid fa-right-to-bracket"></i>Login
          </li>
          <li>
            <i class="fa-solid fa-cart-shopping"></i>Cart
          </li>
          <li>
            <i class="fa-solid fa-store"></i>Become a Seller
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
