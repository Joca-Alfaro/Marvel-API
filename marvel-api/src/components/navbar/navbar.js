import React from 'react'
import './navbar.css'


export const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img className="logo" src="https://coolhdwall.com/storage1/202107/captain-marvel-4K-wallpaper-pc-preview.jpg" alt="sorry:(" />
      <h3 class="navbar-brand">Marvel Api</h3>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">

          <a class="nav-item nav-link" href="#">Personajes</a>
          <a class="nav-item nav-link" href="#">Comics</a>

           <div class="input-group mb-3">
            <div class="input-group-prepend" id='FRM_INTUPS'>
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Busqueda</button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Busqueda Personaje</a>
                <a class="dropdown-item" href="#">Busqueda id personaje</a>
                <a class="dropdown-item" href="#">Busqueda Comic</a>
                <div role="separator" class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            <input type="text" class="form-control" aria-label="Text input with dropdown button"></input>
            <button class="btn btn-outline-primary my-2 my-sm-0" id='BTN_BUSCAR' type="submit">Busqueda</button>
          </div>


          {/* <form id='FRM_SEARCH_PERSONAJE' class="form-inline md-3 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Busqueda por Personaje" aria-label="Busqueda Por Id"></input>
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>
          <form id='FRM_SEARCH_ID' class="form-inline my-3 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Busqueda por Id" aria-label="Busqueda Por Id"></input>
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>
          <form id='FRM_SEARCH_COMIC' class="form-inline my-3 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Busqueda por Comic" aria-label="Busqueda Por Id"></input>
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>
          <a class="nav-item nav-link disabled" href="#"></a> */}
        </div>
      </div>
    </nav>




  )
}
export default Navbar;
