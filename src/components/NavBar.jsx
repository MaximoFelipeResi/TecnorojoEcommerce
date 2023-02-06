import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
      <h1>Tecnorojo</h1>
        <CartWidget/>
    </nav>
  )
}

export default NavBar;
