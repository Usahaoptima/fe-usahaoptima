const Footer = () => {
  return (
    <>
      <footer className="m-3 text-center d-flex justify-content-between">
        <div className="footer-title">
          Copyright ©<script>document.write(new Date().getFullYear());</script>
          ,All Right Reserved
        </div>
        <div className="icons">
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Usahaoptima"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
