import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function NavigationBar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="nav-wrapper">
      <Navbar className="nav-container" collapseOnSelect expand="lg">
        <Navbar.Brand href="\">
          <img
            className="logo"
            src="https://lh4.googleusercontent.com/proxy/mQGGXxnuewJ3m_K8fO2G8D1C6wf9pQ4h2vlMIRwfdK4ZsZVnHtnWNHwJz0-X0zYo-pA3RsvjjjTpC3VdMElszP1E7TwEqu5w4l-C=w1200-h630-p-k-no-nu"
            alt="logo"
            srcSet=""
          />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          {isActive ? (
            <Nav.Link className="nav-label" href="/account">
              Account
            </Nav.Link>
          ) : (
            <Nav.Link className="nav-label" href="/registration">
              Register
            </Nav.Link>
          )}

          {isActive ? (
            <Nav.Link className="nav-label" onClick={() => {}} href="/">
              LogOut
            </Nav.Link>
          ) : (
            <Nav.Link className="nav-label" onClick={() => {}} href="/">
              LogIn
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
}
