import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';
import { buscarSedes } from '../../actions';
import * as fromState from '../../reducers';
import Tabla from '../Tabla';
import BotonAddLibro from './BotonAddSede';

/**
 * Renderiza una página de libros.
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
  
      this.configuration = [
        {
          nombre: "ID PAIS",
          valor: (item) => item.idPais,
        },
        {
          nombre: "NOMBRE PAIS",
          valor: (item) => item.nombrePais,
        },
        {
          nombre: "ID CIUDAD",
          valor: (item) => item.idCiudad,
        },
        {
            nombre: "NOMBRE CIUDAD",
            valor: (item) => item.nombreCiudad,
          },
        {
          nombre: "VALOR",
          valor: (item) => item.valor,
        },
        {
          nombre: "DESCRIPCION",
          valor: (item) => item.descripcion,
        },
        {
          nombre: "VECES",
          valor: (item) => item.veces,
        },
      ]
    }
  
    onRowClick(id) {
      alert(`En este punto, podrías lanzar un modal de modificación o borrado para la sede con id = ${id}`)
    }

    componentDidMount() {
      this.props.buscarSedes();
    }

    render() {
      return (
        <div>
          <PageHeader>
            Sedes
          </PageHeader>
          <BotonAddLibro/>
          <div>
            {this.props.sedes && this.props.sedes.length > 0
            ?
              <Tabla 
                config={this.configuration} 
                data={this.props.sedes}
                onRowClick={this.onRowClick}
                />
            :
              <div>
                {this.props.estoyCargando ? "Cargando..." : "No hay sedes para mostrar"}
              </div>
            }
          </div>
        </div>
      )
    }
  }
  
  export default connect(
    (state) => ({
      sedes: fromState.getAllSedes(state),
      estoyCargando: fromState.isSedesLoading(state),
    }),
    (dispatch) => ({
      buscarSedes: () => dispatch(buscarSedes()),
    })
  )(Sedes)
