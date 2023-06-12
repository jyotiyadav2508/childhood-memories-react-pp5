import React from "react";
import { useCurrentUser, useSetCurrentUser } from "./contexts/CurrentUserContext";
// import styles from "../../styles/PostCreateEditForm.module.css";
import logo from "./assets/logo.png";
import { NavLink } from "react-router-dom";
import styles from "./styles/NavBar.module.css";
import axios from "axios";
import Avatar from "./components/Avatar";
import { Navbar, Container } from "react-bootstrap";


const Header = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const handleSignOut = async () => {
        try {
          await axios.post("dj-rest-auth/logout/");
          setCurrentUser(null);
        } catch (err) {
          console.log(err);
        }
      };
    return(
        <Navbar fixed="top" className={styles.NavBar}>
        <Container >
            <NavLink to="/">
            <img src={logo} alt="logo" height="60" />
            </NavLink>
            <NavLink
            className={`${styles.Title} ${styles.NavLink}`}
            to={`/profiles/${currentUser?.profile_id}`}
          >
            <Avatar src={currentUser?.profile_image}  height={40} />
             Welcome  {currentUser?.username}
          </NavLink>
         <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
            <i className="fas fa-sign-out-alt"></i>Sign out
          </NavLink>
         </Container>
         </Navbar>
        
    );
};
    

//   <div className="header">
//     <img src={logo} alt="logo" height="60" />
//     <h3 className={`${styles.Title} mt-3`}>Welcome </h3>
   
//   </div>

export default Header;