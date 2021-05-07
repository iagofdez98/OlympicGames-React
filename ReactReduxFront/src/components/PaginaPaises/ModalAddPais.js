import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addPais } from '../../actions';

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

 class ModalAddPais extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        isNuevoNombreClean: true,
        isNuevoCodigoClean: true,
        isNuevoValorClean: true,

        nuevoNombre: "", 
        nuevoCodigo: "", 
        nuevoValor: "", 
      }
    }
      
    getValidationStateNombre() {
        if (this.state.nuevoNombre.length > 0) return 'success';
        else if (!this.state.isNuevoNombreClean) return 'error';
        return null;
      } 

    getValidationStateCodigo() {
        if (this.state.nuevoCodigo.length > 0) return 'success';
        else if (!this.state.isNuevoCodigoClean) return 'error';
        return null;
      } 

    getValidationStateValor() {
        if (this.state.nuevoValor.length > 0) return 'success';
        else if (!this.state.isNuevoValorClean) return 'error';
        return null;
      } 

      handleChangeNombrePais(valor) {
        this.setState(
          {
            ...this.state,
            nuevoNombre: valor,
            isNuevoNombreClean: false,
          }
        );
      }

      handleChangeCodigo(valor) {
        this.setState(
          {
            ...this.state,
            nuevoCodigo: valor,
            isNuevoCodigo: false,
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
        if (this.getValidationStateNombre() === 'success' && this.getValidationStateCodigo() === 'success' &&
            this.getValidationStateValor() === 'success') {
          this.props.addPais(this.state.nuevoNombre, this.state.nuevoCodigo, 
                                this.state.nuevoValor);
        }
        this.props.hideModal();
      }

    
    render() {
        return (
        <Modal show={this.props.isShowing} onHide={() => this.props.hideModal()}>
            <Modal.Header closeButton>
            <Modal.Title>Añadiendo un nuevo pais</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <form>
                <FormGroup
                validationState={this.getValidationStateNombre()}
                >
                <ControlLabel>Nombre Pais</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.nuevoNombre}
                    placeholder="Nombre Pais"
                    onChange={(event) => this.handleChangeNombrePais(event.target.value)}
                />
                {this.getValidationStateNombre() === 'error' &&
                    <HelpBlock>El campo no puede estar vacío</HelpBlock>
                }
                <FormControl.Feedback />
                </FormGroup>
               
                <FormGroup
                validationState={this.getValidationStateCodigo()}
                >
                <ControlLabel>Codigo</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.nuevoCodigo}
                    placeholder="Codigo"
                    onChange={(event) => this.handleChangeCodigo(event.target.value)}
                />
                {this.getValidationStateCodigo() === 'error' &&
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
      addPais: (nombre, codigo, valor) => 
      dispatch(addPais(nombre, codigo, valor)),
    })
  
  )(ModalAddPais);