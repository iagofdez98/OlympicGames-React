import React, { Component } from 'react';

/**
 * Representa cada fila de la tabla de sedes.
 * Muestra una manera distinta de acceder a los atributos de un objeto JSON, 
 * lo que ofrece versatilidad al mover propiedades entre componentes
 */
class Fila extends Component {

  render() {
    return (
      <tr className="clickable" onClick={() => this.props.onRowClick(this.props.data.id) }>
        {this.props.config.map((each, index) => (
          <td key={this.props.index + "_" + index}>{each.valor(this.props.data)}</td>
          ))}
      </tr>
    )
  }
}

export default Fila;