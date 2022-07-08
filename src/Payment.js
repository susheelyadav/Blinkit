import './Project.css';
import {Row,Col,Container} from 'react-bootstrap';


const Payment=()=>{
	return(
      <>
         <p className="bold_text">Payment partners</p>
         <div className="px-3" >
          <Row>
          <Col xs={1} className="smallcardspacing" >
             <img src="payment/amex-fdda4b1.png" className="pay"/>
          </Col>
           <Col xs={1} className="smallcardspacing" >
             <img src="payment/bhim-upi-02aef45.png" className="pay"/>
          </Col>
           <Col xs={1} className="smallcardspacing" >
             <img src="payment/maestro-e164fe0.png" className="pay"/>
          </Col>
           <Col xs={1} className="smallcardspacing" >
             <img src="payment/mastercard-01e540b.png" className="pay"/>
          </Col>
           <Col xs={1} className="smallcardspacing" >
             <img src="payment/mobikwik-c96e507.png" className="pay"/>
          </Col>
           <Col xs={1} className="smallcardspacing">
             <img src="payment/paytm-b393728.png" className="pay"/>
          </Col>
           <Col xs={1} className="smallcardspacing" >
             <img src="payment/rupay-39478ad.png" className="pay"/>
          </Col>
           <Col xs={1} className="smallcardspacing" >
             <img src="payment/sodexo-82f2019.png" className="pay"/>
          </Col>
           <Col xs={1} className="smallcardspacing" >
             <img src="payment/visa-95f2100.png" className="pay"/>
          </Col>
          </Row>
         </div>
      </>

		);
}

export default Payment;