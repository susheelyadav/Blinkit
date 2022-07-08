import {Container,Row,Col,Card,Button,CContainer} from 'react-bootstrap';
import './Project.css';

const Movingcard=()=>{

	return(
		<>
		<div style={{paddingTop:"2rem"}} className="card_col d-flex px-2 mx-auto  card_div ">
			<Card className="card_Style"  >
				  <Card.Img variant="top" src="movingcard/10_minute_delivery.png"  className="card_img mx-auto" />
				  <Card.Body>
				    <Card.Title style={{textAlign:"center"}} >Superfast Delivery</Card.Title>
				    <Card.Text style={{textAlign:"justify"}}>
				      Get your order delivered to your doorstep at the earliest from dark stores near you.
				    </Card.Text>
				  </Card.Body>
			</Card>
		    
		    <Card className="card_Style">
				  <Card.Img variant="top" src="movingcard/Best_Prices_Offers.png" className="card_img mx-auto" />
				  <Card.Body>
				    <Card.Title style={{textAlign:"center"}}>Best Prices & Offers</Card.Title>
				    <Card.Text style={{textAlign:"justify"}}>
				    Cheaper prices than your local supermarket, great cashback offers to top it off.
				      </Card.Text>
				  </Card.Body>
			</Card>
		 
		    <Card className="card_Style">
				  <Card.Img variant="top" src="movingcard/Easy_Returns_Refund.png"  className="card_img mx-auto" />
				  <Card.Body>
				    <Card.Title style={{textAlign:"center"}} >Wide Assortment</Card.Title>
				    <Card.Text>
				    Choose from 5000+ products across food, personal care, household & other categories
				       </Card.Text>
				  </Card.Body>
			</Card>
		    
		    
            <Card className="card_Style">
				  <Card.Img variant="top" src="movingcard/Wide_Assortment.png"  className="card_img mx-auto" />
				  <Card.Body>
				    <Card.Title style={{textAlign:"center"}} >Easy Returns/Refund</Card.Title>
				    <Card.Text style={{textAlign:"justify"}}>
				    Not satisfied with a product? Return it at the doorstep & get a refund within hours.
				     </Card.Text>
				  </Card.Body>
			</Card>
		   
		  
		</div>
		<div style={{padding:"2.2rem"}}>
		“Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
		</div>
		<hr/>
		</>
		);
}

export default Movingcard;