import './App.scss';
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import Navigation from './components/Navigation';
import Illustrations from './components/Illustrations';
import About from './components/About';
import Contact from './components/Contact';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Navigation />
        <Illustrations />
        <About />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
