import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigationBar from './Navigation/NavigationBar';
import Home from './Example/Home';
import About from './Example/About';
import Users from './Example/Users';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>TODOS APP (CRUD)</p>
          
            {/* <MyComponent ></MyComponent> */}
            {/* <ListTodo /> */}
            <NavigationBar />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/app">
                <ListTodo />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
            </Switch>
            
        </header>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
      </div>
    </Router>
  );
}

export default App;
