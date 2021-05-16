import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from "pages/landing"
import About from "pages/about"

function App() {
  return (
    <div className="App">
      <div className="container-fluid p-0">
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
