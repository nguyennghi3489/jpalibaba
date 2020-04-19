import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { hideModal, ModalType } from "actions/modal";
import Button from "components/CustomButtons/Button.js";
import "./Modal.css";

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

  renderTitle(type) {
    switch (type) {
      case ModalType.Success: {
        return <div>Success</div>;
      }
      case ModalType.Loading: {
        return <div>Loading</div>;
      }
      default:
        return <div>Error</div>;
    }
  }

  closeClick = () => {
    const { overrideAction, hideModal } = this.props;
    if (overrideAction) {
      overrideAction();
    }
    hideModal();
  };

  render() {
    const { text, type } = this.props;
    console.log(this.props);
    return ReactDOM.createPortal(
      <div className="overlay">
        <div className="modal-container">
          <div className="modal-header">{this.renderTitle(type)}</div>
          <div className="modal-content">{text}</div>
          <div className="modal-action">
            <Button color="rose" onClick={this.closeClick}>
              Close
            </Button>
          </div>
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
  overrideAction: state.modal.overrideAction,
});

export default connect(
  mapStateToProps,
  { hideModal }
)(SharingModal);
