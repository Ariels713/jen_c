import React, { useState, useEffect, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase/firebase";
import { AuthContext } from "../authProvider/AuthProvider";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  NavLink,
  Button,
} from "reactstrap";
// core components
import ContactModal from "../contact/ContactModal";

import PortfolioLogin from "../portfolio/PortfolioLogin";

function Navigation({ history }) {
  const [bodyClick, setBodyClick] = useState(false);
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [loggedOn, setLoggedOn] = useState(false);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  });

  const logOutHandler = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        setLoggedOn(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Navbar
        className="fixed-top"
        style={{ boxShadow: "none" }}
        expand="lg"
        id="navbar-main"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/" tag={Link}>
              JENNY LOGO
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>

          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLink tag={Link} to="/interiors">
                  Interiors <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem className="active">
                <NavLink tag={Link} to="/production">
                  Production <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem className="active">
                <NavLink tag={Link} to="/styling">
                  Styling <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem className="active">
                <NavLink tag={Link} to="/blawg">
                  Blawg <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <ContactModal />
              </NavItem>
              {currentUser ? (
                <>
                  <Button
                    className="btn-round"
                    color="danger"
                    tag={Link}
                    to="/portfolioPage"
                  >
                    Portfolio!
                  </Button>
                  <Button
                    className="btn-link"
                    color="black"
                    onClick={logOutHandler}
                  >
                    Log out
                  </Button>
                </>
              ) : (
                <NavItem>
                  <PortfolioLogin />
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
