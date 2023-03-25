import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar
        variant="dark"
        bg="dark"
        expand="md"
        className={scrolled ? "scrolled" : ""}
      >
        <Container>
          <Navbar.Brand href="/">
            <i className="fa-solid fa-house-laptop"></i> MB
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#work"
              className={
                activeLink === "work" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("work")}
            >
              Work
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "project" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("project")}
            >
              Projects
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/mitalibhandari">
                <i className="fa-brands fa-github fa-2x"></i>
              </a>
              <a href="https://www.linkedin.com/in/mitali08/">
                <i className="fa-brands fa-linkedin fa-2x"></i>
              </a>
            </div>

            <HashLink to="#connect">
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </HashLink>
          </span>
        </Container>
      </Navbar>
    </Router>
  );
}

export default Header;
