import React from 'react';
import { NavLink } from "react-router-dom"


function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{background: "#2e856e"}}>
      <a class="navbar-brand" href="#">
    <img src="/docs/4.6/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
    </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link"  exact to="/" activeClassName="active"> Home <span class="sr-only">(current)</span> </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/about-us" activeClassName="active"> About us </NavLink>
      </li>
    </ul>
    <a className="navbar-brand" href="#" form-inline my-2 my-lg-0>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
    </a>
  </div>
</nav>

  );
}
   


export default Navbar;