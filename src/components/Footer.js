import React from "react";
import { Card } from "react-bootstrap";

export default function Navbar(props) {
  return (
    <nav className="navbar fixed-bottom navbar-light bg-light">
      <Card.Body className="text-muted">
        <Card.Link>
          Terms of Use
        </Card.Link>
        <Card.Link>
          Privacy Policy
        </Card.Link>
        <Card.Link>
          Contact Us
        </Card.Link>
        <Card.Link>
          Sitemap
        </Card.Link>
        <Card.Link>
          <i className="fa fa-facebook"/>
        </Card.Link>
        <Card.Link>
          <i className="fa fa-instagram"/>
        </Card.Link>
        <Card.Link>
          <i className="fa fa-twitter"/>
        </Card.Link>
      </Card.Body>
    </nav>
  );
}
