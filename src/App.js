import React, { useEffect, Suspense } from 'react'; //Suspense is for lazy loading
import { Route, Switch, withRouter, Redirect } from "react-router-dom";


// import components
import Layout from "./containers/Layout/Layout";

// import statefull components
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Logout from "./containers/Auth/Logout/Logout";

// connect Redux
import { connect } from "react-redux";
import * as actions from "./store/actions/index";

// import async Components
const Checkout = React.lazy(() => {
  return import("./containers/Checkout/Checkout");
});

const Orders = React.lazy(() => {
  return import("./containers/Orders/Orders");
});

const Auth = React.lazy(() => {
  return import("./containers/Auth/Auth");
});

const app = (props) => {
  const { onAutoSignUp } = props;

  useEffect(() => {
    props.onAutoSignUp();
  }, [onAutoSignUp]);




  let routes = (
    <Switch>
      <Route path="/auth" render={(props) => <Auth {...props}  />} />
      <Route path="/" exact component={BurgerBuilder} />
      <Redirect to="/" /> 
    </Switch>

  );

  if (props.isAuthenticated) {
    routes = (<Switch>
      <Route path="/checkout" render={(props) => <Checkout {...props} />} />
      <Route path="/orders" render={(props) => <Orders {...props} />} />
      <Route path="/auth" render={(props) => <Auth {...props} />} />
      <Route path="/logout" component={Logout} />
      <Route path="/" exact component={BurgerBuilder} />
    </Switch>
    );
  };

  return (
    <div>
      <Layout>
        <Suspense fallback={<p> Loading ... </p>}>
          {routes}
        </Suspense>
      </Layout>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAutoSignUp: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(app)); // withRouter is needed, because with connect we break funcionality of our Router, withRouter fix it
