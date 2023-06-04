import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";


/**
 * Returns the navigation bar.
 * Codes credit: CI's Moments walkthrough - Modified to fit the features
 */
const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const { expanded, setExpanded, ref } = useClickOutsideToggle();

     /**
   * Handles user logout
   * Removes saved current user
   * Redirects to the Homepage
   */
  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };


    const addPostIcon = (
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to="/posts/create"
        >
          <i className="far fa-plus-square"></i>Add post
        </NavLink>
      );
       /**
   *  Displays current username with its
   * avatar in the navbar
     
   */
      const loggedInIcons = (
        <>
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/feed"
          >
            <i className="fas fa-stream"></i>Feed
          </NavLink>
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/liked"
          >
            <i className="fas fa-heart"></i>Liked
          </NavLink>
          <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
            <i className="fas fa-sign-out-alt"></i>Sign out
          </NavLink>
          <NavLink
            className={styles.NavLink}
            to={`/profiles/${currentUser?.profile_id}`}
          >
            <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
          </NavLink>
        </>
      );

    // const loggedInIcons = <>{currentUser?.username}</>;
    const loggedOutIcons = (
    <>
    <NavLink className={styles.NavLink}
              activeClassName={styles.Active}
              to="/signin"><i className='fas fa-sign-in-alt'></i>Sign In</NavLink>
      <NavLink className={styles.NavLink}
              activeClassName={styles.Active}
              to="/signup"><i className='fas fa-user-plus'></i>Sign Up</NavLink>
                 </>
  );

    return (
      <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
        <Container>
            <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="60" />
          </Navbar.Brand></NavLink>
          {currentUser && addPostIcon}
          <Navbar.Toggle 
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto text-left">
      <NavLink exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to ="/"><i className='fas fa-home'></i>Home</NavLink>
     {currentUser ? loggedInIcons : loggedOutIcons} 
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default NavBar