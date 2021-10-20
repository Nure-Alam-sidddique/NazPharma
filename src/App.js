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
import ProductDetails from "./component/ProductDetails/ProductDetails";
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
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route exact path="/service" component={Service}/>  
            <Route path='/service/:productId' component={ProductDetails}/>
            <Route path="/shop" component={Shop}/>
            <PrivateRoute path="/blog">
              <Blog></Blog>
            </PrivateRoute>
            <Route path="/contact" component={Contact}/>
            {/* <Route path="/productDetails" component={ProductDetails}/> */}
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="*" component={PageNotFound}/>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
