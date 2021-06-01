import React, { Component } from 'react';
import { ModalBody, ModalHeader, PageHeader, Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { buscarPaises, deletePais } from '../../actions';
import * as fromState from '../../reducers';
import Tabla from '../Tabla';
import BotonAddPais from './BotonAddPais';
import ModalShowCiudades from '../ModalShowCiudades'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import ModalPais from './ModalPais'

/**
 * Renderiza una página de paises.
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

 class Paises extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        showModalCiudad: false,
        showModalEdit: false,
        showDelete: false,
        countryId: null,
      }
      
      this.configuration = [
        {
          nombre: "ID PAIS",
          valor: (item) => item.id,
        },
        {
          nombre: "NOMBRE PAIS",
          valor: (item) => item.nombre,
        },
        {
          nombre: "CODIGO",
          valor: (item) => item.codigo,
        },
        {
          nombre: "VALOR",
          valor: (item) => item.valor,
        },
        {
          nombre: "CIUDADES",
          valor: (item) =>  <FontAwesomeIcon onClick={()=>this.showCiudades(item.id)} icon={faGlobe}/>
        },
        {
          nombre: "EDITAR",
          valor: (item) =>  <FontAwesomeIcon onClick={()=>this.editPais(item.id)} icon={faEdit}/>
        },
        {
          nombre: "BORRAR",
          valor: (item) =>  <FontAwesomeIcon onClick={()=>this.deletePais(item.id)} icon={faTrash}/>
        },
      ]

    }

    showCiudades(countryId){ 
      this.setState(
        {
          ...this.state,
          showModalCiudades: true,
          countryId
        }
      );
    }
    
    editPais(countryId){
      this.setState({
        ...this.state,
        showModalEdit : true,
        countryId
      })
    }

    deletePais(countryId){
      this.setState({
        ...this.state,
        showDelete : true,
        countryId
      })
    }

    // deletePais(countryId){
    //   this.props.deletePais(countryId);
    // }

    findPais(id){
      return this.props.paises.find(e=> e.id === id);
    }
    
     handleHideModal() {
      this.setState(
        {
          ...this.state,
          showModalCiudades: false,
          showModalEdit: false,
          showDelete: false,
        }
      )
    }

    hideAndDelete(countryId){
      this.props.deletePais(countryId);
      this.handleHideModal();
    }
  
    componentDidMount() {
      this.props.buscarPaises();
    }

    render() {
      return (
        <div>
          <PageHeader>
            Paises
          </PageHeader>
          <BotonAddPais/>
          <div>
            {this.props.paises && this.props.paises.length
            ?
              <Tabla
                config={this.configuration}
                data={this.props.paises}
              />
            :
              <div>
                {this.props.estoyCargando ? "Cargando..." : "No hay paises para mostrar"}
              </div>
            }
          </div>
          <ModalShowCiudades 
            id={this.state.countryId}
            isShowing={ this.state.showModalCiudades } 
            hide={ () => this.handleHideModal() }
          />

          <ModalPais
            pais={this.findPais(this.state.countryId)}
            isShowing={ this.state.showModalEdit } 
            hideModal={ () => this.handleHideModal() } /> 

          <Modal show={this.state.showDelete} onHide={() => this.handleHideModal()}>
            <Modal.Header closeButton>
            <Modal.Title>Borrando país</Modal.Title>
            </Modal.Header>            
            
            <Modal.Body>Se borrará el país con id: {this.state.countryId} </Modal.Body>

            <Modal.Footer>
                <Button onClick={() => this.props.hideModal()}>Cancelar</Button>
                <Button bsStyle="danger" onClick={() => this.hideAndDelete(this.state.countryId)}>Borrar</Button>
            </Modal.Footer>
        </Modal>
        </div>
      )
    }
  }
  
  export default connect(
    (state) => ({
      paises: fromState.getAllPaises(state),
      estoyCargando: fromState.isPaisesLoading(state),
    }),
    (dispatch) => ({
      buscarPaises: () => dispatch(buscarPaises()),
      deletePais: (id) => dispatch(deletePais(id)),
    })
  )(Paises)
