import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ModalAddSede from './ModalAddSede';

/**
 * Este botón abrirá un modal para la creación de un sede.
 * Podemos implementar las transiciones del modal de varias maneras.
 * En esta ocasión se realiza cambiando un valor del estado local (no confundir 
 * con el estado de Redux), pero también podría renderizarse en función de una 
 * ruta, o como respuesta a un cambio en el estado de redux si lo conectamos al mismo.
 * Sirva este componente como demostración del uso del estado local de los componentes, 
 * que al igual que el de redux, cumple el principio de inmutabilidad siendo modificado 
 * siempre a través del método this.setState(newState).
 */

 class BotonAddSede extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        showModal: false,
      }
    }
  
    handleOnClick() {
      this.setState(
        {
          ...this.state,
          showModal: true,
        }
      )
    }
  
    handleHideModal() {
      this.setState(
        {
          ...this.state,
          showModal: false,
        }
      )
    }
  
    render() {
      return (
        <div className="alineacion-derecha margin-bottom-1">
          <Button bsStyle="success" onClick={ () => this.handleOnClick() }>Añadir sede</Button>
          <ModalAddSede isShowing={ this.state.showModal } hideModal={ () => this.handleHideModal() } />
        </div>
      );
    }
  }
  
  export default BotonAddSede;
  