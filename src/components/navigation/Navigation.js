import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  NavLink,
} from "reactstrap";
// core components
import ContactModal from "../contact/ContactModal";
import PortFolio from "../portfolio/Portfolio";

function WhiteNavbar() {
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  });
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
                <NavLink tag={Link} to="/about">
                  Styling <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem className="active">
                <NavLink tag={Link} to="/contact">
                  Blawg <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem>
                {/* <Button tag={Link} to="/signup" color="#fff">
                  Contact
                </Button> */}
                <ContactModal />
              </NavItem>
              <NavItem>
                <PortFolio />
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default WhiteNavbar;
