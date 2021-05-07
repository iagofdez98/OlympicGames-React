import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addLibro } from '../../actions';

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
class ModalAddLibro extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isNuevoAutorClean: true,
      isNuevoTituloClean: true,
      nuevoAutor: "",
      nuevoTitulo: "",
    }
  }

  getValidationStateAutor() {
    if (this.state.nuevoAutor.length > 0) return 'success';
    else if (!this.state.isNuevoAutorClean) return 'error';
    return null;
  } 
  
  getValidationStateTitulo() {
    if (this.state.nuevoTitulo.length > 0) return 'success';
    else if (!this.state.isNuevoTituloClean) return 'error';
    return null;
  }

  handleChangeAutor(valor) {
    this.setState(
      {
        ...this.state,
        nuevoAutor: valor,
        isNuevoAutorClean: false,
      }
    );
  }
  
  handleChangeTitulo(valor) {
    this.setState(
      {
        ...this.state,
        nuevoTitulo: valor,
        isNuevoTituloClean: false,
      }
    );
  }

  handleSubmit() {
    if (this.getValidationStateAutor() === 'success' && this.getValidationStateTitulo() === 'success') {
      this.props.addLibro(this.state.nuevoAutor, this.state.nuevoTitulo);
    }
    this.props.hideModal();
  }

  render() {
    return (
      <Modal show={this.props.isShowing} onHide={() => this.props.hideModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Añadiendo un nuevo Libro</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            <FormGroup
              validationState={this.getValidationStateAutor()}
            >
              <ControlLabel>Autor</ControlLabel>
              <FormControl
                type="text"
                value={this.state.nuevoAutor}
                placeholder="Autor"
                onChange={(event) => this.handleChangeAutor(event.target.value)}
              />
              {this.getValidationStateAutor() === 'error' &&
                <HelpBlock>El campo no puede estar vacío</HelpBlock>
              }
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup
              validationState={this.getValidationStateTitulo()}
            >
              <ControlLabel>Título</ControlLabel>
              <FormControl
                type="text"
                value={this.state.nuevoTitulo}
                placeholder="Título"
                onChange={(event) => this.handleChangeTitulo(event.target.value)}
              />
              {this.getValidationStateTitulo() === 'error' &&
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
    addLibro: (autor, titulo) => dispatch(addLibro(autor, titulo)),
  })

)(ModalAddLibro);
