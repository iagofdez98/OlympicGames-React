import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addCiudad } from '../../actions';
import * as fromState from '../../reducers';

/**
 * Aqui se trata de manera breve el comportamiento de los inputs en React. 
 * 
 * Esta manera de construir formularios viene dada por parte de react-bootstrap, así que realmente no 
 * es algo que tener demasiado en cuenta. 
 * 
 * En lo que es importante fijarse es en cómo se sincronizan los valores de los campos con el 
 * estado local del componente, y en el renderizado condicional persente en los HelpBlock.
 * 
 * Además, este componente generará un action que llevará los datos para la creación 
 * hasta backend, y la respuesta del mismo deberá llevarnos a finalmente actualizar la tabla de libros.
 * 
 * Para más información detallada sobre este formulario (construído en base al primer ejemplo): 
 * https://react-bootstrap.github.io/components/forms/
 */
class ModalAddCiudad extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isNuevoPaisClean: true,
      isNuevoNombreClean: true,
      isNuevoValorClean: true,
      
      nuevoPais: "",
      nuevoNombre: "",
      nuevoValor: "",
    }
  }

  getValidationStatePais() {
    if (this.state.nuevoPais.length > 0) return 'success';
    else if (!this.state.isNuevoPaisClean) return 'error';
    return null;
  } 
  
  
  getValidationStateNombre() {
    if (this.state.nuevoNombre.length > 0) return 'success';
    else if (!this.state.isNuevoNombreClean) return 'error';
    return null;
  }

  getValidationStateValor() {
    if (this.state.nuevoValor.length > 0) return 'success';
    else if (!this.state.isNuevoValorClean) return 'error';
    return null;
  }

  handleChangePais(valor) {
    this.setState(
      {
        ...this.state,
        nuevoPais: valor,
        isNuevoPaisClean: false,
      }
    );
  }
  
  handleChangeNombre(valor) {
    this.setState(
      {
        ...this.state,
        nuevoNombre: valor,
        isNuevoNombreClean: false,
      }
    );
  }

  handleChangeValor(valor) {
    this.setState(
      {
        ...this.state,
        nuevoValor: valor,
        isNuevoValorClean: false,
      }
    );
  }

  handleSubmit() {
    if (this.getValidationStatePais() === 'success' && this.getValidationStateNombre() === 'success') {
      this.props.addCiudad(this.state.nuevoPais, this.state.nuevoNombre, this.state.nuevoValor);
    }
    this.props.hideModal();
  }

  render() {
    return (
      <Modal show={this.props.isShowing} onHide={() => this.props.hideModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Añadiendo una nueva Ciudad</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            <FormGroup
              validationState={this.getValidationStateNombre()}
            >
              <ControlLabel>Nombre Ciudad</ControlLabel>
              <FormControl
                type="text"
                value={this.state.nuevoNombre}
                placeholder="Nombre"
                onChange={(event) => this.handleChangeNombre(event.target.value)}
              />
              {this.getValidationStateNombre() === 'error' &&
                <HelpBlock>El campo no puede estar vacío</HelpBlock>
              }
              <FormControl.Feedback />
            </FormGroup>
            
            <FormGroup
              validationState={this.getValidationStatePais()}
            >
              <ControlLabel>Pais</ControlLabel>
              <FormControl componentClass="select" placeholder="Pais"
                 onChange={(event) => this.handleChangePais(event.target.value)}>
                 <option></option>
                  {
                      this.props.paises.map(function (each) {
                        return <option key={each.id} value={each}>{each.nombre}</option>
                      })
                  }

              {this.getValidationStatePais() === 'error' &&
                <HelpBlock>El campo no puede estar vacío</HelpBlock>
              }

            </FormControl>
            </FormGroup>
            <FormGroup
              validationState={this.getValidationStateNombre()}
            >
              <ControlLabel>Valor</ControlLabel>
              <FormControl
                type="text"
                value={this.state.nuevoValor}
                placeholder="Valor"
                onChange={(event) => this.handleChangeValor(event.target.value)}
              />

              <FormControl.Feedback />
            </FormGroup>

          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => this.props.hideModal()}>Cancelar</Button>
          <Button bsStyle="primary" onClick={() => this.handleSubmit()}>Guardar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(
  (state) => ({
    paises: fromState.getAllPaises(state),
  }),
(dispatch) => ({
    addCiudad: (id, pais, nombre, valor) => dispatch(addCiudad(id, pais, nombre, valor)),
  })

)(ModalAddCiudad);
