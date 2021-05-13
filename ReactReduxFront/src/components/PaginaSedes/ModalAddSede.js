import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addSede } from '../../actions';
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

 class ModalAddSede extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        isNuevoNombrePaisClean: true,
        isNuevoNombreCiudadClean: true,
        isNuevoValorClean: true,
        isNuevoDescripcionClean: true,

        nuevoNombrePais: "", 
        nuevoNombreCiudad: "", 
        nuevoValor: "", 
        nuevoDescripcion: "", 
      }
    }

      handleChangeNombrePais(valor) {
        this.setState(
          {
            ...this.state,
            nuevoNombrePais: valor,
            isNuevoNombrePaisClean: false,
          }
        );
      }

      handleChangeNombreCiudad(valor) {
        this.setState(
          {
            ...this.state,
            nuevoNombreCiudad: valor,
            isNuevoNombreCiudadClean: false,
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

      handleChangeDescripcion(valor) {
        this.setState(
          {
            ...this.state,
            nuevoDescripcion: valor,
            isNuevoDescripcionClean: false,
          }
        );
      }

      retrieveCountryById(id) {
        return this.props.paises.find(e=> e.id == id);
      }

      retrieveCityById(id) {
        return this.props.ciudades.find(e=> e.id == id);
      }

      handleSubmit() {
        this.props.addSede(this.retrieveCountryById(new Number(this.selectVal.value)), this.retrieveCityById(new Number(this.selectValCiudades.value)), 
                                this.state.nuevoValor, this.state.nuevoDescripcion);
        this.props.hideModal();
      }

    
    render() {
        return (
        <Modal show={this.props.isShowing} onHide={() => this.props.hideModal()}>
            <Modal.Header closeButton>
            <Modal.Title>Añadiendo una nueva sede</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <form>
                <FormGroup>
                <ControlLabel>Nombre Pais</ControlLabel>
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
                <FormControl.Feedback />
                </FormGroup>
               
                <FormGroup>
                <ControlLabel>Nombre Ciudad</ControlLabel>
                <FormControl
                    componentClass="select"
                    inputRef={(input) => this.selectValCiudades = input} 
                    required>
                      {
                          this.props.ciudades.map(function (each) {
                            return <option key={each.id} value={each.id}>{each.nombre}</option>
                          })
                      }
                </FormControl>
                <FormControl.Feedback />
                </FormGroup>

                <FormGroup>
                <ControlLabel>Valor</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.nuevoValor}
                    placeholder="Valor"
                    onChange={(event) => this.handleChangeValor(event.target.value)}
                    required
                />
                <FormControl.Feedback />
                </FormGroup>

                <FormGroup>
                <ControlLabel>Descripcion</ControlLabel>
                <FormControl
                    componentClass="select"
                    inputRef={(input) => this.selectValCiudades = input} 
                    required>
                        <option value={"Verano"}>Verano</option>
                        <option value={"Invierno"}>Invierno</option>
                </FormControl>

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
    ciudades: fromState.getAllCiudades(state),
  }),    
  (dispatch) => ({
      addSede: (nombrePais, nombreCiudad, valor, descripcion) => dispatch(addSede(nombrePais, nombreCiudad, valor, descripcion)),
        })  
  )(ModalAddSede)