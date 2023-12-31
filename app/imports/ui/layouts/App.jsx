import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import LoadingSpinner from '../components/LoadingSpinner';
import TopMenu from '../components/TopMenu';
import ListVendors from '../pages/ListVendors';
import Community from '../pages/Community';
import ListRecipes from '../pages/ListRecipes';
import Cookbook from '../pages/Cookbook';
import AddRecipe from '../pages/AddRecipe';
import EditRecipe from '../pages/EditRecipe';
import Stores from '../pages/Stores';
import EditStore from '../pages/EditStore';
import AddStore from '../pages/AddStore';
import EditProfile from '../pages/EditProfile';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => {
  const { ready } = useTracker(() => {
    const rdy = Roles.subscription.ready();
    return {
      ready: rdy,
    };
  });
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <TopMenu />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/editProfile/:_id" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
          <Route path="/home" element={<Landing />} />
          <Route path="/Stores" element={<VendorProtectedRoute ready={ready}><Stores /></VendorProtectedRoute>} />
          <Route path="/editVendor/:_id" element={<VendorProtectedRoute ready={ready}><EditStore /></VendorProtectedRoute>} />
          <Route path="/listVendors" element={<ListVendors />} />
          <Route path="/listRecipes" element={<ListRecipes />} />
          <Route path="/edit/:_id" element={<StudentProtectedRoute ready={ready}><EditRecipe /></StudentProtectedRoute>} />
          <Route path="/addRecipe" element={<StudentProtectedRoute ready={ready}><AddRecipe /></StudentProtectedRoute>} />
          <Route path="/addStore" element={<VendorProtectedRoute ready={ready}><AddStore /></VendorProtectedRoute>} />
          <Route path="/community" element={<Community />} />
          <Route path="/cookbook" element={<StudentProtectedRoute ready={ready}><Cookbook /></StudentProtectedRoute>} />
          <Route path="/notauthorized" element={<NotAuthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

/*
 * ProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  return isLogged ? children : <Navigate to="/signin" />;
};

const StudentProtectedRoute = ({ ready, children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  if (!ready) {
    return <LoadingSpinner />;
  }
  const isStudent = (Roles.userIsInRole(Meteor.userId(), 'student')) || Roles.userIsInRole(Meteor.userId(), 'admin');
  return (isLogged && isStudent) ? children : <Navigate to="/notauthorized" />;
};

const VendorProtectedRoute = ({ ready, children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  if (!ready) {
    return <LoadingSpinner />;
  }
  const isVendor = (Roles.userIsInRole(Meteor.userId(), 'vendor')) || Roles.userIsInRole(Meteor.userId(), 'admin');
  return (isLogged && isVendor) ? children : <Navigate to="/notauthorized" />;
};

/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ProtectedRoute.defaultProps = {
  children: <Landing />,
};

// Require a component and location to be passed to each AdminProtectedRoute.
StudentProtectedRoute.propTypes = {
  ready: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

StudentProtectedRoute.defaultProps = {
  ready: false,
  children: <Landing />,
};

// Require a component and location to be passed to each AdminProtectedRoute.
VendorProtectedRoute.propTypes = {
  ready: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

VendorProtectedRoute.defaultProps = {
  ready: false,
  children: <Landing />,
};
export default App;
