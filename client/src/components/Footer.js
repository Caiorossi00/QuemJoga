import "../assets/scss/footer.scss";
import logo from "../assets/images/logo-branco.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div id="logo">
          <a
            href="https://www.instagram.com/caiorossi.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div id="footer-text">
          <p className="credits">
            &copy; {new Date().getFullYear()} Kindly Developed by{" "}
            <a
              className="instagram-gradient"
              href="https://www.instagram.com/caiorossi.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Caiorossi.dev
            </a>
          </p>
          <div className="follow">
            <a
              href="https://www.instagram.com/caiorossi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-gradient"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <p className="follow-text">Me siga no Instagram!</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
