
import './Global.css';
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Profile from './containers/Profile/Profile';
import Home from './containers/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Switch>

          <Route path="/" exact component={Home}/>
          <Route path="/profile" exact component={Profile}/>

        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
