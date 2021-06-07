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
        isNuevoAnoClean: true,

        nuevoAno: "", 
      }
    }

      handleChangeAno(valor) {
        this.setState(
          {
            ...this.state,
            nuevoAno: valor,
            isNuevoAnoClean: false,
          }
        );
      }

      retrieveCityById(id) {
        return this.props.ciudades.find(e=> e.id === id);
      }

      retrieveDescriptionById(id) {
        if (id === 2){
            return ({"id": 2, "tipo": "Verano"}) ;
        }else{
            return ({"id": 1, "tipo": "Invierno"}) ;

        }
      }

      handleSubmit() {
        this.props.addSede(new Number(this.state.nuevoAno),
                            this.retrieveCityById(this.selectValCiudades.value),
                            this.retrieveDescriptionById(this.selectValTipo.value));
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
              <ControlLabel>Año</ControlLabel>
              <FormControl
                type="text"
                value={this.state.nuevoNombre}
                placeholder="Nombre"
                onChange={(event) => this.handleChangeAno(event.target.value)}
                required
              />
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
                <ControlLabel>Descripcion</ControlLabel>
                <FormControl
                    componentClass="select"
                    inputRef={(input) => this.selectValTipo = input} 
                    required>
                        <option value={2}>Verano</option>
                        <option value={1}>Invierno</option>
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
    ciudades: fromState.getAllCiudades(state),
  }),    
  (dispatch) => ({
      addSede: (ano, sede, tipo) => dispatch(addSede(ano, sede, tipo)),
        })  
  )(ModalAddSede)