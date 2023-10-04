import React from 'react';
import { Card, Button, Carousel, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faGasPump, faGaugeMed, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './CarCard.css';

const CarCard = (props) => {
  return (
    <>
      <Row>
        {props.item.map((car) => (
          <Col key={car.id} md={4} style={{ marginBottom: '20px', marginTop: '20px', marginLeft: '0' }}>
            <Card style={{ width: '100%', padding: '12px', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', background: '#f0f4fb' }}>
              <Carousel style={{ maxWidth: '100%', maxHeight: '300px' }}>
                {Object.values(car.Images).map((imageUrl, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={imageUrl}
                      alt={`Image ${index + 1}`}
                      style={{ objectFit: 'cover', height: '100%', borderRadius: '20px' }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Row style={{marginTop: '10px',}}>
                  <Col xs={9}>
                    <Card.Title className="text-left">{car.Name}</Card.Title>
                  </Col>
                  <Col xs={3} className="text-right">
                    <Card.Text style={{ fontSize: '12px', borderRadius: '20px', border: '1px dashed #bfdcf6', textAlign: 'center' }}>{car.Year}</Card.Text>
                  </Col>
                </Row>
                <Row style={{marginTop: '10px',}}>
                  <Col xs={6}>
                    <Card.Text className='cardtext'>
                      <FontAwesomeIcon icon={faUserGroup} size="xs" color='#4999ed'/> {car.Seats} People</Card.Text>
                  </Col>
                  <Col xs={6} >
                    <Card.Text className='cardtext' ><FontAwesomeIcon icon={faGasPump} size="xs" color='#4999ed'/> {car.Engine}</Card.Text>
                  </Col>
                </Row>
                <Row style={{marginTop: '10px',marginBottom:'10px'}}>
                  <Col xs={6} >
                    <Card.Text  className='cardtext'><FontAwesomeIcon icon={faGaugeMed} size="xs" color='#4999ed'/> {car.MPG}</Card.Text>
                  </Col>
                  <Col xs={6} >
                    <Card.Text className='cardtext'><FontAwesomeIcon icon={faCar} size="xs" color='#4999ed' /> {car.Transmission}</Card.Text>
                  </Col>
                </Row>
                <Row className="justify-content-between align-items-center mr-2">
                  <hr />
                  <Col xs={5}>
                    <Card.Text >${car.Price} <span className='cardtext'>/ Month</span></Card.Text>
                  </Col>
                  <Col xs="auto">
                  <Button
                      style={{
                        background: '#daeafb',
                        border: '#f1f6fc',
                        color: '#4999ed',
                        borderRadius: '10px',
                        marginRight: '10px'
                      }}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </Button> 
                    <Button
                      style={{
                        background: '#4999ed',
                        border: '#f1f6fc',
                        color: '#fff',
                        borderRadius: '10px',
                      }}
                    >
                      Rent now
                    </Button>
                    </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CarCard;
