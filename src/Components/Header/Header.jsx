import "./Header.css";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container">
        <a class="navbar-brand" href="/">
          SimplePlan Media
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item dropdown">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="shopDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                SHOP
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Men
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Women
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="catalogueDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                CATALOGUE
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Category 1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Category 2
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="icons">
            <i class="bi bi-heart"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
