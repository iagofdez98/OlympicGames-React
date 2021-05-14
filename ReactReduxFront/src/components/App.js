import React, { Component } from 'react';
import TopNavBar from './NavBar/TopNavBar';
import { Route, Switch } from 'react-router-dom';
import PaginaLibros from './PaginaLibros/PaginaLibros';
import PaginaAgrupacion from './PaginaAgupacion/PaginaAgrupacion';
import PaginaPaises from './PaginaPaises/PaginaPaises';
import PaginaCiudades from './PaginaCiudades/PaginaCiudades';
import PaginaSedes from './PaginaSedes/PaginaSedes';


/**
 * Componente padre de la aplicación. Trataremos este componente como el <body> de nuestra página,
 * y colgaremos de él y de sus hijos cualquier otro componente que podamos necesitar.
 * 
 * En este caso se ha elegido que se use este componente como router principal de la aplicación, es decir,
 * que observe las rutas y decida qué componente o componentes se renderizan en cada una
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavBar />
        <div className="contenido">
          <Switch>
          <Route path='/' exact component={PaginaAgrupacion} />
          <Route path='/libros' component={PaginaLibros} />
          <Route path='/sedes' component={PaginaSedes} />
          <Route path='/paises' component={PaginaPaises} />
          <Route path='/ciudades' component={PaginaCiudades} />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
