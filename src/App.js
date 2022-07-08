import Navbar1 from './Navbar';
// import Newtry from './Newtry';
import Mainbody from './Mainbody';
import Smallimage from './Smallimage';
import Newcarousel from './Carousel';
import Movingcard from './Movingcardtry';
import Footer from './Footer';
import Payment from './Payment';
import Movingimage from './Movingimage.js';
import Fruits from './option/Fruits';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";



function App() {
  return (
    <>
  
    
    <Router>
          <Navbar1/>
          <Mainbody/>
           <Routes>
           <Route exact path="/" element = {<Smallimage/>}/>
           <Route path="/Fruits" element ={<Fruits/>}/>
           </Routes>
           <Newcarousel/>
          <Movingcard/>
          <Footer/>
          <Payment/>
    </Router>
    </>


  );
}

export default App;
