import {Card,Button,Col,Row,Container,CardGroup} from 'react-bootstrap';
import './fruit.css';

const Fruits =()=>{
	return(
		<>
  <CardGroup>
  <Card>
    <Card.Img variant="top" src="fruits/357316a.jpg" className="fruitimage"  />
    <Card.Body>
      <Card.Title>Green Pumpkin</Card.Title>
      <Card.Text>
        1 kg <br/>
        <b>₹34</b><Button variant="outline-success" style={{marginLeft:"10em"}}>ADD <sup>+</sup></Button>{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="fruits/391306a.jpg" className="fruitimage"  />
    <Card.Body>
      <Card.Title>Onion</Card.Title>
      <Card.Text>
        1 kg <br/>
        <b>₹29</b><Button variant="outline-success" style={{marginLeft:"10em"}}>ADD <sup>+</sup></Button>{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="fruits/445675a.jpg"  className="fruitimage" />
    <Card.Body>
      <Card.Title>Tomato</Card.Title>
      <Card.Text>
        1 kg <br/>
        <b>₹40</b><Button variant="outline-success" style={{marginLeft:"10em"}}>ADD <sup>+</sup></Button>{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="fruits/10088a.jpg" className="fruitimage"   />
    <Card.Body>
      <Card.Title>Cucumber</Card.Title>
      <Card.Text>
        1 kg <br/>
        <b>₹30</b><Button variant="outline-success" style={{marginLeft:"10em"}}>ADD <sup>+</sup></Button>{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="fruits/469737a.jpg" className="fruitimage"   />
    <Card.Body>
      <Card.Title>Red Potato</Card.Title>
      <Card.Text>
        1 kg <br/>
        <b>₹39</b><Button variant="outline-success" style={{marginLeft:"10em"}}>ADD <sup>+</sup></Button>{' '}
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>


<CardGroup>
  <Card>
    <Card.Img variant="top" src="fruits/285131a.jpg" className="fruitimage"   />
    <Card.Body>
      <Card.Title>Langra Mango</Card.Title>
      <Card.Text>
        1 kg <br/>
        <b>₹90</b><Button variant="outline-success" style={{marginLeft:"10em"}}>ADD <sup>+</sup></Button>{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="fruits/365455a.jpg" className="fruitimage"   />
    <Card.Body>
      <Card.Title>Muskmelon(Kharbuja)</Card.Title>
      <Card.Text>
        1 kg <br/>
        <b>₹70</b><Button variant="outline-success" style={{marginLeft:"10em"}}>ADD <sup>+</sup></Button>{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="fruits/369752a.jpg" className="fruitimage"   />
    <Card.Body>
      <Card.Title>Watermelon</Card.Title>
      <Card.Text>
        1 piece (1.5kg-2.5kg) <br/>
        <b>₹61</b><Button variant="outline-success" style={{marginLeft:"10em"}}>ADD <sup>+</sup></Button>{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="fruits/ora.jpg" className="fruitimage"  />
    <Card.Body>
      <Card.Title>Orange</Card.Title>
      <Card.Text>
        3 pieces <br/>
        <b>₹81</b><Button variant="outline-success" style={{marginLeft:"10em"}}>ADD <sup>+</sup></Button>{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="fruits/221973a.jpg" className="fruitimage"   />
    <Card.Body>
      <Card.Title>Peach</Card.Title>
      <Card.Text>
        500 g <br/>
        <b>₹78</b><Button variant="outline-success" style={{marginLeft:"10em"}}>ADD <sup>+</sup></Button>{' '}
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
</>
		)
}

export default Fruits;