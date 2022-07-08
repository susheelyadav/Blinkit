import {Button,Navbar,Modal,Container,Row,Nav,NavDropdown,FormControl,Form,offcanvas,render} from 'react-bootstrap';
import {useState} from "react";
import Offcanvas from './Offcanvas'

const Navbar1=()=>
{

{/*modal*/}
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


	return(
	  <>
     {/*modal*/}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Phone Number verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter your number to login/sign up</Form.Label>
              <Form.Control
                type="mobile"
                placeholder="+91"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button   variant="primary" onClick={handleClose}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>

        {/*Nav bar*/}

      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="deco">blink<code className="deco1">it</code></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{fontWeight:"bold",color:"black"}}>Delivery in 10 Minute</Nav.Link>
          </Nav>
          <Form className="d-flex space">
            <FormControl
              type="search"
              placeholder="Search for Products"
              className="me-2"
              aria-label="Search"
            />  
          </Form>
          <div className="d-flex margin-left">
          {/*<Button variant="success" >login</Button>*/}

          <Button variant="success" className="login_button" onClick={handleShow}>
          Login
          </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
		);
}

export default Navbar1;