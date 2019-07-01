import React from 'react';
import { Col, ListGroup, ListGroupItem } from 'reactstrap';

class List extends React.Component {
  onClickfn() {
    this.props.id = 0
  }
  render() {
    return (
      <Col md="3">
        <ListGroup>
          {
            this.props.data.map((item, key) =>
<<<<<<< HEAD
              <ListGroupItem key={ key } tag="a" href="#" className={ this.props.id === key ? 'active' : '' } onClick={ this.onClickfn } action>{ item.name }</ListGroupItem>
=======
              <ListGroupItem key={key} tag="a" href="#" className={ this.props.id === key ? 'active' : '' } onClick={ this.onClickfn } action>{ item.name }</ListGroupItem>
>>>>>>> development
            )
          }
        </ListGroup>
      </Col>
    )
  }
}

export default List