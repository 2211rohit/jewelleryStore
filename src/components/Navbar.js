import React from "react";
import { Card } from "react-bootstrap";

export default function Navbar(props) {
  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <Card.Body className="text-muted">
        Welcome to Tanishq Store
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Card.Link>
          <i className="fa fa-home" aria-hidden="true">
            {" "}
            Home
          </i>{" "}
        </Card.Link>
        <Card.Link>
          <i className="fa fa-info-circle" aria-hidden="true">
            {" "}
            About
          </i>
        </Card.Link>
        <Card.Link>
          <i className="fa fa-phone-square" aria-hidden="true">
            {" "}
            Contact Us
          </i>
        </Card.Link>
      </Card.Body>
    </nav>
  );
}
