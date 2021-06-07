import React, { Component } from 'react';
import { PageHeader,  Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {buscarSedes, buscarCiudades, deleteSede } from '../../actions';
import * as fromState from '../../reducers';
import Tabla from '../Tabla';
import BotonAddSede from './BotonAddSede';
import ModalSede from './ModalSede';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

/**
 * Renderiza una página de Sedes.
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

 class Sedes extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        showModal: false,
        showModalEdit: false,
        showModalDelete: false,
        sedeId: null,
        ano: null,
      }
      
      this.configuration = [
        {
          nombre: "ID",
          valor: (item) => item.idSede,
        },
        {
          nombre: "ANO",
          valor: (item) => item.ano,
        },
        {
          nombre: "CIUDAD",
          valor: (item) => item.sede.nombre,
        },
        {
          nombre: "PAIS",
          valor: (item) => item.sede.pais.nombre,
        },
        {
            nombre: "TIPO",
            valor: (item) => item.tipo.tipo,
        },
        {
          nombre: "EDITAR",
          valor: (item) =>  <FontAwesomeIcon onClick={()=>this.editSede(item.idSede)} icon={faEdit}/>
        },
        {
          nombre: "BORRAR",
          valor: (item) =>  <FontAwesomeIcon onClick={()=>this.deleteSede(item.idSede, item.ano)} icon={faTrash}/>
        },
      ]
    }

    editSede(sedeId){
      this.setState(
        {
          ...this.state,
          showModalEdit: true,
          sedeId
        }
      )
    }

    deleteSede(sedeId, ano){
      this.setState(
        {
          ...this.state,
          showModalDelete: true,
          sedeId,
          ano
        }
      )
    }

    findSede(id){
      return this.props.sedes.find(e=> e.id === id);
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

    hideAndDelete(sedeId, ano){
      this.props.deleteSede(sedeId, ano);
      this.handleHideModal();
    }

  
    componentDidMount() {
      this.props.buscarCiudades();
      this.props.buscarSedes();
    }

    render() {
      return (
        <div>
          <PageHeader>
            Sedes
          </PageHeader>
          <BotonAddSede config={this.configuration} data={this.props.ciudades}/>
          <div>
            {this.props.sedes && this.props.sedes.length
            ?
              <Tabla
                config={this.configuration}
                data={this.props.sedes}
                onRowClick={(countryId) => this.onRowClick(countryId)}
              />
            :
              <div>
                {this.props.estoyCargando ? "Cargando..." : "No hay Sedes para mostrar"}
              </div>
            }
          </div>

          <ModalSede
            sede={this.findSede(this.state.sedeId)}
            isShowing={ this.state.showModalEdit } 
            hideModal={ () => this.handleHideModal() } /> 

          <Modal show={this.state.showModalDelete} onHide={() => this.handleHideModal()}>
            <Modal.Header closeButton>
            <Modal.Title>Borrando sede</Modal.Title>
            </Modal.Header>            
            
            <Modal.Body>Se borrará la sede con id: {this.state.sedeId} </Modal.Body>

            <Modal.Footer>
                <Button onClick={() => this.props.handleHideModal()}>Cancelar</Button>
                <Button bsStyle="danger" onClick={() => this.hideAndDelete(this.state.sedeId, this.state.ano)}>Borrar</Button>
            </Modal.Footer>
          </Modal>

        </div>
      )
    }
  }
  
  export default connect(
    (state) => ({
      sedes: fromState.getAllSedes(state),
      ciudades: fromState.getAllCiudades(state),
      estoyCargando: fromState.isSedesLoading(state),
    }),
    (dispatch) => ({
      buscarSedes: () => dispatch(buscarSedes()),
      buscarCiudades: () => dispatch(buscarCiudades()),
      deleteSede: (id, ano) => dispatch(deleteSede(id, ano)),
    })
  )(Sedes)
