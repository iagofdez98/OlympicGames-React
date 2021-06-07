import React, { Component } from 'react';
import ModalAddSede from './ModalAddSede';
import { connect } from 'react-redux';

class ModalSede extends Component {
    constructor(props) {
        super(props);

        this.state = { 
          showModal: false
        };
    }

    render() {
        return(
          <ModalAddSede 
              isShowing={ this.props.isShowing } 
              hideModal={ this.props.hideModal }
              sede={this.props.sede} 
          />
        )
    }
}
export default connect(
    null, //Null porque no necesitamos mapStateToProps, pero si mapDispatchToProps
    null
)(ModalSede);