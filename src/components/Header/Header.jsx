import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <address className="header-top__adress">
            Адрес: ул. Октябрьская, 6А, Калининград, Калининградская обл.
          </address>
          <ul className="header-top__contact">
            <li className="header-top__contact-mail">
              <a
                href="https://mail.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                booking@valentinahouse.ru
              </a>
            </li>
            <li className="header-top__contact-phone">8 (962) 279-56-89</li>
          </ul>
        </div>
        <nav className="nav">
          <h1 className="nav-title">
            Valentina <br /> Guest House
          </h1>
          <ul className="nav-list">
            <li className="nav-list__item">ГЛАВНАЯ</li>
            <li className="nav-list__item">НОМЕРА И ЦЕНЫ</li>
            <li className="nav-list__item">СТАТЬИ</li>
            <li className="nav-list__item">ИНФОРМАЦИЯ</li>
            <li className="nav-list__item">ПОЛНЫЙ ПАНСИОН</li>
          </ul>
          <ul className="nav-groups">
            <li className="nav-groups__el telegram">
              <a href=""></a>
            </li>
            <li className="nav-groups__el whatsUp">
              <a href=""></a>
            </li>
            <li className="nav-groups__el facebook">
              <a href=""></a>
            </li>
            <li className="nav-groups__el vk">
              <a href=""></a>
            </li>
            <li className="nav-groups__el inst">
              <a href=""></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
