import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';
import { buscarSedes, buscarCiudades } from '../../actions';
import * as fromState from '../../reducers';
import Tabla from '../Tabla';
import BotonAddSede from './BotonAddSede';
import ModalShowCiudades from '../ModalShowCiudades'
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
          }
      ]
    }
    
     handleHideModal() {
      this.setState(
        {
          ...this.state,
          showModal: false,
        }
      )
    }

    onRowClick(id) {
        alert(`En este punto, podrías lanzar un modal de modificación o borrado para el libro con id = ${id}`)
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
          <ModalShowCiudades 
            id={this.state.countryId}
            isShowing={ this.state.showModal } 
            hide={ () => this.handleHideModal() }
          />

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
    })
  )(Sedes)
