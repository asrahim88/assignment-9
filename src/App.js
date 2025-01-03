import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import BlogsDetails from './Components/BlogsDetails/BlogsDetails';
import Dashboard from './Components/Dashboard/Dashboard';
import Footers from './Components/Footers/Footers';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/blogsDetails' element={<BlogsDetails></BlogsDetails>} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        <Route path='reviews' element={<Reviews></Reviews>}></Route>
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
      <Footers></Footers>
    </div>
  );
}

export default App;
