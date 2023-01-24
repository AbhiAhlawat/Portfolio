import { Container, Row, Col } from "react-bootstrap";
import Linkedin from "../assets/img/linkedin.png";
import Instagram from "../assets/img/instagram.png";
import Github from "../assets/img/github.png";
import Logo from "../assets/img/logo-1.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p>
              <img src={Logo} alt="Logo" />
              <h3>Abhishek Ahlawat</h3>
            </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div
              className="social-icon"
              style={{ margin: "20px 10px 10px 10px" }}
            >
              <a href="https://www.linkedin.com/in/abhishek-ahlawat">
                <img src={Linkedin} alt="Linkedin" />
              </a>
              <a href="https://github.com/AbhiAhlawat" alt="github">
                <img src={Github} />
              </a>
              <a href="https://instagram.com/shek0109">
                <img src={Instagram} alt="Instagram" />
              </a>
            </div>
            <p>
              <a
                href="mailto:Abhiahlawat02@gmail.com"
                style={{ textDecoration: "none" }}
              >
                <h5 style={{ color: "whitesmoke" }}>abhiahlawat02@gmail.com</h5>
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
