import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
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
        nuevoNombre: "", 
        nuevoCodigo: "", 
        nuevoValor: "", 
      }
    }

      handleChangeNombrePais(valor) {
        this.setState(
          {
            ...this.state,
            nuevoNombre: valor,
          }
        );
      }

      handleChangeCodigo(valor) {
        this.setState(
          {
            ...this.state,
            nuevoCodigo: valor,
          }
        );
      }

      handleChangeValor(valor) {
        this.setState(
          {
            ...this.state,
            nuevoValor: valor,
          }
        );
      }

      setDefaultId() {
        return this.props.pais ? this.props.pais.id : null;
      }

      setDefaultNombre() {
        return this.props.pais ? this.props.pais.nombre : null;
      }

      setDefaultCodigo() {
        return this.props.pais ? this.props.pais.codigo : null;
      }

      setDefaultValor() {
        return this.props.pais ? this.props.pais.valor : null;
      }
  
      componentDidUpdate(prevProps) {
        if (this.props.id 
          && (!prevProps.id || prevProps.id !== this.props.id)) {
          this.findCountryById(this.props.id);
        }
      }

      resetStates(){
        this.setState(
          {
            ...this.state,
            nuevoValor: null,
            nuevoCodigo: null,
            nuevoNombre: null
          }
        );
      }

      handleSubmit() {
        this.props.addPais(this.setDefaultId() ,
              this.state.nuevoNombre ? this.state.nuevoNombre : this.setDefaultNombre(), 
              this.state.nuevoCodigo ? this.state.nuevoCodigo : this.setDefaultCodigo(), 
              (this.state.nuevoValor !== 0 && this.state.nuevoValor !== null) ? this.state.nuevoValor : this.setDefaultValor());
        this.resetStates();
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
                <FormGroup>
                <ControlLabel>Nombre Pais</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Pais"
                    defaultValue={this.setDefaultNombre()}
                    onChange={(event) => this.handleChangeNombrePais(event.target.value)}
                    required
                />
                <FormControl.Feedback />
                </FormGroup>
               
                <FormGroup>
                <ControlLabel>Codigo</ControlLabel>
                <FormControl
                    type="text"
                    defaultValue={this.setDefaultCodigo()}
                    placeholder="Codigo"
                    onChange={(event) => this.handleChangeCodigo(event.target.value)}
                    required
                />
                <FormControl.Feedback />
                </FormGroup>

                <FormGroup>
                <ControlLabel>Valor</ControlLabel>
                <FormControl
                    type="text"
                    defaultValue={this.setDefaultValor()}
                    placeholder="Valor"
                    onChange={(event) => this.handleChangeValor(event.target.value)}
                    required
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
    null, //Null porque no necesitamos mapStateToProps, pero si mapDispatchToProps
    (dispatch) => ({
      addPais: (id, nombre, codigo, valor) => 
      dispatch(addPais(id, nombre, codigo, valor)),
    })
  
  )(ModalAddPais);