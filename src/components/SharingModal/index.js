import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { hideModal, ModalType } from "actions/modal";
import Button from "components/CustomButtons/Button.js";
import "./Modal.css";

import Cached from "@material-ui/icons/Cached";

const modalRoot = document.getElementById("modal-root");

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

  renderTitle() {
    const { type } = this.props;
    switch (type) {
      case ModalType.Success: {
        return <div>Success</div>;
      }
      case ModalType.Confirm: {
        return <div>Confirm</div>;
      }
      case ModalType.Loading: {
        return <div>Loading</div>;
      }
      default:
        return <div>Error</div>;
    }
  }

  closeClick = () => {
    const { type, action, hideModal } = this.props;

    if (type != ModalType.Confirm && action) {
      action();
    }
    hideModal();
  };

  renderActions = () => {
    const { type, action } = this.props;
    switch (type) {
      case ModalType.Confirm: {
        return (
          <>
            <Button color="rose" onClick={action}>
              Confirm
            </Button>
            <Button color="" onClick={this.closeClick}>
              Cancel
            </Button>
          </>
        );
      }
      default:
        return (
          <>
            <Button color="rose" onClick={this.closeClick}>
              Close
            </Button>
          </>
        );
    }
  };

  renderContent = () => {
    const { type, text } = this.props;
    switch (type) {
      case ModalType.Loading: {
        return (
          <>
            <Cached className="loading" color="action"></Cached>
          </>
        );
      }
      default:
        return <>{text}</>;
    }
  };

  render() {
    const { text, type } = this.props;
    console.log(this.props);
    return ReactDOM.createPortal(
      <div className="overlay">
        <div className="modal-container">
          <div className="modal-header">{this.renderTitle()}</div>
          <div className="modal-content">{this.renderContent()}</div>
          <div className="modal-action">{this.renderActions()}</div>
        </div>
      </div>,
      this.el
    );
  }
}

const mapStateToProps = (state) => ({
  isOpen: state.modal.isOpen,
  text: state.modal.text,
  type: state.modal.type,
  action: state.modal.action,
});

export default connect(
  mapStateToProps,
  { hideModal }
)(SharingModal);
