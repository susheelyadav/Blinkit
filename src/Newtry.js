import {Col,Row,InputGroup,FormControl,Button,useState} from 'react-bootstrap';
import './Project.css';
import App1 from './Modal.js';
import Offcanvs from './Offcanvas';

const Newtry=()=>
{
  return(
    <container fluid >
    <Row style={{backgroundColor:"#f8f8ff"}}>
    <Col xs = {2} >
    <div className="my-1 mx-3" className="deco">blink<code className="deco1">it</code></div>
    </Col>
    <Col xs = {2} className="mt-4 delivery" ><p>Delivery in 10 Minute</p>
    </Col>
    <Col xs = {6}>
     <InputGroup className="my-3" >
     <InputGroup.Text id="basic-addon1"><i className="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
     <FormControl
      placeholder="Search for Products"
      aria-label="Username"
      aria-describedby="basic-addon1"
      />
     </InputGroup>
    </Col>
    <Col xs={1}>
     <App1/>
    </Col>
    <Col xs = {1}>
    {/*<Button variant="light" className="m-3">Login</Button>*/}
    <Button variant="success"><i class="fa fa-shopping-cart" aria-hidden="true"></i>My cart</Button>
    </Col>
    </Row>
    </container>
    );
}

export default Newtry;