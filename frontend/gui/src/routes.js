import React from 'react';
import { Route } from 'react-router-dom';
import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';

const BaseRouter = () => (
    <div>
      <Route exact path='/' component={ArticleList} />
      <Route path='/login/' component={Login} />
      <Route path='/signup/' component={Signup} />
      <Route path='/articles/:articleID/' component={ArticleDetail} />
    </div>
);

export default BaseRouter;
