import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';
import { buscarCiudades } from '../../actions';
import * as fromState from '../../reducers';
import Tabla from '../Tabla';
import BotonAddCiudad from './BotonAddCiudad';
import ModalShowCiudades from '../ModalShowCiudades'

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

  onRowClick() {
    this.setState(
      {
        ...this.state,
        showModal: true,
      }
    );
  }

  componentDidMount() {
    this.props.buscarCiudades();
  }

  render() {
    return (
      <div>
        <PageHeader>
          Ciudades
        </PageHeader>
        <BotonAddCiudad config={this.configuration}/>
        <div>
          {this.props.ciudades && this.props.ciudades.length
          ?
            <Tabla 
              onClick={ () => this.handleOnClick() }
              config={this.configuration} 
              data={this.props.ciudades}
              onRowClick={(countryId) => this.onRowClick(countryId)}
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
      </div>
    )
  }
}

export default connect(
  (state) => ({
    ciudades: fromState.getAllCiudades(state),
    estoyCargando: fromState.isCiudadesLoading(state),
  }),
  (dispatch) => ({
    buscarCiudades: () => dispatch(buscarCiudades()),
  })
)(Ciudades)