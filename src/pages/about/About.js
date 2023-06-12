import React from "react";
import logo from "../../assets/logo.png";
import appStyles from "../../App.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";


const About = () => {
  return (
    <Container className='bg-white col-md-8'>
      <Row className="p-4 justify-content-md-center">
        <Col className="text-center">
          <Container>
          
         <Image src={logo} className={appStyles.Logo} alt="logo" height="40" />
            <h1 className="mb-3">About Us</h1>
            <p className="text-left">
              Childhood Memories serves as a social media platform where you can post about your childhood memories. Think of this website as Twitter, but with childhood instead.<br /></p>
              <h3 className="mb-3">Why childhood memories are important?</h3>
               <p className="text-left">
                Memories are a vital component of our bodies. They shape our personality as all our knowledge and past experiences are stored there. All of us have memories, both good and bad.In my opinion, one’s childhood memories are the dearest to anyone. They help in keeping the child in you alive. No matter how old we get, there is always a child within each one of us. He/She comes out at different times. Let's remember and share some of our sweet memories with others!!!<br /></p>
            <h3 className="mb-3">How to get started to access the functionality of this website?</h3>
            <p className="text-left">
                    Sign up with a new account (no email address required for
              those who don't want to compromise personal data). If you already have an account, Sign in instead.
                   </p>
                   <h3 className="mb-3">Features of this website.</h3>
            <p className="text-left">
                <ul>
                    <li>
                    Once you're logged in, You can like other user's posts, make comments, follow other users,and like comments! 
                    </li>
                    <li>
                    Once you're logged in, you have the option to create a post. Add a photo to your post, a title, and some content. There are no character limits for content, but the title will have a limit of 255 characters.
                    </li>
                    <li>You can keep track of posts you liked in the "liked" link in the navigation bar.</li>
              <li>
              Once you start following users, their posts will show up in the "Feed" link in  navigation bar.
              </li>
              <li>You can also manage your profile and change your
              profile photo if you wish.</li>
              <li>Most importantly, you have the freedom
              to delete your posts/comments and edit your posts/comments as
              well, so don't sweat it if you wrote something really
              embarrassing!</li>
                </ul>
             
            </p>
            <p>So what are you waiting for? <br/> Let's share your Childhood Memories with us!</p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default About;