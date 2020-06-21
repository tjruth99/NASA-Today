import React from "react";

class Modal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (this.props.show) {
      return (
        <>
          <div className="modal">
            <div className="modal-content">{this.props.children}</div>
            <div>
              <button
                onClick={(e) => this.onClose(e)}
                className="modal-close-button"
              >
                Close
              </button>
            </div>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  }
}

export default Modal;
