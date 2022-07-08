
import {Carousel,Row,Col} from 'react-bootstrap';


const Movingimage=()=>{
	return(
  <Carousel className="py-4">
  <Carousel.Item>
   <Row>
   <Col>
    <img
      className="d-block w-100"
      src="movingimage/baby-products-new-users-pamp.jpg"
      alt="First slide"
    />
    </Col>
    <Col>
     <img
      className="d-block w-100"
      src="movingimage/baby-products-1.png"
      alt="First slide"
    />
    </Col>
    <Col>
     <img
      className="d-block w-100"
      src="movingimage/back-to-school-1.jpg"
      alt="First slide"
    />
    </Col>
    <Col>
     <img
      className="d-block w-100"
      src="movingimage/dry-fruits_zomato.jpg"
      alt="First slide"
    />
    </Col>
    </Row>
  </Carousel.Item>
  <Carousel.Item>
   <Row>
   <Col>
    <img
      className="d-block w-100"
      src="movingimage/healthliving-masthead-banner.jpg"
      alt="First slide"
    />
    </Col>
    <Col>
     <img
      className="d-block w-100"
      src="movingimage/kitchen-store.jpg"
      alt="First slide"
    />
    </Col>
    <Col>
     <img
      className="d-block w-100"
      src="movingimage/repllents_zomato.png"
      alt="First slide"
    />
    </Col>
    <Col>
     <img
      className="d-block w-100"
      src="movingimage/kids-zone_zomato.jpg"
      alt="First slide"
    />
    </Col>
    </Row>
  </Carousel.Item>
</Carousel>
		)
}

export default Movingimage;