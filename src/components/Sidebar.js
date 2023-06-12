import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
// import styles from "../styles/NavBar.module.css";
import styles from "../styles/Sidebar.module.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    // <div style={{ display: 'flex', height: '100vh', margin:'70px 0 70px 0', overflow: 'scroll initial', fixed:'left' }}>
    <div className ={styles.SideBar}> 
      <CDBSidebar textColor="#fff" backgroundColor="orange">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="50" />
          </Navbar.Brand></NavLink>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/about" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="sticky-note">About</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/posts/create" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus">Add Post</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/feed" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="feed">Feed</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/liked" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="heart">Liked</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
           <NavLink className={styles.NavLink} to="/" >
            <i className="fas fa-sign-out-alt"></i>Sign out
          </NavLink>
        {/* <a href="/"  className="text-decoration-none" style={{ color: 'inherit' }}>
        <i className="fas fa-sign-out-alt"></i>Sign Out</a> */}
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;