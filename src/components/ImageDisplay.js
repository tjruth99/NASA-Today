import React from "react";
import Modal from "./Modal";

class ImageDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        <div className="image-display">
          <img
            src={this.props.info.imageSource}
            alt="APOD"
            id="apod-image"
            onClick={this.showModal}
          />
          <Modal onClose={this.showModal} show={this.state.show}>
            <div>
              <p id="image-title">{this.props.info.title}</p>
              <br />
              <p id="image-date">{this.props.info.date}</p>
              <br />
              <p id="image-description">{this.props.info.description}</p>
            </div>
          </Modal>
        </div>
      </>
    );
  }
}

export default ImageDisplay;
