import React, { useEffect } from "react";
import  "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



const promise = loadStripe(
  "pk_test_51IREwGIy94oXaZM985nUA6zog769w94fF0GLMikKXmwPHRpUbrNwylAfKSRFEn8YfcmSKUiIq1S5RtkHyKn2AGpv00slh7PvXa"
);


function App() {
      const [{}, dispatch] = useStateValue();
      
      useEffect(() => {
        // will only run once when the app component loads...
       //acts as listener which keeps track of the user(who has logged in)-Navneet
        auth.onAuthStateChanged((authUser) => {
          console.log("THE USER IS >>> ", authUser);

          if (authUser) {
            // the user just logged in / the user was logged in

            dispatch({
              type: "SET_USER",
              user: authUser,
            });
          } else {
            // the user is logged out
            dispatch({
              type: "SET_USER",
              user: null,
            });
          }
        });
      }, []);

    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/orders">
              <Header />
              <Orders />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>

            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default App;
