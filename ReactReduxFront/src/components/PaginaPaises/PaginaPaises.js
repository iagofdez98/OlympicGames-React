import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';
import { buscarPaises } from '../../actions';
import * as fromState from '../../reducers';
import Tabla from '../Tabla';
import BotonAddPais from './BotonAddPais';
import ModalShowCiudades from '../ModalShowCiudades'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

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
        showModal: false,
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
        }/*,
        {
          nombre: "CIUDADES",
          valor: () =>  <FontAwesomeIcon onClick=()=>action(item.id) icon={faGlobe}/>
        }*/
      ]

      //this.onRowClick = this.onRowClick.bind(this);

    }

    /* handleOnClick() {
       this.setState(
         {
           ...this.state,
           showModal: true,
         }
       )
     *}
    */
    
     handleHideModal() {
      this.setState(
        {
          ...this.state,
          showModal: false,
        }
      )
    }

    onRowClick(countryId) {
      this.setState(
        {
          ...this.state,
          showModal: true,
          countryId
        }
      );
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
                onRowClick={(countryId) => this.onRowClick(countryId)}
              />
            :
              <div>
                {this.props.estoyCargando ? "Cargando..." : "No hay paises para mostrar"}
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
      paises: fromState.getAllPaises(state),
      estoyCargando: fromState.isPaisesLoading(state),
    }),
    (dispatch) => ({
      buscarPaises: () => dispatch(buscarPaises()),
    })
  )(Paises)
