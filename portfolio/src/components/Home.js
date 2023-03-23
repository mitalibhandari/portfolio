import { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import myImg from "../assets/img/my_pic.jpg";

function Banner() {
  const [loopNum, setloopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = [
    "Full Stack Engineer",
    "Back End Engineer",
    "Front End Engineer",
  ];
  const [text, setText] = useState("");
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setloopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>&#128075;{`Hi, I'm Mitali Bhandari`}</h1>
                  <h2>
                    <span className="wrap">{text}</span>
                  </h2>
                  <p>
                    I am passionate about learning and building software that
                    creates an impact.
                  </p>
                  <Button
                    className="banner-btn"
                    href="/#connect"
                    onClick={() => console.log("connect")}
                  >
                    Let's connect <i class="fa-solid fa-circle-arrow-right"></i>
                  </Button>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={myImg} alt="Header Img" width="400" height="500"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
