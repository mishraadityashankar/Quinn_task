import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";

import Tiles from './Components/Tiles';
import Expanded from './Components/Expanded';

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route path="/" exact component={Tiles}/>
          <Route path="/view"  component={Expanded}/>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
