import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import About from "./component/About/About";
import Career from "./component/Career/Career";
import Contact from "./component/Contact/Contact";
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from "./component/Login/Login";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import Products from "./component/Products/Products";
import Register from "./component/Register/Register";
import Review from "./component/Review/Review";
import AuthProvider from "./context/AuthProvider";
import "./index.css";
function App() {
  return (
    <div className="App h-auto">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route exact path="/product" component={Products}/>  
            <Route path='/product/:productId' component={ProductDetails}/>
            <PrivateRoute path="/career">
              <Career></Career>
           </PrivateRoute>
            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/productDetails" component={ProductDetails}/>
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
