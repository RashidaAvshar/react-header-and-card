import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import {data} from "./mockdata";
import Button from "./components/Button.jsx";
import Counter from "./components/Counter.jsx";


function App() {
  return (
    <div className="container">
      <Header/>
      <div className="product-section">
      {
        data.map((item)=>(
          <Card 
          img={item.image} 
          title={item.title} 
          description={item.description} 
          price={item.price} 
          
          />
        ))
      };  
        </div> 
        {/* <div className="button">
          <Button title="+" className="primary"/>  
        <p>0</p>
        <Button title="-" className="secondary"/>  
        </div> */}
        <Counter/>
        {/* <Button/> */}

    </div>
  );
};

export default App;
