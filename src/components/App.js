import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import { Container } from 'react-bootstrap';
import ForgotPassword from './forgotPassword';
import UpdateProfile from './UpdateProfile';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }} >
      <div className="w-100" styles={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
