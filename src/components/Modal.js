/*
 * The modal to display more information for a given image/video such as the date it was posted to NASA, it's description, and a link to the high-resolution version
 */

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
            <div className="modal-content">
              {this.props.children}
              <button
                onClick={(e) => this.onClose(e)}
                className="modal-close-button"
              >
                &times;
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
