

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Article from './pages/Article';
import CreateArticle from './pages/CreateArticle';
import UserProfile from './pages/UserProfile';
import EditProfile from './pages/EditProfile';
import EditArticle from './pages/EditArticle';
import ProtectedRoutes from './pages/ProtectedRoutes';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <ProtectedRoutes path="/articles/:slug" component={Article} />
          <ProtectedRoutes path="/new" component={CreateArticle} />
          <ProtectedRoutes path="/profile" component={UserProfile} />
          <ProtectedRoutes path="/editprofile" component={EditProfile} />
          <ProtectedRoutes path="/editarticle" component={EditArticle} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;