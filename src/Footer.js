

import {Row,Col} from 'react-bootstrap';
import './Project.css';

const Footer=()=>{
         return(
         	<>
         	<Row>
         	<Col xs={3}>
         	<div>
         	<p className="bold_text">Categories</p>
         	<ul style={{listStyle:"none"}}>
            <li>Vegetables & Fruits</li>
            <li>Munchies</li>
            <li>Breakfast & Instant Food</li>
            <li>Bakery & Biscuits</li>
            <li>Atta, Rice & Dal</li>
            <li>Sauces & Spreads</li>
            <li>Paan Corner</li>
            <li>World Food</li>
            <li>Pharma & Wellness</li>
            <li>Home & Office</li>
            <li>Personal Care</li>
            <li>Beverages</li>
            <li>Beauty</li>
         	</ul>
         	</div>
         	</Col>
         	<Col xs={3} style={{paddingTop:"2.3rem"}}>
         	<div>
         	<ul style={{listStyle:"none"}}>
            <li>Dairy, Bread & Eggs</li>
            <li>Cold Drinks & Juices</li>
            <li>Cold Drinks & Juices</li>
            <li>Sweet Tooth</li>
            <li>Masala, Oil & More</li>
            <li>Chicken, Meat & Fish</li>
            <li>Organic & Gourmet</li>
            <li>Baby Care</li>
            <li>Cleaning Essentials</li>
            <li>Sports & Toys</li>
            <li>Pet Care</li>
            <li>Household Needs</li>
            <li>Pharmacy by Apollo</li>
         	</ul>
         	</div>
         	</Col>
         	<Col xs={6}>
         	<p className="bold_text">Useful Links</p>
         	<div>
         	    <Row>
                   <Col xs={3}>
			            <ul style={{listStyle:"none"}}>
			            <li>About</li>
			            <li>Careers</li>
			            <li>Blog</li>
			            <li>Press</li>
			            <li>Lead</li>
			            <li>Value</li>
			            </ul>
                   </Col>
                   <Col xs={3}>
			            <ul style={{listStyle:"none"}}>
			            <li>Privacy</li>
			            <li>Terms</li>
			            <li>FAQs</li>
			            <li>Security</li>
			            <li>Mobile</li>
			            <li>Contact</li>
			            </ul>
                   </Col>
                   <Col xs={3}>
			            <ul style={{listStyle:"none"}}>
			            <li>Partner</li>
			            <li>Express</li>
			            <li>Local</li>
			            <li>Spotlight</li>
			            <li>Warehouse</li>
			            <li>Deliver</li>
			            </ul>
                   </Col>
         	    </Row>
         	</div>
         	</Col>
         	</Row>
        <div>
        <p className="bold_text">Brands</p>
        <ul style={{listStyle:"none"}} >
		    <li>grofers Happy Day    </li>
			<li>  grofers Happy Home  </li>
		    <li>   grofers Mother's Choice  </li>
			<li>	g Fresh  </li>   
			<li>	O'range   </li>
			<li>    Savemore   </li>
			<li>	24 Mantra   </li>
			<li>	Aashirvaad  </li>
			<li>	Act II    </li>
			<li>	Amul     </li>
			<li>	Axe      </li>
			<li>	Bambino  </li>

        </ul>
        </div>
        </>
         	);
}

export default Footer;