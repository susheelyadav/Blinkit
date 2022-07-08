
import {Col,Row,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Smallimage=()=>{

	return(
		<div className="container-fluid" className="px-5">
        <Row >
		    <Col xs={1} className= "smallspacing"><Link to = "/Fruits"><img src="smallimage/Slice-4.png" width="120rem"/></Link></Col>
		    <Col xs={1} className="smallspacing" ><img src="smallimage/Slice-1.png" width="120rem"/></Col>
		    <Col xs={1} className="smallspacing"> <img src="smallimage/Slice-10_0.png" width="120rem"/></Col>
		    <Col xs={1} className="smallspacing"> <img src="smallimage/Slice-2_0.png" width="120rem"/></Col>
		    <Col xs={1} className="smallspacing"> <img src="smallimage/Slice-3.png" width="120rem"/></Col>
		    <Col xs={1} className="smallspacing"> <img src="smallimage/Slice-5.png" width="120rem"/></Col>
		    <Col xs={1} className="smallspacing"> <img src="smallimage/Slice-6.png" width="120rem"/></Col>
		    <Col xs={1} className="smallspacing"> <img src="smallimage/Slice-7.png" width="120rem"/></Col>
		    <Col xs={1} className="smallspacing"> <img src="smallimage/Slice-8.png" width="120rem"/></Col>
		    <Col xs={1} className="smallspacing"> <img src="smallimage/Slice-9.png" width="120rem"/></Col>
		</Row>
		<Row>
		    <Col xs={1} className= "smallspacing"><img src="smallimage2/Slice-12_0.png" width="120rem"/></Col>
		    <Col xs={1} className="smallspacing" ><img src="smallimage2/Slice-13.png" width="120rem"/></Col>
		    <Col xs={1} className="smallspacing"> <img src="smallimage2/Slice-14.png" width="120rem"/></Col>
		    <Col xs={1} className="smallspacing"> <img src="smallimage2/Slice-15.png" width="120rem"/></Col>
		    <Col xs={1} className="smallspacing"> <img src="smallimage2/Slice-16.png" width="120rem"/></Col>
		    <Col xs={1} className="smallspacing"> <img src="smallimage2/Slice-16_0.png" width="120rem"/></Col>
		    <Col xs={1} className="smallspacing"> <img src="smallimage2/Slice-17.png" width="120rem"/></Col>
		    <Col xs={1} className="smallspacing"> <img src="smallimage2/Slice-18.png" width="120rem"/></Col>
		    <Col xs={1} className="smallspacing"> <img src="smallimage2/Slice-19_0.png" width="120rem"/></Col>
		    <Col xs={1} className="smallspacing"> <img src="smallimage2/Slice-20_0.png" width="120rem"/></Col>		
		 </Row>
		</div>


		);
}

export default Smallimage;