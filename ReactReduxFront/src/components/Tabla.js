import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Fila from './Fila';

/**
 * Representa la tabla de libros.
 * Sirve de demostración sobre los renderizados en bucle y el paso de propiedades 
 * entre componentes.
 * Nota: Los renderizados en bucle necesitan que establezcas un prop "key" única a cada iteración
 */

class Tabla extends Component {

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              {this.props.config.map((each) => 
                <th key={each.nombre}>
                  {each.nombre}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((element, index) => (
              <Fila index={index} config={this.props.config} data={element} onRowClick={this.props.onRowClick}/>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Tabla;