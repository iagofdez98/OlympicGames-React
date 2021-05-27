import React, { Component } from 'react';
import ModalAddPais from './ModalAddPais';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

class ModalPais extends Component {
    constructor(props) {
        super(props);

        this.state = { 
          isDataNull: false, 
          showModal: false
        };
    }

    render() {
        return(
          <ModalAddPais 
              isShowing={ this.props.isShowing } 
              hideModal={ this.props.hideModal }
              pais={this.props.pais} 
          />
        )
    }
}
export default connect(
    null, //Null porque no necesitamos mapStateToProps, pero si mapDispatchToProps
    null
)(ModalPais);