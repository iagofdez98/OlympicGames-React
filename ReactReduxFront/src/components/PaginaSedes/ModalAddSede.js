import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addSede } from '../../actions';

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
      
    getValidationStateNombrePais() {
        if (this.state.nuevoNombrePais.length > 0) return 'success';
        else if (!this.state.isNuevoNombrePaisClean) return 'error';
        return null;
      } 

    getValidationStateNombreCiudad() {
        if (this.state.nuevoNombreCiudad.length > 0) return 'success';
        else if (!this.state.isNuevoNombreCiudadClean) return 'error';
        return null;
      } 

    getValidationStateValor() {
        if (this.state.nuevoValor.length > 0) return 'success';
        else if (!this.state.isNuevoValorClean) return 'error';
        return null;
      } 

    getValidationStateDescripcion() {
        if (this.state.nuevoDescripcion.length > 0) return 'success';
        else if (!this.state.isNuevoDescripcionClean) return 'error';
        return null;
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

      handleSubmit() {
        if (this.getValidationStateNombrePais() === 'success' && this.getValidationStateNombreCiudad() === 'success' &&
            this.getValidationStateValor() === 'success' && this.getValidationStateDescripcion() === 'success') {
          this.props.addSede(this.state.nuevoNombrePais, this.state.nuevoNombreCiudad, 
                                this.state.nuevoValor, this.state.nuevoDescripcion);
        }
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
                <FormGroup
                validationState={this.getValidationStateNombrePais()}
                >
                <ControlLabel>Nombre Pais</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.nuevoNombrePais}
                    placeholder="Nombre Pais"
                    onChange={(event) => this.handleChangeNombrePais(event.target.value)}
                />
                {this.getValidationStateNombrePais() === 'error' &&
                    <HelpBlock>El campo no puede estar vacío</HelpBlock>
                }
                <FormControl.Feedback />
                </FormGroup>
               
                <FormGroup
                validationState={this.getValidationStateNombreCiudad()}
                >
                <ControlLabel>Nombre Ciudad</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.nuevoNombreCiudad}
                    placeholder="Nombre Ciudad"
                    onChange={(event) => this.handleChangeNombreCiudad(event.target.value)}
                />
                {this.getValidationStateNombreCiudad() === 'error' &&
                    <HelpBlock>El campo no puede estar vacío</HelpBlock>
                }
                <FormControl.Feedback />
                </FormGroup>

                <FormGroup
                validationState={this.getValidationStateValor()}
                >
                <ControlLabel>Valor</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.nuevoValor}
                    placeholder="Valor"
                    onChange={(event) => this.handleChangeValor(event.target.value)}
                />
                {this.getValidationStateValor() === 'error' &&
                    <HelpBlock>El campo no puede estar vacío</HelpBlock>
                }
                <FormControl.Feedback />
                </FormGroup>

                <FormGroup
                validationState={this.getValidationStateDescripcion()}
                >
                <ControlLabel>Descripcion</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.nuevoDescripcion}
                    placeholder="Descripcion"
                    onChange={(event) => this.handleChangeDescripcion(event.target.value)}
                />
                {this.getValidationStateDescripcion() === 'error' &&
                    <HelpBlock>El campo no puede estar vacío</HelpBlock>
                }
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
    null, //Null porque no necesitamos mapStateToProps, pero si mapDispatchToProps
    (dispatch) => ({
      addSede: (idPais, nombrePais, idCiudad, nombreCiudad, valor, 
        descripcion, veces) => dispatch(addSede(idPais, nombrePais, idCiudad,
          nombreCiudad, valor, descripcion, veces)),
        })  
  )(ModalAddSede)