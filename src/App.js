import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from "./component/Login/Login";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Register from "./component/Register/Register";
import Service from "./component/Service/Service";
import Shop from "./component/Shop/Shop";
import AuthProvider from "./context/AuthProvider";
import "./index.css";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/service">
              <Service></Service>
            </Route>
            <Route path="/shop/:id">
              <Shop></Shop>
            </Route>
            <PrivateRoute path="/blog">
              <Blog></Blog>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
