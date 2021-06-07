import React, { Component } from 'react';
import { PageHeader, Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { buscarCiudades, buscarPaises, deleteCiudad } from '../../actions';
import * as fromState from '../../reducers';
import Tabla from '../Tabla';
import BotonAddCiudad from './BotonAddCiudad';
import ModalShowCiudades from '../ModalShowCiudades'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

/**
 * Renderiza una página de ciudades.
 * Sirve de demostración acerca del uso de Redux y los renderizados condicionales.
 * Renderizados condicionales (CheatSheet) https://www.robinwieruch.de/conditional-rendering-react/
 * 
 * También se usa ComponentDidMount(), una función del lifecycle de los componentes de 
 * react que se ejecuta justo después de render()
 * React Lifecycle https://reactjs.org/docs/react-component.html#the-component-lifecycle
 * 
 * Las dos funciones anónimas presentes en el export se corresponden con mapStateToProps y mapDispatchToProps 
 * de react-redux 
 */
class Ciudades extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      showModal: false,
      countryId: null,
      ciudadId: null,
    }

    this.configuration = [
      {
        nombre: "ID",
        valor: (item) => item.id,
      },
      {
        nombre: "PAIS",
        valor: (item) => item.pais.nombre,
      },
      {
        nombre: "NOMBRE CIUDAD",
        valor: (item) => item.nombre,
      },
      {
        nombre: "VALOR",
        valor: (item) => item.valor,
      },
      {
        nombre: "EDITAR",
        valor: (item) =>  <FontAwesomeIcon onClick={()=>this.editCiudad(item.id)} icon={faEdit}/>
      },
      {
        nombre: "BORRAR",
        valor: (item) =>  <FontAwesomeIcon onClick={()=>this.deleteCiudad(item.id)} icon={faTrash}/>
      },
    ]
  }

  editCiudad(ciudadId){
    this.setState(
      {
        ...this.state,
        showModalEdit: true,
        ciudadId
      }
    )
  }

  deleteCiudad(ciudadId){
    this.setState(
      {
        ...this.state,
        showModalDelete: true,
        ciudadId,
      }
    )
  }

  handleHideModal() {
    this.setState(
      {
        ...this.state,
        showModal: false,
        showModalEdit: false,
        showModalDelete: false,
      }
    )
  }

  hideAndDelete(ciudadId){
    this.props.deleteCiudad(ciudadId);
    this.handleHideModal();
  }


  componentDidMount() {
    this.props.buscarCiudades();
    this.props.buscarPaises();
  }

  render() {
    return (
      <div>
        <PageHeader>
          Ciudades
        </PageHeader>
        <BotonAddCiudad config={this.configuration} data={this.props.paises}/>
        <div>
          {this.props.ciudades && this.props.ciudades.length
          ?
            <Tabla 
              //onClick={ () => this.handleOnClick() }
              config={this.configuration} 
              data={this.props.ciudades}
              />
          :
            <div>
              {this.props.estoyCargando ? "Cargando..." : "No hay ciudades para mostrar"}
            </div>
          }
        </div>
        <ModalShowCiudades 
            id={this.state.countryId}
            isShowing={ this.state.showModal } 
            hide={ () => this.handleHideModal() }
          />

        <Modal show={this.state.showModalDelete} onHide={() => this.handleHideModal()}>
            <Modal.Header closeButton>
            <Modal.Title>Borrando ciudad</Modal.Title>
            </Modal.Header>            
            
            <Modal.Body>Se borrará la ciudad con id: {this.state.ciudadId} </Modal.Body>

            <Modal.Footer>
                <Button onClick={() => this.props.handleHideModal()}>Cancelar</Button>
                <Button bsStyle="danger" onClick={() => this.hideAndDelete(this.state.ciudadId)}>Borrar</Button>
            </Modal.Footer>
          </Modal>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    paises: fromState.getAllPaises(state),
    ciudades: fromState.getAllCiudades(state),
    estoyCargando: fromState.isCiudadesLoading(state),
  }),
  (dispatch) => ({
    buscarCiudades: () => dispatch(buscarCiudades()),
    buscarPaises: () => dispatch(buscarPaises()),
    deleteCiudad: (id) => dispatch(deleteCiudad(id)),
  })
)(Ciudades)