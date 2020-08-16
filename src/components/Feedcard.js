import React, { useState }from "react";
import { Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../css/feed.css";

export default function Feedcard(props) {
  const { feed } = props
  const [wishlised, setWishlised] = useState(false)
  const [inCart, setInCart] = useState(0)
  return (
    <>
      <Card className="">
        <Card.Header>
          <Card.Title>{feed.name}</Card.Title>
          <Card.Text>
            <b>Description:</b> {feed.full_description}
          </Card.Text>
          <Card.Text>
            <b>Collection:</b> {feed.collection}
          </Card.Text>
          <Card.Text>
            <b>Price:</b> {feed.price}
          </Card.Text>
        </Card.Header>
        <Image src={feed.image} thumbnail />
        <Card.Footer className="text-muted text-center">
          <Card.Body>
            <Card.Link className="text-muted text-center" onClick={() => setWishlised(!wishlised)}>
              Add to Wishlist:&nbsp;&nbsp;
              <i className="fa fa-heart" style={wishlised ? {color: 'red'} : {color: 'grey'}}> {feed.likes}</i>{" "}
            </Card.Link>
            <br/>
            <Card.Link className="text-muted text-center">
              Share:&nbsp;&nbsp;
              <i className="fa fa-share"/>
            </Card.Link>
            <br/>
            <Card.Link className="text-muted text-center">
              Add to Cart:&nbsp;&nbsp;<i className="fa fa-minus" onClick={() => inCart !== 0 ? setInCart(inCart - 1) : null}/>
              &nbsp;&nbsp;{inCart}&nbsp;&nbsp;
              <i className="fa fa-plus" onClick={() => setInCart(inCart + 1)}/>
            </Card.Link>
          </Card.Body>
        </Card.Footer>
      </Card>
    </>
  );
}
