import React from 'react';
import { Col, ListGroup, ListGroupItem } from 'reactstrap';
import data from '../data.json';

class List extends React.Component {
  render() {
    return (
      <Col md="3">
        <ListGroup>
          {
            data.map((item, key) =>
              <ListGroupItem key={key} tag="a" href="#" action>{item.name}</ListGroupItem>
            )
          }
        </ListGroup>
      </Col>
    )
  }
}

export default List