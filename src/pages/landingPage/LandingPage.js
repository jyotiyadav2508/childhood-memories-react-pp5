import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import landingImage from "../../assets/landingPage-bg.jpg";
import landingImage from "../../assets/landing-image.jpg";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/LandingPage.module.css";

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
                            alt="Pic with quotes about childhood memory"
                        />
                    </Col>
                    <Col lg={6} sm={12}>
                        <div className="text-center mt-3" >
                            <h1 className="mb-3">Let's go back to old days!</h1>

                            <p>  It can be said that the inner child is kept alive by childhood memories. A childhood memory definitely does not define anyone but they play a pivotal role in one’s life. There is always a child inside every person. It may come out all of a sudden at any stage in life. 
                            </p>
                            <br />
                            
                            <h4>Let us relive our childhood memories and share them!!!</h4><br />
                            <Link to="/about">
                                <Button
                                    className={`${btnStyles.Button} ${btnStyles.Bright} mb-2 py-2`}
                                >
                                    Know More
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button
                                    className={`${btnStyles.Button} ${btnStyles.Bright} mx-3 mb-2 py-2`}
                                >
                                    New here? Sign Up!
                                </Button>
                            </Link>
                            <Link to="/Signin">
                                <Button className={`${btnStyles.Button} ${btnStyles.Bright} mb-2 py-2`}>
                                    Member? Sign In and Start!
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default LandingPage