import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Signup from './Components/Signup';
import Electronics from './services/Electronics';
import FruitsandVegs from './services/FruitsandVegs';
import Furniture from './services/Furniture';
import Grocery from './services/Grocery';
import { Switch, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/products/grocery' component={Grocery} />
        <Route exact path='/products/fruitsandvegs' component={FruitsandVegs} />
        <Route exact path='/products/furniture' component={Furniture} />
        <Route exact path='/products/electronics' component={Electronics} />
      </Switch>
    </>
  );
}
export default App;
