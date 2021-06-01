import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from "pages/landing"
import About from "pages/about"
import News from "pages/news"
import Contact from "pages/contacts"
import Donate from "pages/donate"

function App() {
  return (
    <div className="App">
      <div className="container-fluid p-0">
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route path="/news" component={News} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/donate" component={Donate} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
