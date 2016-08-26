'use strict';

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage.react')} />
    <NotFoundRoute name="notfound" handler={require('./components/notFound.react')} />
    <Redirect from="about-us" to="about" />
    <Route name="home" handler={require('./components/homePage.react')} />
    <Route name="authors" handler={require('./components/authors/authorsPage.react')} />
    <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage.react')} />
    <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage.react')} />
    <Route name="courses" handler={require('./components/courses/coursesPage.react')} />
    <Route name="addCourse" handler={require('./components/courses/manageCoursePage.react')} />
    <Route name="manageCourse" path="course/:id" handler={require('./components/courses/manageCoursePage.react')} />
    <Route name="about" handler={require('./components/about/aboutPage.react')} />
  </Route>
);
