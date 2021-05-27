import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
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

  setDefaultNombre() {
    return this.props.pais.nombre;
  }

  retrieveCountryById(id) {
    return this.props.paises.find(e=> e.id === id);
  }

  handleSubmit() {
    this.props.addCiudad(this.retrieveCountryById(new Number(this.selectVal.value)), this.state.nuevoNombre, this.state.nuevoValor);
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
            <FormGroup>
              <ControlLabel>Nombre Ciudad</ControlLabel>
              <FormControl
                type="text"
                value={this.state.nuevoNombre}
                placeholder="Nombre"
                onChange={(event) => this.handleChangeNombre(event.target.value)}
                required
              />
              <FormControl.Feedback />
            </FormGroup>
            
            <FormGroup>
              <ControlLabel>Pais</ControlLabel>
              <FormControl 
                componentClass="select"
                inputRef={(input) => this.selectVal = input} 
                required>
                  {
                      this.props.paises.map(function (each) {
                        return <option key={each.id} value={each.id}>{each.nombre}</option>
                      })
                  }

            </FormControl>
            </FormGroup>
            <FormGroup>
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
    addCiudad: (pais, nombre, valor) => dispatch(addCiudad(pais, nombre, valor)),
  })

)(ModalAddCiudad);
