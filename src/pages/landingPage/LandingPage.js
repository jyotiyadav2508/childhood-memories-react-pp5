import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import landingImage from "../assets/landing-img.jpg";
import styles from "../styles/Button.module.css";
import styles from "../styles/LandingPage.module.css";

/** 
 * Landing page with information about the App
 * Prompts user to sign up/sign in
 * Gives instructions on how to start
*/
const LandingPage = () => {
    return (
        <>
            <Container className="fluid">
                <Row className="text-center mt-5" lg={2} md={1}>
                    <Col lg={6} sm={12}>
                        <img
                            src={landingImage}
                            className={styles.LandingImage}
                            alt="Image with quotes about memory"
                        />
                    </Col>
                    <Col lg={6} sm={12}>
                        <div className="text-center mt-3" >
                            <h4 className="mb-3">Let's go back to old days!</h4>

                            <h5>  It can be said that the inner child is kept alive by childhood memories. A childhood memory definitely does not define anyone but they play a pivotal role in one’s life.
                            </h5>
                            <br />
                            
                            <p><strong>Let's share the incomparable childhood memories!!</strong></p>
                            <Link to="/about">
                                <Button
                                    className={`${styles.Button} mx-3 mb-2`}
                                >
                                    Know More
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button
                                    className={`${styles.Button} mx-3 mb-2`}
                                >
                                    New here? Join us!
                                </Button>
                            </Link>
                            <Link to="/Signin">
                                <Button className={`${styles.Button} mb-2`}>
                                    Member? Sign In and Start!
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Container>
                    <footer className={`${styles.footer}`}>
                        <div className="text-center">
                            <p>For Education Purposes only! || Creator: Roshna Vakkeel</p>
                            <a
                                href="https://github.com/RoshnaVakkeel/be-inspired-pp5-ci"
                                aria-label="Check the website GitHub page"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/roshna-vakkeel/"
                                aria-label="Visit me on LinkedIn (opens in new tab)"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin" />
                            </a>
                        </div>
                    </footer>
                </Container>
            </Container>
        </>
    );
};

export default LandingPage