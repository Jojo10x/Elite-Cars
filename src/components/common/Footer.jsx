import { Link } from 'react-router-dom';
import { footMenu, footSocial } from '../../data/footerData';


const Footer = () => {

    const currYear = new Date().getFullYear();


    return (
      <footer id="footer">
        <h2>
          <Link to="/" className="brand-logo">
            Elite Cars
          </Link>
        </h2>
        <div className="separator"></div>
        <div className="container">
          <div className="wrapper footer_wrapper">
            {footMenu.map((item) => {
              const { id, title, menu } = item;
              return (
                <div className="foot_menu" key={id}>
                  <h4>{title}</h4>
                  <ul>
                    {menu.map((item) => {
                      const { id, link, path } = item;
                      return (
                        <li key={id}>
                          <Link to={path}>{link}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="separator"></div>

        <div className="sub_footer">
          <div className="container">
            <div className="sub_footer_wrapper">
              <div className="foot_copyright">
                <p>
                  {currYear} | Elite Cars. All Rights Reserved. <a href="https://pixeltochka.tech/">Powered by{" "}
                  PT</a>
                </p>
              </div>
              <div className="foot_social">
                {footSocial.map((item) => {
                  const { id, icon, path } = item;
                  return (
                    <Link to={path} key={id}>
                      {icon}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;