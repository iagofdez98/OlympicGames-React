import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ciudadesPais } from '../actions';
import Tabla from './Tabla';
import * as fromState from '../reducers';

class ModalShowCiudades extends Component {
  
  constructor(props) {
    super(props);

    this.configuration = [
      {
        nombre: "ID",
        valor: (item) => item.id,
      },
      {
        nombre: "NOMBRE CIUDAD",
        valor: (item) => item.nombre,
      },
    ]

    this.state = {
      showModal: false,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.id 
      && (!prevProps.id || prevProps.id !== this.props.id)) {
      this.props.ciudadesPais(this.props.id);
    }
  }

  // getDerivedStateFromProps(props, state) {
  //   if (this.props.id) {
  //     return {
  //       ...state,
        
  //      }
  //   }
  // }

  render() {
    return (
    <Modal show={this.props.isShowing} onHide={() => this.props.hide()}>
        <Modal.Header closeButton>
        <Modal.Title>Lista de ciudades del país</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div>
            {this.props.ciudades && this.props.ciudades.length
            ?
              <Tabla
                config={this.configuration}
                data={this.props.ciudades}
              />
            :
              <div>
                {this.props.estoyCargando ? "Cargando..." : "No hay ciudades para mostrar"}
              </div>
            }
          </div>

        </Modal.Body>

        <Modal.Footer>
        <Button onClick={() => this.props.hide()}>Salir</Button>
        </Modal.Footer>
    </Modal>
    );
  }
    
}

export default connect(
    (state) => ({
      ciudades: fromState.ciudadesPais(state),
      estoyCargando: fromState.isCiudadesLoading(state),
    }),
    (dispatch) => ({
      ciudadesPais: (idPais) => dispatch(ciudadesPais(idPais),
    )})  
  )(ModalShowCiudades)