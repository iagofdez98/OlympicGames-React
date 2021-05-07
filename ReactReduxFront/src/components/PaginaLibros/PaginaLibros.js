import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';
import { buscarLibros } from '../../actions';
import * as fromState from '../../reducers';
import Tabla from '../Tabla';
import BotonAddLibro from './BotonAddLibro';

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
class Libros extends Component {

  constructor(props) {
    super(props);

    this.configuration = [
      {
        nombre: "ID",
        valor: (item) => item.id,
      },
      {
        nombre: "TÍTULO",
        valor: (item) => item.titulo,
      },
      {
        nombre: "AUTOR",
        valor: (item) => item.autor,
      },
    ]
  }

  onRowClick(id) {
    alert(`En este punto, podrías lanzar un modal de modificación o borrado para el libro con id = ${id}`)
  }

  componentDidMount() {
    this.props.buscarLibros();
  }

  render() {
    return (
      <div>
        <PageHeader>
          Libros
        </PageHeader>
        <BotonAddLibro/>
        <div>
          {this.props.libros && this.props.libros.length > 0
          ?
          <Tabla 
            config={this.configuration} 
            data={this.props.libros}
            onRowClick={this.onRowClick}
          />          :
            <div>
              {this.props.estoyCargando ? "Cargando..." : "No hay libros para mostrar"}
            </div>
          }
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    libros: fromState.getAllLibros(state),
    estoyCargando: fromState.isLibrosLoading(state),
  }),
  (dispatch) => ({
    buscarLibros: () => dispatch(buscarLibros()),
  })
)(Libros)