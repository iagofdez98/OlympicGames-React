import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { withRouter} from 'react-router-dom';

/**
 * NavBar básico a modo de demostración del uso de 'withRouter' y 'history'
 */
class TopNavBar extends Component {
  
  handleOnClickInicio() {
    this.props.history.push(`/`)
  }

  handleOnClickLibros() {
    this.props.history.push(`/libros`)
  }
  
  handleOnClickSedes() {
    this.props.history.push(`/sedes/agrupacion`)
  }
  
  handleOnClickPaises() {
    this.props.history.push(`/paises`)
  } 

  handleOnClickCiudades() {
    this.props.history.push(`/ciudades`)
  } 

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand className="clickable">
            <span onClick={() => this.handleOnClickInicio()}>ReactRedux Qindel</span>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem onClick={() => this.handleOnClickLibros()}>
            Libros
          </NavItem>
        </Nav>
        <Nav>
          <NavItem onClick={() => this.handleOnClickSedes()}>
            Sedes
          </NavItem>
        </Nav>
        <Nav>
          <NavItem onClick={() => this.handleOnClickPaises()}>
            Paises
          </NavItem>
        </Nav>
        <Nav>
          <NavItem onClick={() => this.handleOnClickCiudades()}>
            Ciudades
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default withRouter(TopNavBar)