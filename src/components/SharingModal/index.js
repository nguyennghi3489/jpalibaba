import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { hideModal } from "actions/modal";
import "./Modal.css";

const modalRoot = document.getElementById("modal-root");

class ModalContainer extends React.Component {
  render() {
    return (
      <div className="modal-container">
        <div class="modal-content">
          <h1>Hello World</h1>
          <button onClick={this.props.onHide}>Close</button>
        </div>
      </div>
    );
  }
}

class SharingModal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
    document.documentElement.style.overflow = "hidden";
    document.body.scroll = "no";
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    document.documentElement.style.overflow = "scroll";
    document.body.scroll = "yes";
  }

  render() {
    return ReactDOM.createPortal(
      <ModalContainer onHide={this.props.hideModal}>
        {this.props.children}
      </ModalContainer>,
      this.el
    );
  }
}

const mapStateToProps = (state) => ({
  isOpen: state.modal.isOpen,
});

export default connect(
  mapStateToProps,
  { hideModal }
)(SharingModal);
