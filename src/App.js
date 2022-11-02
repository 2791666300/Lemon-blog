import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Index from './Routers/Index/index.component';
import Auth from './Routers/Auth.js/auth.component';
import ListNavigation from './Routers/ListNavigation/listNavi.component';
import Navigation from './Routers/Navigation/navigation.component';
import Home from './Routers/Home/home.component';
import Friendship from './Routers/Friendship/friendship.component';
import { GlobalStyle } from './globalStyles'


function App() {

  return (

    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/listnavi' element={<ListNavigation />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/navi' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='/navi/friendship' element={<Friendship />} />
        </Route>
      </Routes>
    </Fragment>


  )
}


export default App;
