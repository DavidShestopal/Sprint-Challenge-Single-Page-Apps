import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, CardTitle, CardSubtitle } from 'reactstrap';

export default function CharacterCard(props) {
  return (
    <>
      <Col xs="6" md="4" xl="4">
        <Card>
          <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardSubtitle>{props.species}</CardSubtitle>
            <CardBody>
              <img className="card-img" src={props.image} alt="character" />
            </CardBody>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}
