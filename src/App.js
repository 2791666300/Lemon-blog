import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Index from './Routers/Index/index.component';
import Auth from './Routers/Auth.js/auth.component';
import ListNavigation from './Routers/ListNavigation/listNavi.component';
import Navigation from './Routers/Navigation/navigation.component';
import Home from './Routers/Home/home.component';
import Friendship from './Routers/Friendship/friendship.component';
import AboutMe from './Routers/AboutMe/aboutMe.component';
import AboutBlog from './Routers/AboutBlog/aboutBolg.component';
import More from './Routers/More/more.component';
import Articles from './Routers/Articles/articles.component';
import { GlobalStyle } from './globalStyles'


function App() {

  return (

    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/listnavi' element={<ListNavigation />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/navi/*' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='friendship' element={<Friendship />} />
          <Route path='aboutme' element={<AboutMe />} />
          <Route path='aboutblog' element={<AboutBlog />} />
          <Route path='more' element={<More />} />
          <Route path='articles' element={<Articles />} />
        </Route>
      </Routes>
    </Fragment>


  )
}


export default App;
