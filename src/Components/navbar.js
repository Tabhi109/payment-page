import React from 'react';
import './components.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BsSearch} from 'react-icons/bs';
const Navbar = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" id= "navbar-head" href="#"><b className='ed-head'>EDYODA</b></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Courses
</a>
<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
  <a class="dropdown-item" href="#">Course 1</a>
</div>
</li>
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Programs
</a>
<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
  <a class="dropdown-item" href="#">Program 1</a>
</div>
</li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
        <button className='search-icon'>
        <BsSearch/>
        </ button>
        <button class="btn btn-outline-secondary my-2 my-sm-0" id ="login-btn" type="submit">Login</button>
        <button class="btn btn-primary my-2 my-sm-0" id ="signup-btn" type="submit">Sign Up</button>
        </form>
  </div>
</nav>
  );
};

export default Navbar;


